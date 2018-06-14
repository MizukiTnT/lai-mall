<template>
  <div class="type">
    <!-- 左侧点击视图 _S -->
    <scroll-view scroll-y class="left-side" :style="{height:scrollHeight + 'px'}" >
      <div @click="toPlace(index)" v-for="(item, index) in list" :key="index" class="item" :class="{active: index == showItem}">新品</div>
    </scroll-view>
    <!-- 左侧点击视图 _E -->
    <!-- 右侧滚动视图 _S -->
    <scroll-view scroll-with-animation class="right-side" :scroll-top="scrollTop" scroll-y :style="{height:scrollHeight + 'px'}">
      <div v-for="(item, index) in list" :key="index" class="cal-item" :class="{}">
        <div class="title">
          <div class="dash"></div>
          <div class="text">{{item.title}}</div>
          <div class="dash"></div>
        </div>
        <ul class="product-list">
          <li class="product-item" v-for="(product, subindex) in item.data" :key="product.id">
            <navigator class="" url="">
              <image :src="product.imgSrc"></image>
              <div class="text">{{product.title}}</div>
            </navigator>
          </li>
        </ul>
      </div>
    </scroll-view>
    <!-- 右侧滚动视图 _E -->
  </div>
</template>

<script>
  export default {
    data () {
      return {
        showItem: 0,
        list: [
          {
            title: '手机',
            data: [
              {
                id: '123',
                title: '小米6x',
                imgSrc: '../../../static/icon/delete.png'
              },
              {
                id: '123',
                title: '小米6x',
                imgSrc: '../../../static/icon/delete.png'
              },
              {
                id: '123',
                title: '小米6x',
                imgSrc: '../../../static/icon/delete.png'
              },
              {
                id: '123',
                title: '小米6x',
                imgSrc: '../../../static/icon/delete.png'
              }
            ]
          },
          {
            title: '电视',
            data: [
              {
                id: '123',
                title: '小米6x',
                imgSrc: '../../../static/icon/delete.png'
              },
              {
                id: '123',
                title: '小米6x',
                imgSrc: '../../../static/icon/delete.png'
              },
              {
                id: '123',
                title: '小米6x',
                imgSrc: '../../../static/icon/delete.png'
              },
              {
                id: '123',
                title: '小米6x',
                imgSrc: '../../../static/icon/delete.png'
              }
            ]
          },
          {
            title: '电脑',
            data: [
              {
                id: '123',
                title: '小米6x',
                imgSrc: '../../../static/icon/delete.png'
              },
              {
                id: '123',
                title: '小米6x',
                imgSrc: '../../../static/icon/delete.png'
              },
              {
                id: '123',
                title: '小米6x',
                imgSrc: '../../../static/icon/delete.png'
              },
              {
                id: '123',
                title: '小米6x',
                imgSrc: '../../../static/icon/delete.png'
              }
            ]
          },
          {
            title: '手机配件',
            data: [
              {
                id: '123',
                title: '小米6x',
                imgSrc: '../../../static/icon/delete.png'
              },
              {
                id: '123',
                title: '小米6x',
                imgSrc: '../../../static/icon/delete.png'
              },
              {
                id: '123',
                title: '小米6x',
                imgSrc: '../../../static/icon/delete.png'
              },
              {
                id: '123',
                title: '小米6x',
                imgSrc: '../../../static/icon/delete.png'
              }
            ]
          },
          {
            title: '手机配件',
            data: [
              {
                id: '123',
                title: '小米6x',
                imgSrc: '../../../static/icon/delete.png'
              },
              {
                id: '123',
                title: '小米6x',
                imgSrc: '../../../static/icon/delete.png'
              },
              {
                id: '123',
                title: '小米6x',
                imgSrc: '../../../static/icon/delete.png'
              },
              {
                id: '123',
                title: '小米6x',
                imgSrc: '../../../static/icon/delete.png'
              }
            ]
          },
          {
            title: '手机配件',
            data: [
              {
                id: '123',
                title: '小米6x',
                imgSrc: '../../../static/icon/delete.png'
              },
              {
                id: '123',
                title: '小米6x',
                imgSrc: '../../../static/icon/delete.png'
              },
              {
                id: '123',
                title: '小米6x',
                imgSrc: '../../../static/icon/delete.png'
              },
              {
                id: '123',
                title: '小米6x',
                imgSrc: '../../../static/icon/delete.png'
              }
            ]
          }
        ],
        scrollHeight: 0,
        hasScroll: 0,
        limitArray: [0],
        scrollTop: 0,
        active: 0
      }
    },
    methods: {
      // 根据右侧滑动移动左侧锚点
      // changeAnchor (e) {
      //   let that = this
      //   let top = e.target.scrollTop
      //   this.limitArray.forEach((v, i, a) => {
      //     if (i < a.length - 1) {
      //       if (that.limitArray[i + 1] < top && top > v) {
      //         that.showItem = i
      //       }
      //     }
      //   })
      //   console.log(that.showItem)
      // },
      // 获取所有右侧item的信息
      getAllRects () {
        let that = this
        wx.createSelectorQuery().selectAll('.cal-item').boundingClientRect(function (rects) {
          let count = 0
          rects.forEach(function (rect) {
            count += rect.height
            that.limitArray.push(count)
          })
          console.log(that.limitArray)
        }).exec()
      },
      // 点击左侧导航 右侧随之移动
      toPlace (index) {
        console.log('taped')
        if (this.limitArray[index] < this.limitArray[this.limitArray.length - 1] - this.scrollHeight) {
          this.scrollTop = this.limitArray[index]
          this.showItem = index
        } else {
          this.scrollTop = this.limitArray[this.limitArray.length - 1] - this.scrollHeight + 50
          this.showItem = index
        }
      }
    },
    async mounted () {
      let systemInfo = await wx.getSystemInfoSync()
      this.scrollHeight = systemInfo.windowHeight
      this.getAllRects()
    }
  }
</script>

<style lang="less" scoped>
@import url('../../style/comm');
  .type {
    .left-side {
      width: 20%;
      display: inline-block;
      text-align: center;
      font-size: 14px;
      border-right: 1px solid @bd-color;
      box-sizing: border-box;
      .item {
        padding: 5px 0;
        &.active {
          color: @color-yellow;
        }
      }
    }
    .right-side {
      width: 80%;
      display: inline-block;
      .cal-item {
        .title {
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
          .text {
            padding: 0 10px;
            font-size: 14px;
          }
          .dash {
            width: 15px;
            height: 2px;
            background-color: @bd-color;
          }
        }
      }
      .product-list {
        margin: 10px 0;
        padding: 5px 15px;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        .product-item {
          flex: 0 1 33%;
          navigator {
            display: inline-block;
            width: 100%;
            margin-top: 10px;
            text-align: center;
            image {
              width: 50%;
              height: 30px;
            }
            .text {
              font-size: 12px;
              color: @sub-color;
            }
          }
        }
      }
    }
  }
</style>
