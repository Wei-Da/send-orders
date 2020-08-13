<template>
  <v-chart
    ref="workOrderStatusChart"
    :options.sync="workOrderStatusOption"
    :autoresize="true"
    style="width: 100%; height: 100%;"
  />
</template>

<script>

let OPTIONS = {
  tooltip: {
    trigger: "axis",
    axisPointer: {   // 坐标轴指示器，坐标轴触发有效
      type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
    },
  },
  legend: {
    top: '10%',
    icon: "circle",
    data: ["待接工单", "服务中工单", "待关闭工单"],
    textStyle: {
      color: '#fff'
    }
  },
  grid: {
    top: '25%',
    left: '1%',
    right: '1%',
    bottom: 0,
    containLabel: true
  },
  xAxis: [
    {
      type: "category",
      data: ["前日", "昨日", "单日"],
      splitLine: {
        show: false
      },
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        show: true,
        textStyle: {
          color: "#575757"
        }
      }
    }
  ],
  yAxis: [
    {
      type: "value",
      splitLine: {
        show: false
      },
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        show: true,
        textStyle: {
          color: "#575757"
        }
      }
    }
  ],
  series: [
    {
      name: "待接工单",
      type: "bar",
      barWidth: 15,
      data: [2.0, 4.9, 7.0],
      itemStyle: {
        color: "#e7a003"
      }
    },
    {
      name: "服务中工单",
      type: "bar",
      barWidth: 15,
      data: [2.6, 5.9, 9.0],
      itemStyle: {
        color: "#26efa8"
      }
    },
    {
      name: "待关闭工单",
      type: "bar",
      barWidth: 15,
      data: [2.6, 5.9, 9.0],
      itemStyle: {
        color: "#5c45e4"
      }
    }
  ]
};

export default {
  data() {
    return {
      workOrderStatusOption: OPTIONS
    }
  }
};
</script>