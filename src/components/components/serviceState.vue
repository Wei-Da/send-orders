<template>
  <v-chart
    ref="serviceStateChart"
    :options.sync="serviceStateOption"
    :autoresize="true"
    style="width: 100%; height: 100%;"
  />
</template>

<script>


let OPTIONS = {
  legend: {
    icon: "circle",
    itemGap: 50,
    data: ["服务超时", "服务差评"],
    textStyle: {
      color: "#fff"
    }
  },
  xAxis: {
    type: "category",
    data: ["前天", "昨日", "当日"],
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
      color: '#fff',
      margin: 20,
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
      show: false
    },
    splitLine: {
      show: false
    }
  },
  series: [
    {
      name: "服务超时",
      data: [120, 200, 150],
      type: "bar",
      stack: "服务",
      barWidth: 15,

      itemStyle: {
        normal: {
          color: "#e7a003"
        }
      }
    },
    {
      name: "服务差评",
      data: [120, 200, 150],
      type: "bar",
      stack: "服务",
      barWidth: 15,

      itemStyle: {
        normal: {
          color: "#5c45e4"
        }
      }
    },
    {
      name: "",
      type: "bar",
      barGap: "-100%",
      barWidth: 15,
      data: [1000, 1000, 1000],
      itemStyle: {
        normal: {
          color: "#21483b"
        }
      },
      zlevel: -10
    },
    {
      name: "",
      type: "bar",
      barGap: "-100%",
      barWidth: 15,
      data: [1000, 1000, 1000],
      itemStyle: {
        color: "none",
        borderColor: "#898989",
        borderWidth: 3
      }
    }
  ]
};

export default {
  data() {
    return {
      serviceStateOption: OPTIONS
    };
  }
};
</script>