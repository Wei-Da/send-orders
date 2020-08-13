<template>
  <div class="orderLevel-wrapper">
    <div class="orderLevel-tabs">
      <span :class="{active: activeIndex === 1}" @click="activeIndex = 1">当日</span>
      <span :class="{active: activeIndex === 2}" @click="activeIndex = 2">历史</span>
    </div>
    <v-chart
      ref="orderLevelChart"
      :options.sync="orderLevelOption"
      :autoresize="true"
      style="width: 100%; height: 100%;"
    />
  </div>
</template>

<script>

let OPTIONS = {
  tooltip: {
    trigger: "item",
    formatter: "{a} <br/>{b} : {c} ({d}%)"
  },
  series: [
    {
      name: "工单级别",
      type: "pie",
      roseType: "radius",
      radius: ["30%", "70%"],
      center: ["50%", "60%"],
      label: {
        fontSize: 16,
        formatter: ["{b}", "{d} %"].join("\n\n")
      },
      labelLine: {
        length: 10,
        length2: 10,
        lineStyle: {
          color: "#fff"
        }
      },
      data: [
        {
          value: 335,
          name: "一般",
          itemStyle: {
            color: "#26efa8"
          }
        },
        {
          value: 310,
          name: "紧急",
          itemStyle: {
            color: "#5c45e4"
          }
        },
        {
          value: 234,
          name: "重要",
          itemStyle: {
            color: "#e7a003"
          }
        }
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: "rgba(0, 0, 0, 0.5)"
        }
      }
    }
  ]
};

export default {
  data() {
    return {
      orderLevelOption: OPTIONS,
      activeIndex: 1
    }
  }
};
</script>

<style lang="stylus" scoped>
  .orderLevel-wrapper {
    width: 100%;
    height: 100%;
    .orderLevel-tabs {
      position: absolute;
      top: 0;
      right: 0;
      height: 30px;
      line-height: 30px;
      span {
        color: #fff;
        padding: 10px 20px;
        cursor: pointer;
      }
      .active {
        background: #29292a;
        color: #e7a003;
        box-shadow: 1px 1px 5px #000;
        cursor: default;
      }
    }
  }
</style>