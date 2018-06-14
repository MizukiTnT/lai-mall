<template>
  <div class="count-box">
    <text class="add" @click="add">+</text>
    <input maxlength="3" :value="count" class="inputer" type="number">
    <text class="decender" @click="decender">-</text>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        limit: 200,
        toltal: 0
      }
    },
    props: {
      count: {
        type: Number,
        default: 0
      },
      price: {
        type: Number,
        default: 0
      },
      index: {
        type: Number,
        default: 0
      }
    },
    methods: {
      add () {
        this.count += 1
        this.toltal = this.count * this.price
        this.$emit('totalChange', this.total, this.index)
      },
      decender () {
        this.count -= 1
        this.toltal = this.count * this.price
        this.$emit('totalChange', this.total, this.index)
      }
    }
  }
</script>

<style lang="less">
  .count-box {
    position: absolute;
    right: 10px;
    width: 40%;
    top: 10px;
    display: flex;
    border: 1px solid #f5f5f5;
    align-items: center;
    justify-content: center;
    .add {
      display: inline-block;
      flex: 0 0 25px;
      line-height: 20px;
      border-right: 1px solid #f5f5f5;
      text-align: center;
    }
    .decender {
      flex: 0 0 25px;
      height: 20px;
      display: inline-block;
      line-height: 20px;
      border-left: 1px solid #f5f5f5;
      text-align: center;
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
