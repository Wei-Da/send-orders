<template>
  <v-chart
    ref="customerSatisfactionChart"
    :options.sync="customerSatisfactionOption"
    :autoresize="true"
    style="width: 100%; height: 100%;"
  />
</template>

<script>
import echarts from 'echarts'

let OPTIONS = {
  series: [{
    name: '刻度',
    type: 'gauge',
    radius: '80%',

    startAngle: 0,
    endAngle: 359,
    axisLine: {
      show: false,
      lineStyle: {
        color: [[0, '#fff'], [1, '#fff']],
        width: 1,
      },
    },//仪表盘轴线
    axisLabel: {
      show: false,
    },//刻度标签。
    axisTick: {
      show: true,
      splitNumber: 10,
      lineStyle: {
        color: '#fff',
        width: 1,
      },
      length: 20
    },//刻度样式
    splitLine: {
      show: false
    },//分隔线样式
    detail: {
      show: false
    },
    pointer: {
      show: false
    }
  },
    {


      type: 'gauge',
      radius: '100%',
      center: ['50%', '50%'],

      splitNumber: 0, //刻度数量
      startAngle: 225,
      endAngle: -45,
      axisLine: {
        show: true,
        lineStyle: {
          width: 15,
          color: [
            [
              1, new echarts.graphic.LinearGradient(
              0, 0, 1, 0, [{
              offset: 0,
              color: '#e3a207'
            },
              {
                offset: 1,
                color: '#2beaa0'
              }
            ]
              )
            ],
            [
              1, '#2beaa0'
            ]
          ]
        }
      },
      //分隔线样式。
      splitLine: {
        show: false,
      },
      axisLabel: {
        show: false
      },
      axisTick: {
        show: false
      },
      pointer: {
        show: false
      },
      title: {
        show: true,
        offsetCenter: [0, '-25%'], // x, y，单位px
        textStyle: {
          color: '#fff',
          fontSize: 20
        }
      },
      //仪表盘详情，用于显示数据。
      detail: {
        show: true,
        offsetCenter: [0, '16%'],
        color: '#ffffff',
        formatter: function(params) {
            return params + '%'
        },
        textStyle: {
          fontSize: 44
        }
    },
    data: [{
        name: "客户满意度",
        value: 60
    }]
  }
  ]
};

export default {
  data() {
    return {
      customerSatisfactionOption: OPTIONS
    }
  }
};
</script>