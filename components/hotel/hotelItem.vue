<template>
  <div class="hotel_item">
    <div>
      <el-row
        class="hotel-item"
        style="margin-left: -10px; margin-right: -10px;"
        v-for="item in dataList"
        :key="item.id"
      >
        <el-col :span="8" style="padding-left: 10px; padding-right: 10px;">
          <span class="img-wrapper">
            <a href="javascript:;">
              <img
                :src="item.photos"
                :alt="item.name"
                width="320"
                height="210"
                @click="openDetail(item.id)"
              />
            </a>
          </span>
        </el-col>
        <el-col :span="10">
          <h4 class="hotel-cn-name">
            <a href="javascript:;" class>{{item.name}}</a>
          </h4>
          <div class="hotel-en-name">
            <span>{{item.alias}}</span>
            <span title="3星级" v-if="item.hoteltype.name">
              <i class="iconfont iconhuangguan"></i>
              <i class="iconfont iconhuangguan"></i>
              <i class="iconfont iconhuangguan"></i>
            </span>
            <span>{{item.hoteltype.name}}</span>
          </div>
          <el-row type="flex" style="margin-left: -5px; margin-right: -5px; margin-bottom:5px">
            <el-col :span="10">
              <el-rate
                v-model="item.stars"
                disabled
                show-score
                text-color="#ff9900"
                score-template="{value}"
              ></el-rate>
            </el-col>
            <el-col :span="7" style="padding-left: 5px; padding-right: 5px;">
              <span style="color: #f90;">13</span>
              条评价
            </el-col>
            <el-col :span="7">
              <div style="padding-left: 5px; padding-right: 5px;">
                <span style="color: #f90;">43</span> 篇游记
              </div>
            </el-col>
          </el-row>
          <div class="location-row">
            <i class="iconfont iconlocation"></i>
            位于: {{item.address}}
          </div>
        </el-col>
        <el-col :span="6">
          <el-table :data="item.products" style="width: 100%" :show-header="false">
            <el-table-column width="117" prop="name"></el-table-column>
            <el-table-column width="117">
              <template slot-scope="scope">
                <span class="height-light larger">￥{{scope.row.price}}</span>
                起
                <i class="el-icon-arrow-right"></i>
              </template>
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>
      <el-row
        class="hotel-item"
        style="padding-left: 10px; padding-right: 10px;"
        v-if="dataList.length===0"
      >暂无数据</el-row>
      <!-- 分页布局 -->
      <!-- size-change：切换条数时候触发 -->
      <!-- current-change: 切换页数时候触发 -->
      <!-- page-size: 默认一页多少条数据 -->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pageIndex"
        :page-sizes="[5,10,15,20]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="$store.state.hotel.infoData.data.length"
      ></el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pageIndex: 1, // 当前页数
      pageSize: 5, // 当前页面的条数
      total: 0 // 总条数
    };
  },
  methods: {
    // 条数切换, value是当前选中的条数
    handleSizeChange(value) {
      this.pageSize = value;
    },

    // 页数的切换，value是选中的页数
    handleCurrentChange(value) {
      this.pageIndex = value;
    },
    // 进入酒店详情
    openDetail(id) {
      this.$router.push({
        path: "hotel/hotelDetails?id=" + id
      });
    }
  },
  computed: {
    // 当前页面渲染的列表数据
    dataList() {
      if (this.$store.state.hotel.infoData.data.length > 0) {
        let data = this.$store.state.hotel.infoData.data.slice(
          (this.pageIndex - 1) * this.pageSize,
          this.pageSize * this.pageIndex
        );
        return data;
      } else {
        return [];
      }
    }
  }
};
</script>
<style lang="less" scoped>
.el-table__body,
.el-table__footer,
.el-table__header {
  table-layout: fixed;
  border-collapse: separate;
}
.larger {
  font-size: larger;
  color: #f90;
}
.hotel-item {
  padding: 25px 0;
  border-bottom: 1px solid #eee;
}
.iconhuangguan {
  color: #f90;
}
.hotel-en-name {
  color: #999;
  margin-bottom: 0.5em;
}
.location-row {
  font-size: 14px;
  color: #666;
}
</style>

