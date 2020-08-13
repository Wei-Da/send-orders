<template>
  <div class="engineer-wrapper">
    <div class="engineer-tabs">
      <span :class="{active: activeIndex === 0}" @click="setActiveIndex(0)">新增</span>
      <span :class="{active: activeIndex === 1}" @click="setActiveIndex(1)">累计</span>
      <span :class="{active: activeIndex === 2}" @click="setActiveIndex(2)">总数</span>
      <span :class="{active: activeIndex === 3}" @click="setActiveIndex(3)">正常率</span>
      <span :class="{active: activeIndex === 4}" @click="setActiveIndex(4)">好评率</span>
    </div>
    <el-carousel indicator-position="outside" class="engineer-carousel" :autoplay="true" @change="changeActiveIndex" ref="carousel">
      <el-carousel-item v-for="item in 5" :key="item" class="engineer-carousel-items">
        <div class="engineer-item">
          <div class="second"></div>
          <div class="second-one">
            <span class="second-num">36</span>
            <span class="second-unit">单</span>
          </div>
          <div class="engineer-name">
            工程师10238
          </div>
        </div>
        <div class="engineer-item">
          <div class="first"></div>
          <div class="second-one">
            <span class="second-num">36</span>
            <span class="second-unit">单</span>
          </div>
          <div class="engineer-name">
            工程师10238
          </div>
        </div>
        <div class="engineer-item">
          <div class="thired"></div>
          <div class="second-one">
            <span class="second-num">36</span>
            <span class="second-unit">单</span>
          </div>
          <div class="engineer-name">
            工程师10238
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: 0
    }
  },
  methods: {
    changeActiveIndex(index) {
      this.activeIndex = index
    },

    setActiveIndex(index) {
      this.activeIndex = index
      this.$refs.carousel.setActiveItem(index)
    }
  }
};
</script>

<style lang="stylus" scoped>
.engineer-wrapper {
  width: 100%;
  height: 100%;
  padding: 5% 0 0 0;
  box-sizing: border-box;

  .engineer-tabs {
    width: 100%;
    height: 36px;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;

    span {
      color: #fff;
      padding: 10px 6px;
      cursor: pointer;
    }

    .active {
      background: #29292a;
      color: #e7a003;
      box-shadow: 1px 1px 5px #000;
      cursor: default;
    }
  }
  .engineer-carousel {
    height: calc(100% - 36px);
    .engineer-carousel-items {
      display: flex;
      justify-content: space-between;
      .engineer-item {
        width: 33%;
        height: 100%;
        text-align: center;
        .first {
          width: 100%;
          height: 33%;
          background: center / contain no-repeat url('../assets/images/engineerTOP-first.png')
        }
        .second {
          width: 100%;
          height: 33%;
          background: center / contain no-repeat url('../assets/images/engineerTOP-second.png')
        }
        .thired {
          width: 100%;
          height: 33%;
          background: center / contain no-repeat url('../assets/images/engineerTOP-thired.png')
        }
        .second-one {
          width: 100%;
          height: 33%;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #fff;
          .second-num {
            font-size: 16px;
            font-weight: bolder;
          }
          .second-unit {
            font-size: 12px;
          }
        }
        .engineer-name {
          width: 100%;
          height: 33%;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #fff;
        }
      }
    }
  }
}

>>>.el-carousel__container {
  height: 95%;
}

>>>.el-carousel__indicators--outside {
  height: 5%;
  line-height: 5%;
  vertical-align: middle;
}

>>>.el-carousel__indicator--horizontal {
  padding: 0px 4px;
}
</style>