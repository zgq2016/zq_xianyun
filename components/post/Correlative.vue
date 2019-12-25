<template>
  <el-row class="aside">
    <el-row class="recommend-list">
      <nuxt-link to="*" class="recommend-item">
        <el-row type="flex" class="post-imgText">
          <el-row type="flex" class="post-img" style="align-items: center;">
            <img data-v-741ea8d8="" :src="data.images[0]">
          </el-row>
          <div class="post-text">
            <div>{{ data.title }}</div>
            <p>{{ data.city.created_at }} 阅读 {{ data.watch }}</p>
          </div>
        </el-row>
      </nuxt-link>
    </el-row>
  </el-row>
</template>

<script>
export default {
  props: {
    data: {
      type: Object, // 声明属性的类型
      default: () => ({})// 属性的默认值
    }
  }
}
</script>

<style scoped lang="less">
.aside{
      width: 280px;

      .aside-title{
        font-weight: 400;
        font-size: 18px;
        padding-bottom: 10px;
        border-bottom: 1px solid #ddd;
      }
      .recommend-list{
         .recommend-item{
               display: block;
               padding: 20px 0;
               border-bottom: 1px solid #ddd;

               .post-img{
                    width: 100px;
                    height: 80px;
                    flex-shrink: 0;
                    background: #ddd;
                    overflow: hidden;
                    margin-right: 10px;

                    img{
                         width: 100%;
                         height: 100%;
                         object-fit: cover;
                    }
               }
               .post-text{
                    flex: 1;
                    position: relative;

                    >div{
                         line-height: 1.4em;
                         height: 2.8em;
                         overflow: hidden;
                         position: absolute;
                         left: 0;
                         top: 0;
                         width: 100%;
                         font-size: 12px;
                         overflow: hidden;
                    }
                    >p{
                          position: absolute;
                          bottom: 0;
                          left: 0;
                          font-size: 12px;
                          color: #999;
                    }
               }
            }
      }
    }
</style>
