<template>
  <div class="w-100 h-100">
    <div class="title-wrapper">
      <div :class="triangleClass"></div>
      <div class="title">{{ panelTitle }}</div>
    </div>
    <div class="container">
      <component :is="view" :animate="animate" @changTitle="changTitle"></component>
    </div>
  </div>
</template>

<script>
import logonMessage from '../views/logonMessage'
import orderStatistics from '../views/orderStatistics'
import qualityOfService from '../views/qualityOfService'
import knowledgeBase from '../views/knowledgeBase'
import workOrderStatus from '../views/workOrderStatus'
import orderLevel from '../views/orderLevel'
import maxDailyWorkOrders from '../views/maxDailyWorkOrders'
import topOfService from '../views/topOfService'
import engineerTOP from '../views/engineerTOP'
import createWorkOrder from '../views/createWorkOrder'

export default {
  data() {
    return {
      panelTitle: this.title
    };
  },
  props: {
    animate: {
      type: Boolean,
      default: true
    },
    title: String,
    view: String,
    triangleClass: {
      type: String,
      default: 'triangle-green'
    }
  },
  components: {
    logonMessage,
    orderStatistics,
    qualityOfService,
    knowledgeBase,
    workOrderStatus,
    orderLevel,
    maxDailyWorkOrders,
    topOfService,
    engineerTOP,
    createWorkOrder
  },
  methods: {
    changTitle(title) {
      this.panelTitle = title;
    }
  }
};
</script>

<style lang="stylus" scoped>
@font-face {
  font-family: 'pangmen';
  src: url('../assets/fonts/庞门正道标题体.ttf');
  font-weight: normal;
  font-style: normal;
}

.w-100 {
  width: 100%;
}

.h-100 {
  height: 100%;
}

.title-wrapper {
  height: 30px;
  width: 100%;
  overflow: hidden;
  position: relative;
}

.title {
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translate(0, -50%);
  font-family: Microsoft YaHei;
  font-size: 18px;
  letter-spacing: 3px;
  white-space: nowrap;
  color: #fff;
}

.triangle-green {
  display: inline-block;
  position: relative;
  top: 50%;
  width: 8px;
  height: 8px;
  border-top: 2px solid #26efa8;
  border-right: 2px solid #26efa8;
  transform: rotate(45deg) translate(-50%, -50%);
}

.triangle-yellow {
  display: inline-block;
  position: relative;
  top: 50%;
  width: 8px;
  height: 8px;
  border-top: 2px solid #e7a003;
  border-right: 2px solid #e7a003;
  transform: rotate(45deg) translate(-50%, -50%);
}

.triangle-purple {
  display: inline-block;
  position: relative;
  top: 50%;
  width: 8px;
  height: 8px;
  border-top: 2px solid #5c45e4;
  border-right: 2px solid #5c45e4;
  transform: rotate(45deg) translate(-50%, -50%);
}

.container {
  height: calc(100% - 30px);
  width: 100%;
}
</style>
