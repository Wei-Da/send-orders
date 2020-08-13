<template>
  <el-carousel indicator-position="outside" style="width: 100%; height: 100%;">
    <el-carousel-item v-for="item in 4" :key="item" style="width: 100%; height: 100%;">
      <v-chart
        ref="typeOfServiceChart"
        :options.sync="typeOfServiceOption"
        :autoresize="true"
        style="width: 100%; height: 100%;"
      />
    </el-carousel-item>
  </el-carousel>
</template>

<script>

let OPTIONS = {
  tooltip: {
    trigger: "axis",
    formatter: '{a}<br/>{b}: {c}',
    axisPointer: {
      type: "shadow"
    }
  },
  grid: {
    top: '10%',
    left: 0,
    right: '10%',
    bottom: '5%',
    containLabel: true
  },
  xAxis: {
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
    },
    boundaryGap: [0, 0.01]
  },
  yAxis: {
    type: "category",
    data: ["服务器", "打印机", "路由器", "一体机", "服务器"],
    axisLine: {
      show: false,
      lineStyle: {
        color: '#458a7e'
      }
    },
    axisTick: {
      show: false
    },
    minorTick: {
      show: false
    },
    splitLine: {
      show: false
    },
    axisLabel: {
      show: true,
      color: '#fff'
    }
  },
  series: [
    {
      name: "服务类型TOP",
      type: "bar",
      label: {
        show: true,
        position: "right",
        color: '#fff'
      },
      data: [18203, 23489, 29034, 104970, 131744],
      itemStyle: {
        color: '#e7a003'
      },
      barWidth: 15
    }
  ]
};

export default {
  data() {
    return {
      typeOfServiceOption: OPTIONS
    }
  }
};
</script>

<style lang="stylus" scoped>
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