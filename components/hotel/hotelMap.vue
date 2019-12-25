<template>
  <div class="hotel_map">
    <div class="map_main">
      <el-row class="map">
        <el-col class="map_box" id="container"></el-col>
        <el-col class="list">
          <el-tabs @tab-click="handleClick">
            <el-tab-pane label="风景" name="first">
              <div class="tab_main">
                <div class="tab_list">
                  <ol class="list_ol">
                    <li class="list_main">
                      <span class="name">人民广场</span>
                      <span class="distance">1.96公里</span>
                    </li>
                    <li class="list_main">
                      <span class="name">人民广场</span>
                      <span class="distance">1.96公里</span>
                    </li>
                    <li class="list_main">
                      <span class="name">人民广场</span>
                      <span class="distance">1.96公里</span>
                    </li>
                    <li class="list_main">
                      <span class="name">人民广场</span>
                      <span class="distance">1.96公里</span>
                    </li>
                    <li class="list_main">
                      <span class="name">人民广场</span>
                      <span class="distance">1.96公里</span>
                    </li>
                    <li class="list_main">
                      <span class="name">人民广场</span>
                      <span class="distance">1.96公里</span>
                    </li>
                    <li class="list_main">
                      <span class="name">人民广场</span>
                      <span class="distance">1.96公里</span>
                    </li>
                    <li class="list_main">
                      <span class="name">人民广场</span>
                      <span class="distance">1.96公里</span>
                    </li>
                    <li class="list_main">
                      <span class="name">人民广场</span>
                      <span class="distance">1.96公里</span>
                    </li>
                    <li class="list_main">
                      <span class="name">人民广场</span>
                      <span class="distance">1.96公里</span>
                    </li>
                    <li class="list_main">
                      <span class="name">人民广场</span>
                      <span class="distance">1.96公里</span>
                    </li>
                  </ol>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="交通" name="second">
              <div class="tab_main">
                <div class="tab_list">
                  <ol class="list_ol">
                    <li class="list_main">
                      <span class="name">人民广场(公交站)</span>
                      <span class="distance">1.96公里</span>
                    </li>
                    <li class="list_main">
                      <span class="name">人民广场(公交站)</span>
                      <span class="distance">1.96公里</span>
                    </li>
                    <li class="list_main">
                      <span class="name">人民广场(公交站)</span>
                      <span class="distance">1.96公里</span>
                    </li>
                    <li class="list_main">
                      <span class="name">人民广场(公交站)</span>
                      <span class="distance">1.96公里</span>
                    </li>
                    <li class="list_main">
                      <span class="name">人民广场(公交站)</span>
                      <span class="distance">1.96公里</span>
                    </li>
                    <li class="list_main">
                      <span class="name">人民广场(公交站)</span>
                      <span class="distance">1.96公里</span>
                    </li>
                    <li class="list_main">
                      <span class="name">人民广场(公交站)</span>
                      <span class="distance">1.96公里</span>
                    </li>
                    <li class="list_main">
                      <span class="name">人民广场(公交站)</span>
                      <span class="distance">1.96公里</span>
                    </li>
                    <li class="list_main">
                      <span class="name">人民广场(公交站)</span>
                      <span class="distance">1.96公里</span>
                    </li>
                    <li class="list_main">
                      <span class="name">人民广场(公交站)</span>
                      <span class="distance">1.96公里</span>
                    </li>
                    <li class="list_main">
                      <span class="name">人民广场(公交站)</span>
                      <span class="distance">1.96公里</span>
                    </li>
                  </ol>
                </div>
              </div>
            </el-tab-pane>
          </el-tabs>
        </el-col>
      </el-row>
    </div>
    <div class="hotel_info">
      <el-row class="info_row">
        <el-col :span="4" class="info_rol_title">基本信息</el-col>
        <el-col :span="20" class="info_rol_main">
          <el-row class="rol_main_text" type="flex">
            <el-col>入住时间: 14:00之后</el-col>
            <el-col>离店时间: 12:00之前</el-col>
            <el-col>2010年开业: 2015年装修</el-col>
            <el-col>酒店规模: 148间客房</el-col>
          </el-row>
        </el-col>
      </el-row>
      <el-row class="info_row">
        <el-col :span="4" class="info_rol_title">主要设施</el-col>
        <el-col :span="20" class="info_rol_main">
          <el-row class="rol_main_text" type="flex">
          <el-button type="info" plain>外币兑换服务</el-button>
           <el-button type="info" plain>电梯</el-button>
            <el-button type="info" plain>洗衣服务</el-button>
             <el-button type="info" plain>热水壶</el-button>
          </el-row>
        </el-col>
      </el-row>
      <el-row class="info_row">
        <el-col :span="4" class="info_rol_title">基本信息</el-col>
        <el-col :span="20" class="info_rol_main">
          <el-row class="rol_main_text" type="flex">

          </el-row>
        </el-col>
      </el-row>
      <el-row class="info_row">
        <el-col :span="4" class="info_rol_title">基本信息</el-col>
        <el-col :span="20" class="info_rol_main">
          <el-row class="rol_main_text" type="flex">
          
          </el-row>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    handleClick() {}
  },
  mounted() {
    // 页面加加载之后执行
    window.onLoad = function() {
      // 生成地图.container是显示地图的div的id
      var map = new AMap.Map("container", {
        zoom: 11, //放大级别
        center: [118.8718107, 31.32846821], //中心点坐标，经纬度
        viewMode: "3D" //使用3D视图
      });

      // 创建一个 Marker 实例：
      var marker = new AMap.Marker({
        //content: "<div style='width:20px; height:20px; background:red;'>1</div>",
        position: new AMap.LngLat(118.8718107, 31.32846821), // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
        title: "北京"
      });

      map.add(marker);
    };

    // 地图的链接
    var key = "c41855d843ee5651c25c83567dab7070";
    var url = `https://webapi.amap.com/maps?v=1.4.15&key=${key}&callback=onLoad`;
    var jsapi = document.createElement("script");
    jsapi.charset = "utf-8";
    jsapi.src = url;
    document.head.appendChild(jsapi);
  }
};
</script>

<style lang="less" scoped>
.hotel_map {
  .map_main {
    margin: 30px 0px;
    .map {
      width: 1000px;
      height: 360px;
      display: flex;
      .map_box {
        width: 650px;
        height: 100%;
      }
    }
    .list {
      flex: 1;
      margin-left:20px;
      .tab_main {
        overflow: hidden;
        position: relative;
        .tab_list {
          height: 300px;
          overflow: auto;
          font-size: 14px;
          color: #666;
          .list_ol {
            .list_main {
              display: flex;
              margin: 0 20px 20px 10px;
              cursor: pointer;
              .name {
                flex: 1;
              }
              .distance {
              }
            }
          }
        }
      }
    }
  }
  .hotel_info {
    margin: 40px 0px;
    // border: 1px solid #000;
    .info_row {
        padding-left:20px;
      border-bottom: 1px solid #eee;
      .info_rol_title {
        padding: 20px 0px;
        font-size: 16px;
      }
      .info_rol_main {
        padding: 20px 0px;
        font-size: 14px;
        .rol_main_text {
          font-size: 12px;
          color: #666;
        }
      }
    }
  }
}
</style>
