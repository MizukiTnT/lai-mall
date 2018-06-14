<template>
  <div class="prod-list">
    <navigator url="" class="title">推荐商品</navigator>
    <ul class="list">
      <li class="item" v-for="(item, index) in prodList" :key="item.id">
        <navigator url="">
          <image :src="item.imgUrl"></image>
          <div class="text">
            <div class="title">{{item.title}}</div>
            <div class="description">{{item.decription}}</div>
            <div class="price">
              <span class="recommend">{{item.price}} </span>
              <span class="origin-price" v-if="item.afterDiscount"> {{item.afterDiscount}}</span>
            </div>
          </div>
          <div class="tag" v-if="item.subTitle">{{item.subTitle}}</div>
        </navigator>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        prodList: [
          {
            title: '小米电视4A',
            subTitle: '立减100元',
            decription: '4K HDR, 小米无敌电视',
            price: '1990',
            id: '1520',
            imgUrl: '../../static/asset/pic4.jpg'
          },
          {
            title: '小米4A 56寸',
            subTitle: '立减200元',
            decription: '4K HDR, 大米无敌电视',
            price: '2990',
            afterDiscount: '2890',
            id: '1523',
            imgUrl: '../../static/asset/pic3.jpg'
          },
          {
            title: '小米盒子A',
            subTitle: '立减400元',
            decription: '人工智能语音, 小米电视盒子',
            price: '2580',
            afterDiscount: '2180',
            id: '1521',
            imgUrl: '../../static/asset/pic4.jpg'
          },
          {
            title: '小米床垫 年老版',
            subTitle: '立减300元',
            decription: '小米床垫 睡着就是爽！',
            price: '990',
            afterDiscount: '690',
            id: '150',
            imgUrl: '../../static/asset/pic4.jpg'
          }
        ]
      }
    }
  }
</script>

<style lang="less" scoped>
@import url('../style/comm');
  .prod-list {
    background-color: #fff;
    border-bottom: 10px solid @bd-color;
    >.title {
      padding: 10px 15px;
      font-weight: 600;
      color: @font-color;
    }
    .list {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      .item {
        flex: 1 0 48%;
        &:nth-child(2n+1) {
          margin-right: 4px;
        }
        navigator {
          width: 100%;
          display: inline-block;
          position: relative;
          .tag {
            position: absolute;
            top: 0;
            left: 0;
            padding: 2px 5px;
            background-color: @color-imp;
            color: #fff;
            border-radius: 2px;
            font-size: 11px;
          }
          image {
            width: 100%;
            height: 100px;
          }
          .text {
            padding: 15px 10px;
            .title {
              font-size: 14px;
            }
            .description {
              margin: 3px 0 4px;
              font-size: 12px;
              color: @sub-color;
            }
            .price {
              .recommend {
                color: @color-yellow;
              }
              .origin-price {
                color: @sub-color;
                font-size: 12px;
                text-decoration: line-through;
              }
            }
          }
        }
      }
    }
  }
</style>
