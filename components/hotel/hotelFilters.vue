<template>
  <div class="hotel_item">
    <!-- 面包屑 -->
    <el-breadcrumb separator-class="el-icon-arrow-right" class="breadcrumb">
      <el-breadcrumb-item>酒店</el-breadcrumb-item>
      <el-breadcrumb-item>{{destination}}酒店预订</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 表单 -->
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item>
        <!-- fetch-suggestions: 当输入框输入值时候触发搜索建议事件 -->
        <!-- select：选中下拉框时候触发，参数是选中的参数对象 -->
        <el-autocomplete
          :fetch-suggestions="queryDepartSearch"
          placeholder="目的地"
          @select="handleDepartSelect"
          class="el-autocomplete"
          v-model="formInline.destination"
          value-key="name"
        ></el-autocomplete>
      </el-form-item>
      <el-form-item>
        <el-date-picker
          v-model="formInline.date"
          type="daterange"
          range-separator="-"
          start-placeholder="入住日期"
          end-placeholder="离店日期"
        ></el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="hotelPri">查看价格</el-button>
      </el-form-item>
    </el-form>
    <!-- 区域 -->
    <el-row type="flex" class="hotel-option-row" v-if="region.length>0">
      <el-col :span="14" style="padding-left: 5px; padding-right: 5px;">
        <el-row class="search-options">
          <el-row class="option-row" type="flex">
            <el-col :span="3">区域：</el-col>
            <el-col :span="24" :class="{ hiddenAll: isActive }">
              <div class="scenics-box">
                <a
                  href="javascript:;"
                  :class="{'location-budget':true,active:isShowClass}"
                  @click="regionAll"
                >全部</a>
                <a
                  :class="['location-budget',{active:currentTab === index}]"
                  v-for="(item,index) in region"
                  :key="item.id"
                  @click="regionDeta(item.id,index)"
                >{{item.name}}</a>
                <!-- <nuxt-link
                  :to="`/air/flights?departCity=${item.departCity}&departCode=${item.departCode}&destCity=${item.destCity}&destCode=${item.destCode}&departDate=${item.departDate}`"
                  class="location-budget"
                  v-for="(item) in region"
                  :key="item.id"
                >{{item.name}}</nuxt-link>-->
              </div>
              <a href="javascript:;" @click="isActive = !isActive">
                <i class="el-icon-d-arrow-right" v-if="isActive"></i>
                <i class="el-icon-d-arrow-left" v-if="!isActive"></i>
                等{{region.length}}个区域
              </a>
            </el-col>
          </el-row>
          <el-row class="option-row" type="flex">
            <el-col :span="3">攻略:</el-col>
            <el-col :span="24">
              北京，你想要的都能在这找到。博古通今，兼容并蓄，天下一城，如是帝都。
              景点以故宫为中心向四处辐射；地铁便宜通畅，而且覆盖绝大多数景点。
              由于早上有天安门升旗仪式，所以大多数人选择在天安门附近住宿。
            </el-col>
          </el-row>
          <el-row class="option-row price-row" type="flex">
            <el-col :span="3">
              均价
              <sup>
                <el-tooltip
                  class="question-mark"
                  effect="dark"
                  content="等级评定是针对房价，设施和服务等各方面水平的综合评估"
                  placement="top-start"
                >
                  <span class="price-budget">?</span>
                </el-tooltip>
              </sup>
              :
            </el-col>
            <el-col :span="24">
              <el-row type="flex">
                <el-col :span="6">
                  <el-tooltip
                    class="item"
                    effect="dark"
                    content="等级评定是针对房价，设施和服务等各方面水平的综合评估"
                    placement="bottom-start"
                  >
                    <span>
                      <i class="iconfont iconhuangguan"></i>
                      <i class="iconfont iconhuangguan"></i>
                      <i class="iconfont iconhuangguan"></i>
                      <span class="price-budget">¥332</span>
                    </span>
                  </el-tooltip>
                </el-col>
                <el-col :span="6">
                  <el-tooltip
                    class="item"
                    effect="dark"
                    content="等级评定是针对房价，设施和服务等各方面水平的综合评估"
                    placement="bottom-start"
                  >
                    <span>
                      <i class="iconfont iconhuangguan"></i>
                      <i class="iconfont iconhuangguan"></i>
                      <i class="iconfont iconhuangguan"></i>
                      <span class="price-budget">¥521</span>
                    </span>
                  </el-tooltip>
                </el-col>
                <el-col :span="6">
                  <el-tooltip
                    class="item"
                    effect="dark"
                    content="等级评定是针对房价，设施和服务等各方面水平的综合评估"
                    placement="bottom-start"
                  >
                    <span>
                      <i class="iconfont iconhuangguan"></i>
                      <i class="iconfont iconhuangguan"></i>
                      <i class="iconfont iconhuangguan"></i>
                      <span class="price-budget">¥768</span>
                    </span>
                  </el-tooltip>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
        </el-row>
      </el-col>
      <el-col :span="10" class="mapTag" id="mapTag"></el-col>
    </el-row>

    <!-- 酒店筛选 -->
    <div class="list-filter">
      <el-row type="flex">
        <el-col :span="8" class="filter-col" style="padding-left: 20px; padding-right:20px">
          <el-row type="flex" class="filter-title" justify="space-between">
            <span>价格</span>
            <span>0-{{price_lt}}</span>
          </el-row>
          <el-row>
            <el-slider v-model="price_lt" :max="4000" @change="handleChange(price_lt,'price_lt')"></el-slider>
          </el-row>
        </el-col>
        <el-col :span="6" class="filter-col" style="padding-left: 20px; padding-right:20px">
          <el-row type="flex" class="filter-title">
            <el-col>住宿等级</el-col>
          </el-row>
          <el-row class="assets">
            <el-select
              v-model="hotellevel_in"
              placeholder="请选择"
              @change="handleChange(hotellevel_in,'hotellevel_in')"
            >
              <el-option
                v-for="item in options.levels"
                :key="item.id"
                :label="item.name"
                :value="item.id"
              ></el-option>
            </el-select>
          </el-row>
        </el-col>
        <el-col :span="6" class="filter-col" style="padding-left: 20px; padding-right:20px">
          <el-row type="flex" class="filter-title">
            <el-col>住宿类型</el-col>
          </el-row>
          <el-row class="assets">
            <el-select
              v-model="hoteltype_in"
              placeholder="请选择"
              @change="handleChange(hoteltype_in,'hoteltype_in')"
            >
              <el-option
                v-for="item in options.types"
                :key="item.id"
                :label="item.name"
                :value="item.id"
              ></el-option>
            </el-select>
          </el-row>
        </el-col>
        <el-col :span="6" class="filter-col" style="padding-left: 20px; padding-right:20px">
          <el-row type="flex" class="filter-title">
            <el-col>酒店设施</el-col>
          </el-row>
          <el-row class="assets">
            <el-select
              v-model="hotelasset_in"
              placeholder="请选择"
              @change="handleChange(hotelasset_in,'hotelasset_in')"
            >
              <el-option
                v-for="item in options.assets"
                :key="item.id"
                :label="item.name"
                :value="item.id"
              ></el-option>
            </el-select>
          </el-row>
        </el-col>
        <el-col :span="6" class="filter-col" style="padding-left: 20px; padding-right:20px">
          <el-row type="flex" class="filter-title">
            <el-col>酒店品牌</el-col>
          </el-row>
          <el-row class="assets">
            <el-select
              v-model="hotelbrand_in"
              placeholder="请选择"
              @change="handleChange(hotelbrand_in,'hotelbrand_in')"
            >
              <el-option
                v-for="item in options.brands"
                :key="item.id"
                :label="item.name"
                :value="item.id"
              ></el-option>
            </el-select>
          </el-row>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import moment from "moment";
