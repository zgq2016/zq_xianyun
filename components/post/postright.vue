<template>
  <div class="postright">
    <!-- 搜索框 -->
    <el-row type="flex" class="search">
      <el-input placeholder="请输入想去的地方,比如:'广州'" class="el_inp" v-model="search_input"></el-input>
      <el-button type="primary" icon="el-icon-search" class="el_btn" @click="click_search_input"></el-button>
    </el-row>
    <!-- 推荐 -->
    <div>
      <span class="search_recommend">
        推荐:
        <!-- <a href="JavaScript:;">广州</a>
        <a href="JavaScript:;">上海</a>
        <a href="JavaScript:;">北京</a>-->
        <!-- const { data } = res.data; -->
        <nuxt-link
          v-for="(item, index) in ['广州','上海','北京']"
          :key="index"
          :to="`/post?city=${item}`"
          class="nuxt_link_tui"
        >
          <span>{{item[0]}}</span>
          <span>{{item[1]}}</span>
          <span>{{item[2]}}</span>
        </nuxt-link>
      </span>
    </div>
    <!-- 推荐攻略-->
    <el-row type="flex" justify="space-between" align="middle" class="el_post_title">
      <h2 class="post_title">推荐攻略</h2>
      <el-button type="primary" icon="el-icon-edit" @click="$router.push({path:'/post/create'})">写游记</el-button>
    </el-row>
    <!--  -->
    <div>
      <div v-for="(item, index) in dataList" :key="index">
        <div>
          <!-- <a href></a> -->
          <nuxt-link to="/post/tourism">{{item.title}}</nuxt-link>
          <a :href="`/post/detail?id=${item.id}`" class="post_item" v-html="item.summary"></a>
          <div>
            <el-row class="a_img" type="flex" justify="space-between">
              <a href v-for="(items, indexs) in item.images.slice(0,3)" :key="indexs">
                <img :src="items" alt />
              </a>
            </el-row>
          </div>
          <div>
            <el-row type="flex" justify="space-between">
              <el-row type="flex" justify="space-around" align="middle" class="el_row">
                <span>
                  <i class="el-icon-location-outline">{{item.cityName}}</i>
                </span>
                <div class="by_img_span">
                  <i>by</i>
                  <img src="http://157.122.54.189:9095/assets/images/avatar.jpg" alt />
                  <i v-html="item.account.nickname"></i>
                </div>
                <span>
                  <i class="el-icon-view" v-html="item.watch"></i>
                </span>
              </el-row>
              <el-row>{{item.like}}赞</el-row>
            </el-row>
          </div>
        </div>
      </div>
      <!-- 分页 -->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pageIndex"
        :page-sizes="[ 2, 3, 4, 5 ]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      ></el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: [],
      images: [],
      pageIndex: 1, // 当前页数
      pageSize: 2, // 当前页面的条数
      total: 0, // 总条数
      search_input: ""
    };
  },
  watch: {
    // 监听路由的变化,，同一个页面之间的跳转不会重新加载组件
    // 1.可以通过监听$route的方法来实现
    // 2.
    $route() {
      //  console.log(123)
      const { city } = this.$route.query;
      this.$axios({
        url: "/posts",
        params: {
          // _start: this.pageIndex,
          // _limit: this.pageSize,
          city
        }
      }).then(res => {
        console.log(res);
        const { data } = res.data;
        this.data = data;
        this.total = res.data.total;
        // console.log(total)
      });
    }
  },
  mounted() {
    this.$axios({
      url: "/posts"
    }).then(res => {
      // console.log(res);
      const { data } = res.data;
      this.data = data;
      this.total = res.data.total;
      // console.log(this.total);
    });
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
    click_search_input(value) {
      const { city } = this.$route.query;
      this.$axios({
        url: "/posts",
        params: {
          // _start: this.pageIndex,
          // _limit: this.pageSize,

          city: this.search_input
        }
      }).then(res => {
        console.log(res);
        const { data } = res.data;
        this.data = data;
        this.total = res.data.total;
        // console.log(total)
      });
    }
  },
  computed: {
    dataList() {
      if (this.data.length > 0) {
        let postsData = this.data.slice(
          (this.pageIndex - 1) * this.pageSize,
          this.pageSize * this.pageIndex
        );
        return postsData;
      } else {
        return [];
      }
    }
  }
};
</script>
<style lang="less" scoped>
.search {
  margin: 10px 0;
  .el_inp {
    width: 600px;
  }
  .el_btn {
    width: 70px;
  }
}
.search_recommend {
  font-size: 12px;
  padding: 10px;
  .nuxt_link_tui {
    padding-left: 10px;
  }
  :hover {
    color: aqua;
  }
}
.el_post_title {
  border-bottom: 1px solid #666;
  margin: 10px 0;
  .post_title {
    font-weight: 400;
    font-size: 18px;
    color: orange;
  }
}
.post_item {
  font-size: 12px;
  display: -webkit-box;
  overflow: hidden;
  white-space: normal !important;
  text-overflow: ellipsis;
  word-wrap: break-word;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  margin: 10px 0;
}
.a_img {
  margin-bottom: 10px;
  a {
    img {
      width: 220px;
      height: 150px;
      object-fit: cover;
    }
  }
}
.el_row {
  font-size: 12px;
  .by_img_span {
    img {
      width: 16px;
      height: 16px;
    }
  }
}
</style>
