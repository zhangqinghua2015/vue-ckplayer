<template>
  <div :class="className" :id="id" :style="{height:height,width:width}"/>
</template>

<script>
import echarts from 'echarts'
import resize from './mixins/resize'

export default {
  mixins: [resize],
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    id: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '800px'
    },
    height: {
      type: String,
      default: '500px'
    },
    options: {
      type: Object,
      default: undefined,
      require: true
    }
  },
  data() {
    return {
      chart: null
    }
  },
  watch: {
    options: {
      deep: true,
      handler() {
        if (this.chart) {
          this.chart.dispose()
          this.chart = null
        }
        this.initChart()
      }
    }
  },
  beforeDestroy() {
    console.log('beforeDestroy', this.chart)
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  mounted() {
    this.initChart()
  },
  methods: {
    initChart() {
      this.chart = echarts.init(document.getElementById(this.id))
      this.chart.setOption({
        title: {
          text: ''
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: this.options.legendData
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: this.options.xData
        },
        yAxis: {
          type: 'value'
        },
        series: this.options.yData
      })
    }
  }
}
</script>