export default {
  data() {
    return {
      mapUrl:
        "https://webapi.amap.com/maps?v=1.4.15&key=fc349821166279b8365299d22d7cf202&callback=init",
      formInline: {
        destination: "南京", // 目的地
        date: "" // 日期
      },
      // 面包屑城市
      destination: "南京市",
      // 更多区域
      isActive: true,
      // 区域
      region: [],
      // 酒店信息
      hotelInfo: [],
      // 酒店总数
      total: 0,

      // 显示类
      isShowClass: true,
      currentTab: "",
      // 选项数据
      options: [],
      // 住宿等级
      hotellevel_in: "",
      // 酒店价格
      price_lt: 4000,
      // 住宿类型
      hoteltype_in: "",
      // 酒店设施
      hotelasset_in: "",
      // 酒店品牌
      hotelbrand_in: ""
    };
  },
  methods: {
    setMarker(x, y, title, index) {
      return new AMap.Marker({
        // 将 html 传给 content
        content: `<span class="marker" style="display: inline-block;width: 22px;height: 36px;background-image: url(https://webapi.amap.com/theme/v1.3/markers/b/mark_b.png);
        background-size: 22px 36px;
        text-align: center;
        line-height: 24px;
        color: #fff;">${index}</span>`,
        //content: "<div style='width:20px; height:20px; background:red;'>1</div>",
        position: new AMap.LngLat(x, y), // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
        title: title,
        // 以 icon 的 [center bottom] 为原点
        offset: new AMap.Pixel(-13, -30)
      });
    },
    init() {
      if (this.hotelInfo.length > 0) {
        // 生成地图.container是显示地图的div的id
        var map = new AMap.Map("mapTag", {
          zoom: 8, //放大级别
          center: [
            this.hotelInfo[0].location.longitude,
            this.hotelInfo[0].location.latitude
          ], //中心点坐标，经纬度
          viewMode: "3D" //使用3D视图
        });
        // 创建一个 Marker 实例：
        this.hotelInfo.forEach((item, index) => {
          map.add(
            this.setMarker(
              item.location.longitude,
              item.location.latitude,
              item.name,
              index + 1
            )
          );
        });
      } else {
        // 生成地图.container是显示地图的div的id
        var map = new AMap.Map("mapTag", {
          zoom: 8, //放大级别
          center: [118.8718107, 31.32846821], //中心点坐标，经纬度
          viewMode: "3D" //使用3D视图
        });
        // // 创建一个 Marker 实例：
        // var marker = new AMap.Marker({
        //   //content: "<div style='width:20px; height:20px; background:red;'>1</div>",
        //   position: new AMap.LngLat(118.8718107, 31.32846821), // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
        //   title: "北京"
        // });
        // // 创建一个 Marker 实例：
        // map.add(marker);
      }
    },
    // 获取酒店信息
    getCityInfo() {
      let obj = { ...this.$route.query };
      obj["city"] = obj["city"] * 1;
      this.$axios({
        url: "/cities",
        params: {
          name: this.formInline.destination
        }
      }).then(res => {
        this.region = res.data.data[0].scenics;
        obj["city"] = res.data.data[0].id;

        this.$router.replace({
          name: this.$route.name,
          query: obj
        });

        this.getHotelData(obj);
      });
    },
    getHotelData(obj) {
      this.$axios({
        url: "/hotels",
        params: {
          ...obj
        }
      }).then(res => {
        console.log(res);
        if (res.data.data.length > 0) {
          this.hotelInfo = res.data.data;
          this.$store.commit("hotel/setInfoData", res.data);
          this.init();
        } else {
          this.hotelInfo = [];
          this.$store.commit("hotel/setInfoData", res.data);
          this.init();
        }
      });
    },
    // 输入文字时候触发
    // value是输入框的值
    // cb 是回调函数,
    queryDepartSearch(value, cb) {
      this.querySearchCity(value).then(arr => {
        // if (arr.length > 0) {
        //   // 设置到达城市的第一个为默认值
        //   this.formInline.destination = arr[0].value;
        // }

        // 执行回调
        cb(arr);
      });
    },
    // 由于出发城市和到达城市的搜索逻辑是一样
    // 不一样的是默认的第一个赋值操作不一样
    querySearchCity(queryString) {
      return new Promise((resolve, reject) => {
        // 如果是空就不发起请求
        if (!queryString.trim()) {
          resolve([]);
          return;
        }

        this.$axios({
          url: "/airs/city",
          params: {
            // 搜索关键字，输入框的值
            name: queryString
          }
        }).then(res => {
          const { data } = res.data;

          // 添加一个value属性，值等于name没有市字
          const newData = data.map(v => {
            return {
              ...v,
              value: v.name
            };
          });

          // 默认选中第一个
          resolve(data);

          // this.form.destCity = newData[0].value;
          // this.form.destCode = newData[0].sort;

          // 回调函数中的参数必须是一个数组
          // 数组中每一项必须是一个对象，对象中必须包含value属性
          //cb(newData);
        });
      });
    },

    // 出发城市下拉选择时触发
    handleDepartSelect(item) {
      console.log(item);
      console.log("选择");
      this.currentTab = "";
      this.isShowClass = true;
      this.destination = item.name;
      // 把选中对象值赋给表单
      this.formInline.destination = item.name;
      this.getCityInfo();
    },
    // 点击区域
    regionDeta(id, index) {
      console.log(id);
      this.currentTab = index;
      this.isShowClass = !this.isShowClass;
      var obj = { ...this.$route.query };
      obj["scenic"] = id;
      this.$router.replace({
        name: this.$route.name,
        query: obj
      });
      this.getHotelData(obj);
    },
    // 点击全部区域
    regionAll() {
      this.currentTab = "";
      this.isShowClass = !this.isShowClass;
      var obj = { ...this.$route.query };
      delete obj["scenic"];
      this.$router.replace({
        name: this.$route.name,
        query: obj
      });
      this.getHotelData(obj);
    },
    // 查看价格
    hotelPri() {
      console.log(this.formInline.date);
      var obj = { ...this.$route.query };
      obj["enterTime"] = moment(this.formInline.date[0]).format("YYYY-MM-DD");
      obj["leftTime"] = moment(this.formInline.date[1]).format("YYYY-MM-DD");
      console.log(obj);
      this.$router.replace({
        name: this.$route.name,
        query: obj
      });
      this.getHotelData(obj);
    },
    handleChange(value, type) {
      var obj = { ...this.$route.query };

      if (type === "price_lt") {
        obj["price_lt"] = value;
      }
      if (type === "hotellevel_in") {
        obj["hotellevel_in"] = value;
      }
      if (type === "hoteltype_in") {
        obj["hoteltype_in"] = value;
      }
      if (type === "hotelasset_in") {
        obj["hotelasset_in"] = value;
      }
      if (type === "hotelbrand_in") {
        obj["hotelbrand_in"] = value;
      }
      this.$router.replace({
        name: this.$route.name,
        query: obj
      });
      this.getHotelData(obj);
    }
  },
  mounted() {
    // 地图的链接
    var jsapi = document.createElement("script");
    jsapi.charset = "utf-8";
    jsapi.src = this.mapUrl;
    document.head.appendChild(jsapi);
    window.init = this.init;
    this.getCityInfo();

    this.$axios({
      url: "/hotels/options"
    }).then(res => {
      console.log(res);
      this.options = res.data.data;
    });
  }
};
</script>
<style lang="less" scoped>
/deep/ .assets input.el-input__inner {
  border: 0;
  padding: 0;
}
.iconhuangguan {
  color: #f90;
}
.hotel_item {
  .breadcrumb {
    overflow: hidden;
    padding: 20px 0;
  }
  .hotel-option-row {
    min-height: 260px;
    margin-bottom: 20px;
    margin-left: -5px;
    margin-right: -5px;
    .option-row {
      margin-bottom: 20px;
      color: #666;
      font-size: 14px;
      .hiddenAll {
        .scenics-box {
          max-height: 2.9em;
          overflow: hidden;
        }
      }
      .location-budget {
        margin-right: 1em;
        padding: 0 2px;
        border-radius: 4px;
        display: inline-block;
        cursor: pointer;
        &.active {
          background: #eee;
          cursor: auto;
          text-decoration: none;
          color: #999;
        }
      }
      .location-budget:hover:not(:first-child) {
        text-decoration: underline;
        color: #09f;
      }
      .el-icon-d-arrow-right,
      .el-icon-d-arrow-left {
        -webkit-transform: rotate(90deg);
        transform: rotate(90deg);
        color: #f90;
      }
    }
    .option-row.price-row .question-mark {
      background-color: #ccc;
      color: #fff;
      display: inline-block;
      width: 1.2em;
      height: 1.2em;
      text-align: center;
      border-radius: 100%;

      .price-budget {
        margin-left: 0.5em;
      }
    }
  }
  .list-filter {
    border: 1px solid #ddd;
    padding: 5px 0px;
    color: #666;
    .filter-col:not(:last-child) {
      border-right: 1px solid #ddd;
      padding: 5px 0;
    }
    .filter-title {
      font-size: 14px;
    }
  }
}
</style>

