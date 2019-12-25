<template>
  <el-row class="main">
    <!-- 顶部链接 -->
    <el-breadcrumb
      separator="/"
      class="breadcrumb"
    >
      <el-breadcrumb-item :to="{ path: '*' }">
        <span class="top_link">旅游攻略</span>
      </el-breadcrumb-item>
      <el-breadcrumb-item>攻略详情</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 标题完成 -->
    <h1>{{ data.title }}</h1>
    <!-- 时间日期完成 -->
    <div class="post-info">
      <span>攻略：{{ data.city.created_at }}</span>
      <span>阅读：{{ data.watch }}</span>
    </div>
    <!-- 详情介绍 -->
    <div
      class="post-content"
      v-html="data.content"
    >
      {{ data.content }}
    </div>
    <!-- 图标 -->
    <div class="post-ctrl">
      <el-row
        justify="center "
        type="flex"
      >
        <div class="ctrl-item">
          <i class="el-icon-edit-outline" />
          <p>评论{{ data.totle }}</p>
        </div>
        <div class="ctrl-item" @click="handleCollect">
          <i class="el-icon-star-off" />
          <p>
            收藏
          </p>
        </div>
        <div class="ctrl-item">
          <i class="el-icon-share" />
          <p>分享</p>
        </div>
        <div class="ctrl-item" @click="handleClick">
          <i class="el-icon-thumb" />
          <p>点赞</p>
        </div>
      </el-row>
    </div>
    <!-- 评论 -->
  </el-row>
</template>

<script>
export default {
  props: {
    data: {
      type: Object, // 声明属性的类型
      default: () => ({}) // 属性的默认值
    }
  },
  data() {
    return {
      postData: []

    }
  },
  methods: {
    // 收藏
    handleCollect(id) {
      this.$message({
        message: '收藏成功',
        type: 'success'
      })
      this.$axios({
        url: '/posts/star',
        method: 'GET',
        params: {
          id: this.id
        }
      })
    },
    handleClick() {
      this.$message({
        message: '点赞成功',
        type: 'success'
      })
      this.$axios({
        url: '/posts/star',
        method: 'GET',
        params: {
          id: this.id
        }
      })
    }
  }
}
</script>

<style scoped lang="less">
.main {
  width: 700px;
  h1 {
    padding: 20px 0;
    border-bottom: 1px solid #ddd;
  }

  .post-info {
    color: #999;
    padding: 20px;
    text-align: right;

    span {
      margin-left: 20px;
    }
  }

  .main .post-content {
    line-height: 1.5;
    /deep/ img {
      max-width: 700px !important;
    }
  }
  .post-ctrl {
    padding: 50px 0 30px;

    .ctrl-item {
      margin: 0 20px;
      font-size: 20px;
      text-align: center;
      cursor: pointer;

      i {
        display: block;
        font-size: 28px;
        color: orange;
      }
      p {
        margin-top: 5px;
        font-size: 14px;
        color: #999;
      }
    }
  }

}
</style>
