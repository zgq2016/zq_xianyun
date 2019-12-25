<template>
  <div class="hotel">
    <div class="hotel-main">
      <!-- 面包屑 -->
      <div class="breadcrumb">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">酒店</el-breadcrumb-item>
          <el-breadcrumb-item>南京酒店</el-breadcrumb-item>
          <el-breadcrumb-item>好来阁商务宾馆</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <!-- 酒店标题 -->
      <div class="hotel-title">
        <h4>
          好来阁商务宾馆
          <span>
            <i class="iconfont iconhuangguan"></i>
            <i class="iconfont iconhuangguan"></i>
            <i class="iconfont iconhuangguan"></i>
            <i class="iconfont iconhuangguan"></i>
          </span>
        </h4>
        <p>hao lai ge shang wu hotel</p>
        <div class="hotel_address">
          <i class="iconfont iconlocation"></i>
          高淳县淳溪镇镇兴路118号(高淳县委党校对面)
        </div>
      </div>
      <!-- 酒店图片 -->
      <HotelImg />
      <!-- table栏 -->
      <HotelTable />
      <!-- 酒店地图 -->
      <HotelMap />
      <!-- 酒店评论 -->
      <HotelComment />
    </div>
  </div>
</template>


<script>
import HotelImg from "@/components/hotel/hotelImg.vue";
import HotelTable from "@/components/hotel/hotelTable.vue";
import HotelMap from "@/components/hotel/hotelMap.vue";
import HotelComment from "@/components/hotel/hotelComment.vue";
export default {
  components: {
    HotelImg,
    HotelTable,
    HotelMap,
    HotelComment
  },
  data() {
    return {};
  },
  mounted() {
    this.$axios({
      url: "/hotels"
    }).then(res => {
      console.log(res);
    });
  }
};
</script>


<style lang="less" scoped>
.hotel {
  min-width: 1000px;
}
.hotel-main {
  width: 1000px;
  margin: 0 auto;
  .breadcrumb {
    margin: 20px 0px;
  }
  .hotel-title {
    h4 {
      font-size: 28px;
      font-weight: normal;
      i {
        color: orange;
      }
    }
  }
}
</style>
