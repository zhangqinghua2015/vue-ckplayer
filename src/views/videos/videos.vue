<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input v-model="listQuery.videoTitle" placeholder="视频标题" style="width: 150px;" class="filter-item" @keyup.enter.native="getList"/>
      <el-button class="filter-item" type="primary" icon="el-icon-search" @click="getList">搜索</el-button>
    </div>
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row>
      <el-table-column align="center" label="视频标题">
        <template slot-scope="scope">
          <router-link :to="'player?videoTitle='+scope.row">{{ scope.row }}</router-link>
        </template>
      </el-table-column>
    </el-table>
<!--    <pagination v-show="total>0" :total="total" :page-no.sync="listQuery.pageNo" :page-size.sync="listQuery.pageSize" @pagination="getList"/>-->
  </div>
</template>


<script>
    import { videoList } from '@/api/table'
    export default {
      name: "videos",

      data() {
        return {
          tableKey: 0,
          list: null,
          listLoading: true,
          activeTab: 'base',
          listQuery: {
            pageNo: 1,
            pageSize: 20,
            videoTitle: undefined
          }
        }
      },

      created () {
        this.getList()
      },

      methods: {
        getList() {
          this.listLoading = true
          videoList(this.listQuery).then(data => {
            this.list = data.list
            this.listLoading = false
          })
        },
        resetTemp() {
          this.temp = {
            paymentNo: undefined,
            buyerEmail: undefined,
            tradeStatus: undefined,
            totalFee: undefined,
            tradeNo: undefined,
            userId: undefined,
            beans: undefined,
            desc: undefined,
            needKJOrder: undefined,
            created: undefined
          }
        }
      }
    }
</script>

<style scoped>

</style>
