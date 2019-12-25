<template>
  <div class="comment">
    <h4>10条真实用户评论</h4>

    <div class="comment_info">
      <div class="comment_count">
        <div class="item">总评数:9</div>
        <div class="item">好评数:1</div>
        <div class="item">差评数:1</div>
      </div>
      <div class="comment_nav">
        <div class="start_box">
          <div class="start el-rate__icon el-icon-star-on"></div>
          <div class="start el-rate__icon el-icon-star-on"></div>
          <div class="start el-rate__icon el-icon-star-on"></div>
          <div class="start el-rate__icon el-icon-star-on"></div>
          <div class="start el-rate__icon el-icon-star-on"></div>
          <div class="circle">推荐</div>
        </div>
        <div class="count">3.5分</div>
        <div class="nav">
          <div class="item">环境</div>
          <div class="item">产品</div>
          <div class="item">服务</div>
        </div>
      </div>
    </div>
    <div class="comment_list">
      <div class="item">
        <div class="left">
          <div class="dp"></div>
          <div class="level">lv8</div>
          <div class="join_date">2019-6-26</div>
        </div>
        <div class="right">
          <div class="content">badwoman</div>
          <div class="reply">
            <textarea class="sendMsg" placeholder="添加回复"></textarea>
            <div class="btn" v-if="false">
              <el-button type="primary">回复</el-button>
            </div>
          </div>
          <div class="comment_comment_list">
            <div class="comment_list">
              <div class="item">
                <div class="left">
                  <div class="dp"></div>
                  <div class="level">lv8</div>
                  <div class="join_date">2019-6-26</div>
                </div>
                <div class="right">
                  <div class="content">badwoman</div>
                  <div class="reply">
                    <textarea class="sendMsg" placeholder="添加回复"></textarea>
                    <div class="btn" v-if="false">
                      <el-button type="primary">回复</el-button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.comment {
  h4 {
    margin-bottom: 20px;
  }
  .comment_info {
    display: flex;
    padding-bottom: 30px;
    margin-bottom: 10px;
    .comment_count {
      margin-right: 100px;
    }
    .comment_nav {
      display: flex;
      height: 60px;
      line-height: 60px;
      .start_box {
        margin-right: 20px;
        position: relative;
        .start {
          color: rgb(247, 186, 42);
        }
        .circle {
          border: 1px solid red;
          width: 70px;
          height: 70px;
          border-radius: 50%;
          text-align: center;
          line-height: 70px;
          position: absolute;
          top: 0px;
          left: 28px;
          font-size: 20px;
          color: #f90;
          opacity: 0.25;
          transform: rotate(-45deg);
        }
      }
      .count {
        margin-right: 100px;
        color: #f90;
      }
      .nav {
        display: flex;
        .item {
          margin-right: 74px;
          color: #f90;
        }
      }
    }
  }
  .comment_list {
    .item {
      display: flex;
      padding-top: 20px;
      border-top: 1px dashed #ccc;
      .left {
        width: 110px;
        display: flex;
        flex-wrap: wrap;
        position: relative;
        .dp {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: 1px solid red;
          box-sizing: border-box;
          margin-right: 10px;
        }
        .level {
          flex: 1;
        }
        .join_date {
          position: absolute;
          top: 50px;
        }
      }
      .right {
        width: 100%;
        .reply {
          position: relative;
          .sendMsg {
            display: block;
            width: 100%;
            resize: none;
            padding: 5px 15px;
            box-sizing: border-box;
            color: #606266;
            background-color: #fff;
            border: 1px solid #dcdfe6;
            border-radius: 4px;
            margin-bottom: 30px;
          }
          .btn {
            position: absolute;
            right: 0px;
            bottom: 0px;
          }
        }
        .comment_comment_list {
          padding-top: 20px;
        }
      }
    }
  }
}
</style>
