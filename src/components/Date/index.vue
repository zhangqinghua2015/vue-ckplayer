/* eslint-disable */
<template>
  <el-date-picker
    :picker-options="dateRangeOpt"
    v-model="insertDate"
    type="daterange"
    align="right"
    unlink-panels
    range-separator="至"
    start-placeholder="开始日期"
    end-placeholder="结束日期"
    format="yyyy-MM-dd"
    value-format="yyyy-MM-dd"
    @change="handleChange()"
  />
</template>

<script>
export default {
  name: 'Date',
  props: {
    dateRangeOpt: {
      type: Object,
      // eslint-disable-next-line
      default: {
        shortcuts: [{
          text: '昨天',
          onClick(picker) {
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 1)
            picker.$emit('pick', [start, start])
          }
        }, {
          text: '最近一周',
          onClick(picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近2周',
          onClick(picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 14)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近一个月',
          onClick(picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '清空',
          onClick(picker) {
            picker.$emit('pick', ['', ''])
          }
        }]
      }
    }
  },
  data() {
    return {
      insertDate: null
    }
  },
  methods: {
    handleChange() {
      this.$emit('change', this.insertDate)
    }
  }
}
</script>

<style scoped>

</style>
