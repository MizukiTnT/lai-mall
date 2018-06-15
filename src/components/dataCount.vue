<template>
  <div class="count-box">
    <button :disabled="navCount>=200" class="add" @click="add">+</button>
    <input @blur="blurHandle" maxlength="3" v-model="navCount" class="inputer" type="number">
    <button class="decender" :disabled="navCount<=1" @click="decender">-</button>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        limit: 200,
        toltal: 0,
        navCount: 0
      }
    },
    props: {
      count: {
        type: Number,
        default: 1
      },
      index: {
        type: Number,
        default: null
      }
    },
    methods: {
      add () {
        this.navCount += 1
        if (this.navCount >= 200) {
          this.navCount = 200
        }
        this.$emit('totalChange', this.navCount, this.index)
      },
      decender () {
        this.navCount -= 1
        if (this.navCount <= 1) {
          this.navCount = 1
        }
        this.$emit('totalChange', this.navCount, this.index)
      },
      blurHandle (e) {
        let value = Number(e.target.value)
        console.log(value)
        if (value >= 200) {
          this.navCount = 200
        } else if (value >= 1) {
          this.navCount = value
        } else if (value < 1) {
          this.navCount = 1
        }
      }
    },
    created () {
      this.navCount = this.count
      if (this.navCount >= 200) {
        this.navCount = 200
      } else if (this.navCount <= 1) {
        this.navCount = 1
      }
    }
  }
</script>

<style lang="less">
@import url('../style/comm');
  .count-box {
    position: absolute;
    right: 10px;
    width: 40%;
    top: 10px;
    display: flex;
    border: 1px solid #f5f5f5;
    align-items: center;
    justify-content: center;
    button[disabled] {
      color: #999;
      background-color: #fff;
    }
    button {
      display: inline-block;
      flex: 0 0 25px;
      padding: 0;
      line-height: 20px;
      text-align: center;
      font-size: 16px;
      font-weight: 600;
      background: transparent;
      &.add {
        border-right: 1px solid #f5f5f5;
      }
      &.decender {
        border-left: 1px solid #f5f5f5;
      }
      &:after {
        border: none;
      }
    }


    .inputer {
      flex: 1 0 30px;
      display: inline-block;
      height: 20px;
      line-height: 20px;
      font-size: 12px;
      text-align: center;
    }
  }
</style>
