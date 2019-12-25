<template>
  <el-row
    type="flex"
    justify="space-between"
    class="cmt-list"
  >
    <div class="cmt-item">
      <div class="cmt-info">
        <img
          data-v-741ea8d8=""
          src="http://157.122.54.189:9095/assets/images/avatar.jpg"
        >
        {{ data.account.nickname }}
        <i>2019-07-21 3:36</i>
        <span>{{ data.level }}</span>
      </div>
      <div class="cmt-content">
        <div class="cmt-floor">
          <div class="cmt-content">
            <div class="cmt-info">
              {{ data.account.nickname }}
              <i style="color: #999">2019-07-21 3:36</i>
              <span style="float: right;">{{ data.level }}</span>
            </div>
            <p class="cmt-message">
              {{ data.content }}
            </p>
            <el-row type="flex" />
          </div>
          <div
            class="floor-ctrl"
            @mouseenter="mouseIn"
            @mouseleave="mouseOut"
          >
            <a
              v-if="showRecommend"
              href="javascript:;"
            >回复</a>
          </div>
        </div>
        <div class="cmt-new">
          <p class="cmt-message">
            {{ data.content }}
          </p>
          <div class="cmt-pic">
            <img src="http://157.122.54.189:9095/assets/images/avatar.jpg">
          </div>
          </p>
          <div class="el-row el-row--flex" />

          <div
            class="cmt-ctrl"
            @mouseenter="mouseIntwo"
            @mouseleave="mouseOuttwo"
          >
            <a v-if="showRecommendtwo" href="javascript:;">回复</a>
          </div>
        </div>
      </div>
    </div>
  </el-row>
</template>

<script>
export default {
  props: {
    // 数据
    data: {
      type: Object,
      // 默认是空数组
      default: () => ({})
    }
  },
  data() {
    return {
      showRecommend: false,
      showRecommendtwo: false
    }
  },
  methods: {
    // 楼中楼鼠标移入事件
    mouseIn() {
      this.showRecommend = true
    },
    mouseOut() {
      this.showRecommend = false
    },
    // 评论框鼠标移入事件
    mouseIntwo() {
      this.showRecommendtwo = true
    },
    mouseOuttwo() {
      this.showRecommendtwo = false
    }
  }
}

</script>

<style scoped lang="less">
.cmt-list {
  border: 1px solid #ddd;

  .cmt-item {
    border-bottom: 1px dashed #ddd;
    padding: 20px 20px 5px;
    width: 100%;

    .cmt-info {
      margin-bottom: 10px;
      font-size: 12px;
      color: #666;
      vertical-align: top;

      img {
        width: 16px;
        height: 16px;
        border-radius: 50%;
      }
      i {
        color: #999;
      }
      span {
        float: right;
      }
    }
    .cmt-content {
      padding: 0 0 0 30px;

      .cmt-floor {
        background: #f9f9f9;
        border: 1px solid #ddd;
        padding: 2px;
        .cmt-content {
          padding: 5px 10px 0;
          .cmt-info {
            font-size: 12px;
            color: #666;
          }
        }
        .floor-ctrl {
          height: 20px;
          line-height: 20px;
          font-size: 7px;
          color: #1e50a2;
          text-align: right;
          padding-right: 6px;
        }
      }
      .cmt-pic {
        width: 80px;
        height: 80px;
        border-radius: 6px;
        overflow: hidden;
        margin-right: 5px;
        margin-top: 10px;
        padding: 5px;
        border: 1px dashed #ddd;

        img {
          display: block;
          width: 100%;
          height: 100%;
          -o-object-fit: cover;
          object-fit: cover;
          cursor: pointer;
        }
      }
      .cmt-message {
        margin-top: 10px;
      }
      p {
        display: block;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
      }
    }
    .cmt-ctrl {
      height: 20px;
      line-height: 20px;
      font-size: 12px;
      color: #1e50a2;
      text-align: right;
      a {
        text-decoration: none;
        color: inherit;
      }
    }
  }
}
</style>
