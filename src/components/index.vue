<template>
  <div class="sendOrders-container">
    <div v-for="(item, index) in views" :key="index" :style="item.style">
      <component
        ref="views"
        :is="item.components"
        :title="item.title"
        :view="item.view"
        :animate="animate"
        :triangleClass="item.triangleClass"
      ></component>
    </div>
  </div>
</template>

<script>
import panel from './components/panel'
import DashboardHeader from './components/header'
import serviceState from './components/serviceState'
import customerSatisfaction from './components/customerSatisfaction'

export default {
  components: {
    panel,
    DashboardHeader,
    serviceState,
    customerSatisfaction
  },
  data() {
    return {
      fullscreen: false,
      animate: true,
      // 左右边距: 4%
      views: [
        {
          components: 'DashboardHeader',
          style: {
            position: 'absolute',
            width: '100%',
            height: '15%',
            left: 0,
            top: 0
          }
        },
        {
          title: '注册信息',
          components: 'panel',
          view: 'logonMessage',
          triangleClass: 'triangle-green',
          style: {
            position: 'absolute',
            width: '20%',
            height: '18%',
            left: '4%',
            top: '15%'
          }
        },
        {
          title: '工单状态',
          components: 'panel',
          view: 'workOrderStatus',
          triangleClass: 'triangle-yellow',
          style: {
            position: 'absolute',
            width: '20%',
            height: '30%',
            left: '4%',
            top: '37%'
          }
        },
        {
          title: '工单级别',
          components: 'panel',
          view: 'orderLevel',
          triangleClass: 'triangle-purple',
          style: {
            position: 'absolute',
            width: '20%',
            height: '25%',
            left: '4%',
            top: '71%'
          }
        },
        {
          title: '工单统计',
          components: 'panel',
          view: 'orderStatistics',
          triangleClass: 'triangle-yellow',
          style: {
            position: 'absolute',
            width: '20%',
            height: '18%',
            left: '28%',
            top: '15%'
          }
        },
        {
          title: '服务质量',
          components: 'panel',
          view: 'qualityOfService',
          triangleClass: 'triangle-purple',
          style: {
            position: 'absolute',
            width: '20%',
            height: '18%',
            left: '52%',
            top: '15%'
          }
        },
        {
          components: 'customerSatisfaction',
          style: {
            position: 'absolute',
            width: '20%',
            height: '30%',
            left: '28%',
            top: '37%'
          }
        },
        {
          components: 'serviceState',
          style: {
            position: 'absolute',
            width: '20%',
            height: '30%',
            left: '52%',
            top: '37%'
          }
        },
        {
          title: '建立工单',
          components: 'panel',
          view: 'createWorkOrder',
          triangleClass: 'triangle-yellow',
          style: {
            position: 'absolute',
            width: '50%',
            height: '25%',
            left: '26%',
            top: '71%'
          }
        },
        {
          title: '知识库',
          components: 'panel',
          view: 'knowledgeBase',
          triangleClass: 'triangle-green',
          style: {
            position: 'absolute',
            width: '20%',
            height: '18%',
            left: '76%',
            top: '15%'
          }
        },
        {
          title: '日工单最高数量',
          components: 'panel',
          view: 'maxDailyWorkOrders',
          triangleClass: 'triangle-green',
          style: {
            position: 'absolute',
            width: '20%',
            height: '13%',
            left: '77%',
            top: '37%'
          }
        },
        {
          title: '服务类型TOP',
          components: 'panel',
          view: 'topOfService',
          triangleClass: 'triangle-purple',
          style: {
            position: 'absolute',
            width: '20%',
            height: '18%',
            left: '77%',
            top: '54%'
          }
        },
        {
          title: '工程师TOP',
          components: 'panel',
          view: 'engineerTOP',
          triangleClass: 'triangle-yellow',
          style: {
            position: 'absolute',
            width: '20%',
            height: '20%',
            left: '77%',
            top: '76%'
          }
        }
      ]
    }
  },
  methods: {
    checkAnimate() {
      if (this.animate) {
        this.animate = false
      } else {
        this.animate = true
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
// @font-face {
// font-family: 'pangmen';
// src: url('~@/assets/fonts/庞门正道标题体.ttf');
// font-weight: normal;
// font-style: normal;
// }

.sendOrders-container {
  position: relative;
  height: 100%;
  min-height: 900px;
  width: 100%;
  background: #1d2020;

}
</style>
