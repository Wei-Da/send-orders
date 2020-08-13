<template>
  <v-chart
    ref="createWorkOrderChart"
    :options.sync="createWorkOrderOption"
    :autoresize="true"
    style="width: 100%; height: 100%;"
  />
</template>

<script>
let OPTIONS = {
  tooltip: {
    // trigger: 'axis',
    // axisPointer: {
    //     type: 'shadow',
    //     label: {
    //         backgroundColor: '#6a7985'
    //     }
    // }
  },
  grid: {
    top: '30%',
    left: '5%',
    right: '5%',
    bottom: '10%',
  },
  dataset: {
    source: [
      // ["日期", "服务台建立工单", "自动建立工单"],
      // ["12日", 43, 22],
      // ["13日", 83, 33],
      // ["14日", 86, 44],
      // ["15日", 72, 55],
      // ["16日", 52, 33],
      // ["17日", 62, 22],
      // ["18日", 22, 66],

      ["日期", "12日", "13日", "14日", "15日", "16日", "17日", "18日"],
      ["服务台建立工单", 43, 22, 11, 33, 12, 50, 70],
      ["自动建立工单", 23, 12, 1, 43, 52, 50, 60],
    ]
  },
  legend: {
    itemGap: 100,
    top: '10%',
    icon: "circle",
    data: ["服务台建立工单", "自动建立工单"],
    textStyle: {
      color: '#fff'
    }
  },
  xAxis: {
    type: "category",
    // data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    axisLine: {
      show: false
    },
    axisTick: {
      show: false
    },
    minorTick: {
      show: false
    },
    axisLabel: {
      show: true,
      color: '#fff'
    },
    splitLine: {
      show: false
    }
  },
  yAxis: {
    type: "value",
    axisLine: {
      show: false
    },
    axisTick: {
      show: false
    },
    minorTick: {
      show: false
    },
    axisLabel: {
      show: true,
      color: '#fff'
    },
    splitLine: {
      show: false
    },
  },
  series: [
    {
      name: "服务台建立工单",
      type: "line",
      symbolSize: 10,
      seriesLayoutBy: 'row',
      lineStyle: {
        color: "#e7a003"
      },
      itemStyle: {
        color: "#e7a003",
        borderColor: "#e7a003"
      },
      emphasis: {
        label: {
          show: true
        },
        itemStyle: {
          color: "#fba02b",
          shadowColor: "#fba02b",
          shadowBlur: 5
        }
      },
      encode: {
        x: '日期',
        y: '服务台建立工单',
      },
      // data: [120, 132, 101, 134, 90, 230, 210],
    },
    {
      name: "自动建立工单",
      type: "line",
      symbolSize: 10,
      seriesLayoutBy: 'row',
      lineStyle: {
        color: "#26efa8"
      },
      itemStyle: {
        color: "#26efa8"
      },
      emphasis: {
        label: {
          show: true
        },
        itemStyle: {
          color: "#26efa8",
          shadowColor: "#26efa8",
          shadowBlur: 5
        }
      },
      encode: {
        x: '日期',
        y: '自动建立工单'
      }
      // data: [120, 132, 101, 134, 90, 230, 210],
    }
  ]
};

export default {
  data() {
    return {
      createWorkOrderOption: OPTIONS
    }
  }
};
</script>