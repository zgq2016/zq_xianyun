<template>
  <div class="contianer">
    <el-row
      type="flex"
      justify="space-between"
    >
      <!-- 左部详情页 -->
      <div class="main">
        <TravelDetails
          v-for="(item, index) in dataList"
          :key="index"
          :data="item"
        />
        <commentList />
      </div>
      <!-- 推荐文章部分 -->
      <div class="aside">
        <h4 class="aside-title">
          相关攻略
        </h4>
        <Correlative
          v-for="(item, index) in CorrdataList"
          :key="index"
          :data="item"
        />
      </div>
    </el-row>
  </div>
</template>

<script>
import Correlative from '@/components/post/Correlative.vue'
import TravelDetails from '@/components/post/travelDetails.vue'
import commentList from '@/components/post/commentList.vue'
export default {
  components: {
    TravelDetails,
    Correlative,
    commentList
  },
  data() {
    return {
      travelData: {},
      dataList: [], // 详情总数据，空对象
      CorrelativeData: {},
      CorrdataList: [],
      imgs: {}
    }
  },
  mounted() {
    this.getData()
    this.CorrData()
  },
  methods: {
    // 获取详情
    getData() {
      this.$axios({
        url: '/posts',
        method: 'GET',
        params: {
          id: 4
        }
      })
        .then((res) => {
          this.travelData = res.data
          this.dataList = this.travelData.data
          // console.log(this.travelData.__ob__)
          // console.log(this.travelData)
        })
    },
    CorrData() {
      this.$axios({
        url: '/posts',
        method: 'GET'
      })
        .then((res) => {
          this.CorrelativeData = res.data
          this.CorrdataList = this.CorrelativeData.data
          this.imgs = this.CorrelativeData.data.cityName
          console.log(this.CorrelativeData)
        })
    }
  }
}
</script>

<style scoped lang="less">
.contianer {
  width: 1000px;
  margin: 0 auto;
  padding-top: 20px;

  .aside {
    width: 280px;
  }
}
</style>
