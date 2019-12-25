<template>
    <div class="hoteltable">
         <el-table :data="tableData" style="width: 100%" type="flex" justify="space-between" >
        <el-table-column prop="date" label="价格来源" ></el-table-column>
        <el-table-column prop="name" label="低价房型" ></el-table-column>
        <el-table-column prop="address" label="最低价格/每晚" ><span class="price">￥62 </span> 起 <i class="el-icon-arrow-right height-light icon_img"></i></el-table-column>
      </el-table>
    </div>
</template>

<script>
export default {
 data() {
        return {
          tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }]
        }
      }
}
</script>

<style lang="less" scope>
.hoteltable{
    margin-top:  20px;
    .price {
color:orange;
    }
    .icon_img{
        color:orange;
    }
}
</style>
