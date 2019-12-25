<template>
      <div class="hotel_img">
        <el-row :gutter="20" type="flex" justify="space-between">
          <el-col :span="16" class="big_img">
            <img src="http://157.122.54.189:9093/images/hotel-pics/1.jpeg" alt />
          </el-col>
          <el-col :span="8" class="min_img">
            <el-row class="pictures">
              <el-col :span="12" class="small_pictures">
                <img src="http://157.122.54.189:9093/images/hotel-pics/1.jpeg" alt />
              </el-col>
              <el-col :span="12" class="small_pictures">
                <img src="http://157.122.54.189:9093/images/hotel-pics/1.jpeg" alt />
              </el-col>
              <el-col :span="12" class="small_pictures">
                <img src="http://157.122.54.189:9093/images/hotel-pics/1.jpeg" alt />
              </el-col>
              <el-col :span="12" class="small_pictures">
                <img src="http://157.122.54.189:9093/images/hotel-pics/1.jpeg" alt />
              </el-col>
              <el-col :span="12" class="small_pictures">
                <img src="http://157.122.54.189:9093/images/hotel-pics/1.jpeg" alt />
              </el-col>
              <el-col :span="12" class="small_pictures">
                <img src="http://157.122.54.189:9093/images/hotel-pics/1.jpeg" alt />
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.hotel_img {
    width: 1000px;
    margin: 30px 0px;
    .big_img {
      display: block;
      width: 240px;
      // height: 360px;
      img {
        width: 640px;
        height: 360px;
      }
    }
    .min_img {
      width: 33.33333%;
      height: 360px;
      .pictures {
        margin: 0px -10px;
        .small_pictures {
          width: 50%;
          padding: 0px 10px;
          img {
            width: 160px;
            margin-bottom: 10px;
          }
        }
      }
    }
  }
</style>
