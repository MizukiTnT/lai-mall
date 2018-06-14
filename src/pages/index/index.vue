<template>
  <div class="container" >
    <!-- 轮播图 _S -->
    <swiper
     indicator-dots
     autoplay
     interval="5000"
     circular
     class="swiper">
      <swiper-item class="swipe-item">
        <image src="../../../static/asset/pic.jpg" ></image>
      </swiper-item>
      <swiper-item class="swipe-item">
        <image src="../../../static/asset/pic.jpg" ></image>
      </swiper-item>
      <swiper-item class="swipe-item">
        <image src="../../../static/asset/pic.jpg" ></image>
      </swiper-item>
     </swiper>
     <!-- 轮播图 _E -->
     <!-- 导航栏 _S -->
     <div class="nav-bar">
       <ul class="navi-wrapper">
          <li class="navi-item">
            <navigator url="">
              <div>
                <image src="../../../static/icon/selected.png" class="navi-icon"></image>
              </div>
              <div class="navi-txt">手机</div>
            </navigator>
          </li>
          <li class="navi-item">
            <navigator url="">
              <div>
                <image src="../../../static/icon/selected.png" class="navi-icon"></image>
              </div>
              <div class="navi-txt">手机</div>
            </navigator>
          </li>
          <li class="navi-item">
            <navigator url="">
              <div>
                <image src="../../../static/icon/selected.png" class="navi-icon"></image>
              </div>
              <div class="navi-txt">手机</div>
            </navigator>
          </li>
          <li class="navi-item">
            <navigator url="">
              <div>
                <image src="../../../static/icon/selected.png" class="navi-icon"></image>
              </div>
              <div class="navi-txt">手机</div>
            </navigator>
          </li>
       </ul>
     </div>
     <!-- 导航栏 _E -->
     <!-- 推广块 _S -->
     <div class="adv-block">
       <navigator url="" class="left-side">
         <image src="../../../static/asset/pic2.jpg"></image>
       </navigator>
       <div class="right-side">
         <navigator url="" class="top-part">
          <image src="../../../static/asset/pic3.jpg"></image>
         </navigator>
         <navigator url="" class="bottom-part">
          <image src="../../../static/asset/pic4.jpg"></image>
         </navigator>
       </div>
     </div>
     <!-- 推广块 _E -->
     <!-- 推荐商品 _E -->
     <prod-list></prod-list>
     <!-- 推荐商品 _E -->
      <!-- 推荐商品 _E -->
     <prod-list></prod-list>
     <!-- 推荐商品 _E -->
      <!-- 推荐商品 _E -->
     <prod-list></prod-list>
     <!-- 推荐商品 _E -->
  </div>
</template>

<script>
import prodList from '@/components/prodList'

export default {
  data () {
    return {

    }
  },

  components: {
    prodList
  },

  methods: {
    scrollHandle (e) {
      console.log(e)
    }
  },
  onPageScroll (e) {
    console.log(e)
  }
}
</script>

<style scoped lang="less">
@import url('../../style/comm.less');
.container {
  background-color: @bg;

  .swiper {
    height: 150px;
    width: 100%;
    .swipe-item {
      image {
        width: 100%;
        height: 100%;
      }
    }
  }
  .nav-bar {
    padding: 10px 0;
    background-color: #fff;
    border-bottom: 10px solid @bd-color;
    .navi-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      .navi-item {
        flex: 1 0 25%;
        text-align: center;
        navigator {
          width: 100%;
          height: 100%;
          display: inline-block;
          color: @sub-color;
          font-size: 12px;
          image {
            width: 25px;
            height: 25px;
            margin-bottom: 5px;
          }
        }
      }
    }

  }
  .adv-block {
    background-color: #fff;
    padding-top: 3px;
    border-bottom: 10px solid @bd-color;
    navigator {
      display: inline-block;
    }
    .left-side {
      width: 49%;
      height: 250px;
      margin-right: 4px;
      display: inline-block;
      image {
        width: 100%;
        height: 100%;
      }
    }
    .right-side {
      width: 49%;
      height: 250px;
      display: inline-block;
      navigator {
        display: inline-block;
        width: 100%;
        height: 100%;
        &.top-part {
          height: 124px;
          margin-bottom: 2px
        }
        &.bottom-part {
          height: 124px;
        }
        image {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}


</style>
