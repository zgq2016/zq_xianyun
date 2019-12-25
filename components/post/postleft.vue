<template>
  <div class="postleft">
    <el-collapse v-model="activeName" accordion class="navs">
      <el-collapse-item v-for="(item, index) in data" :key="index" :title="item.type" :name="index">
        <div v-for="(item, index) in item.children" :key="index">
          <nuxt-link :to="`/post?city=${item.city}`">{{index+1+"."}}{{item.city+"-"+item.desc}}</nuxt-link>
        </div>
      </el-collapse-item>
    </el-collapse>

    <div class="postbotton">
      <p>推荐城市</p>
      <img src="http://157.122.54.189:9093/images/pic_sea.jpeg" alt />
    </div>
  </div>
</template>


<script>
export default {
  props: ["data"],
  data() {
    return {
      activeName: "1"
    };
  }
};
</script>
<style lang="less" scoped>
.navs {
  width: 270px;
  margin: 10px;
}
.postbotton {
  width: 270px;
  p {
    padding-bottom: 5px;
  }
  img {
    border-top: 1px solid #ccc;
    padding-top: 5px;
    width: 100%;
  }
}
</style>
