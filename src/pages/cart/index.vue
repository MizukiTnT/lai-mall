<template>
  <div class="cart">

    <div class="cart-list">
      <ul>
        <li v-for="(item, index) in prodList" :key="item.id">
          <div class="radius-wrapper" :class="{selected: item.selected}">
            <div class="radius">
              <image src="../../../static/icon/success_fill.png"></image>
            </div>
          </div>
          <div class="product-details">
            <div class="pic">
              <div v-if="item.surplus" class="lack">剩余{{item.surplus}}件</div>
              <image :src="item.src"></image>
            </div>
            <div class="detail">
              <div class="title">{{item.title}}</div>
              <div class="params">{{item.params}}</div>
              <div class="price">
                <span class="red">￥{{item.price}}</span>
                <count-box @totalChange="" :count="item.count" :price="item.price"></count-box>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="cart-panel">
      <div class="all">
        <span class="dot">
          <div class="dotted"></div>
        </span>
        <div class="text">全选</div>
      </div>
      <div class="count"></div>
      <div class="total">
        <span>合计</span>
        <span class="price"> 元</span>
      </div>
      <div class="pay">
        <text>去结算</text>
        <text>（件）</text>
      </div>
    </div>
  </div>
</template>

<script>
import countBox from '@/components/dataCount'
export default {
  data () {
    return {
      prodList: [
        {
          price: 419,
          count: 0,
          title: '爱科技（AKG）N20LT入耳式耳机 苹果手机Lightning接口HIFI耳机',
          params: '0.09kg:ckr女毒系列 红色 ',
          selected: true,
          surplus: 5,
          id: 1505,
          src: '../../../static/icon/success_fill.png'
        },
        {
          price: 14.90,
          count: 5,
          title: '维达（Vinda）湿巾 10片独立包装*5包（限量版）',
          params: '0.014kg; 杀菌卫生',
          selected: true,
          id: 1506,
          src: '../../../static/icon/success_fill.png'
        },
        {
          price: 521,
          count: 522,
          title: '了不起的node.js 将Javascript进行到底！',
          params: '0.55kg; 了不起的盖兹比',
          selected: true,
          id: 1555,
          src: '../../../static/icon/success_fill.png'
        }
      ]
    }
  },
  components: {
    countBox
  }
}
</script>

<style lang="less" scoped>
  @import url('../../style/comm');
  .cart {
    .cart-panel {
      .all {

      }
      .count {

      }
      .price {

      }
    }
    .cart-list {
      ul {
        li {
          position: relative;
          border-bottom: 1px solid #f5f5f5;
          padding: 15px;
          >div {

          }
          .radius-wrapper {
            position: absolute;
            display: inline-block;
            width: 10%;
            height: 100%;
            &.selected {

            }
            .radius {
              position: absolute;
              top: 50%;
              width: 20px;
              height: 20px;
              border: 1px solid #dcdfe6;
              box-sizing: border-box;
              border-radius: 100%;
              transform: translateY(-50%);
              image {
                position: absolute;
                left: -3px;
                top: -3px;
                width: 25px;
                height: 25px;
                border-radius: 100%;
              }
            }
          }
          .product-details {
            position: relative;
              display: inline-block;
              width: 90%;
              margin-left: 10%;
              .pic {
                position: absolute;
                display: inline-block;
                 width: 30%;
                 height: 70px;
                 top: 50%;
                 transform: translateY(-50%);
                .lack {
                  width: 70px;
                  position: absolute;
                  bottom: 0;
                  left: 50%;
                  color: #fff;
                  font-size: 13px;
                  background-color: rgba(0,0,0,.4);
                  z-index: 10;
                  transform: translateX(-50%);
                }
                image {
                  position: absolute;
                  width: 70px;
                  height: 70px;
                  left: 50%;
                  top: 50%;
                  transform: translate(-50%,-50%);
                }
              }
              .detail {
                display: inline-block;
                width: 70%;
                margin-left: 30%;
                .title {
                  font-size: 11px;
                  font-weight: 600;
                }
                .params {
                  margin-top: 10px;
                  padding: 3px 5px;
                  border: 1px solid #f5f5f5;
                  font-size: 11px;
                  color: #909399;
                }
                .price {
                  position: relative;
                  padding: 5px 0;
                  .red {
                    color: @color-imp;
                    font-size: 11px;
                  }
                }
              }
            }
        }
      }
    }
  }
</style>
