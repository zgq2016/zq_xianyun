<template>
  <div class="cmt-wrapper">
    <el-row
      type="flex"
      class="cmt-title"
    >
      <h4>评论</h4>
    </el-row>
    <!-- 评论框 -->
    <el-form class="cmt-input">
      <el-form-item label="活动形式">
        <textarea
          autocomplete="off"
          placeholder="说点什么吧..."
          class="el-textarea__inner"
          style="resize: none;min-height: 33px;"
        />
      </el-form-item>
    </el-form>
    <!-- 图片上传及提交 -->
    <el-row justify="space-between" type="flex">
      <div class="cmt-input-ctrls">
        <el-upload
          action="https://jsonplaceholder.typicode.com/posts/"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove"
        >
          <i class="el-icon-plus" />
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
      </div>
      <div>
        <el-button type="primary" class="el-button--mini">
          提交
        </el-button>
      </div>
    </el-row>
    <!-- 评论展示区 -->
    <Frame
      v-for="(item, index) in dataList"
      :key="'index_' + index"
      :data="item"
    />
    <!-- 分页 -->
    <el-row type="flex" justify="center" style="margin-top:10px;">
      <el-pagination
        :current-page="pageIndex "
        :page-sizes="[2, 4, 6, 8]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </el-row>
  </div>
</template>

<script>
import Frame from '@/components/post/frame.vue'
export default {
  components: {
    Frame
  },
  data() {
    return {
      dialogImageUrl: '', // 图片上传
      dialogVisible: false, // 图片上传
      pageIndex: 1, // 当前页数
      pageSize: 2,
      total: 1, // 显示条数
      salesDate: {},
      dataList: []
    }
  },
  mounted() {
    this.modDate()
  },
  methods: {
    // 图片上传
    handleRemove(file, fileList) {
      // console.log(file, fileList)
    },
    // 图片上传
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    modDate() {
      this.$axios({
        url: '/posts/comments',
        method: 'GET'
      })
        .then((res) => {
          this.salesDate = res.data
          this.total = this.salesDate.total
          this.dataList = this.salesDate.data.slice(0, this.pageSize)
        })
    },
    handleSizeChange(value) {
      this.pageSize = value
      this.dataList = this.salesDate.data.slice((this.pageIndex - 1) * this.pageSize, this.pageSize * this.pageIndex)
    },
    handleCurrentChange(value) {
      this.pageIndex = value
      this.dataList = this.salesDate.data.slice((this.pageIndex - 1) * this.pageSize, this.pageSize * this.pageIndex)
    }
  }
}
</script>

<style scoped lang="less">
 .cmt-wrapper {
    margin-bottom: 20px;

    .cmt-title {
      font-weight: 400;
      font-size: 18px;
      margin-bottom: 20px;

      h4 {
        display: block;
        margin-block-start: 1.33em;
        margin-block-end: 1.33em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        font-weight: bold;
        font-weight: 500;
      }
    }
    .cmt-input-ctrls {
      box-sizing: border-box;
      margin-bottom: 30px;
    }
  }

.breadcrumb {
  .top_link {
    font-weight: 700;
    text-decoration: none;
    transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    color: #303133;
  }
}
</style>
