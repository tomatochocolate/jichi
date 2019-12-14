<template>
  <div>
    <div class="home">
      <div class="h-top">
        <div class="h-logo">
          <img src="../../assets/logo.png" alt />
        </div>
        <div class="h-box">
          <p class="h-box-p">
            <template>
              <Menu active-name="1-1" :open-names="['0']" width="150px">
                <Submenu name="1" id="abc">
                  <template slot="title">{{phone}}</template>
                  <MenuItem name="1-1" to="/order">我的订单</MenuItem>
                  <MenuItem name="1-2" to="/buy">续费充值</MenuItem>
                  <MenuItem name="1-3" to="/help">使用帮助</MenuItem>
                  <MenuItem name="1-4" to="/feedback">意见反馈</MenuItem>
                  <MenuItem name="1-5" to="/card">卡密充值</MenuItem>
                  <a name="1-6" @click="outLogin" class="ivu-menu-item">退出登录</a>
                </Submenu>
              </Menu>
            </template>

            <span class="cont" v-if="switch1" @change="change">
              <Badge color="green" text="已连接" />
            </span>
            <span class="cont" v-else>
              <Badge color="orange" text="未连接" />
            </span>
          </p>
          <p>当前节点：{{nod.now.site}} {{nod.now.speed}}</p>
          <p>当前套餐：{{nodstatus}}</p>
          <p>
            到期时间:2020-01-01 14:38:33
            <span class="buy" @click="goBuy">续费</span>
          </p>
        </div>
      </div>
      <div class="net">
        <span style="margin-left:15px">开启专用网络</span>
        <span class="fr" style="margin-right: 15px">
          <i-Switch v-model="switch1" @on-change="change" />
        </span>
      </div>
      <Divider />
      <div class="nod">
        <span style="margin-left:15px">选择节点</span>
        <span class="fr" style="margin-right: 15px" @click="rush">
          <Icon type="md-refresh" />刷新
        </span>
      </div>
      <ul class="nList">
        <li class="nod-li" v-for="(item,i) in nod.listdata" v-bind:key="i">
          <span style="text-align:center">{{item.site}}</span>
          <span>
            <Badge status="success" />30ms
          </span>
          <span>{{item.status}}</span>
        </li>
      </ul>
    </div>
    <div class="app-home">
      <div class="app-top">
        <div class="app-header">
          <span class="header-left">
            <Icon type="ios-arrow-back" size="25" />
          </span>
          <span class="header-mid">专用网络已连接</span>
          <span class="header-right" >
            <span @click="isShow"><Avatar icon="ios-person" size="30"  /></span>
            <ul style="position: absolute">
                  <li @click="goOrder">我的订单</li>
                  <li  @click="goBuy">续费充值</li>
                  <li  @click="goHelp">使用帮助</li>
                  <li  @click="goFeedBack">意见反馈</li>
                  <li  @click="goCard">卡密充值</li>
                  <li @click="outLogin">退出登录</li>
            </ul>
          </span>
        </div>
        <div class="app-main">
          <div class="disc">点击连接</div>
        </div>
        <div class="app-footer">
          <p>
            <span>当前节点：</span>
            <span>{{nod.now.site}}</span>
          </p>
          <p>
            <span>当前套餐：</span>
            <span>{{nodstatus}}</span>
            <Icon type="ios-arrow-forward" @click="goBuy"/>
          </p>
          <p>
            <span>到期时间：</span>
            <span>2020-01-01 14:38:33</span>
            <span class="fr xf" @click="goBuy">续费</span>
          </p>
        </div>
      </div>
      <div class="app-buttom">
        <p>
          <span class="fl" style="margin-left: 15px">选择节点</span>
          <span class="fr" style="margin-right: 15px" @click="rush">
            刷新
            <Icon type="md-refresh" />
          </span>
        </p>
        <ul>
          <li v-for="(item,i) in nod.listdata" v-bind:key="i">
            <span style="text-align:center">{{item.site}}</span>
            <span>
              <Badge status="success" />30ms
            </span>
            <span>{{item.status}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>



<script>
import Axios from "axios";
import common from "../common/common";

export default {
  name: "home",
  created: function() {
    common.tokenAjax("/userinfo");
  },
  mounted: function() {
    function isHide(flag) {
      if (flag == false) {
        $(".home").attr("style", "display:none");
        $(".app-home").attr("style", "display:block");
      } else {
        $(".home").attr("style", "display:block");
        $(".app-home").attr("style", "display:none");
        $("body").attr("styele", "width: 400px");
        // $("body").attr("styele","height: 100%")
      }
    }

    function IsPC() {
      var userAgentInfo = navigator.userAgent;
      var Agents = [
        "Android",
        "iPhone",
        "SymbianOS",
        "Windows Phone",
        "iPad",
        "iPod"
      ];
      var flag = true;

      for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
          flag = false;
          break;
        }
      }

      return isHide(flag);
    }
    IsPC();
  },
  data() {
    return {
      phone: "13538143602",
      password: "123456",
      switch1: true,
      cont: 0,
      show:false,
      nod: {
        now: { site: "日本", speed: "30ms", status: "已连接" },
        listdata: [
          { site: "日本", speed: "30ms", status: "已连接" },
          { site: "美国", speed: "30ms", status: "未连接" }
        ]
      },
      nodstatus: "月套餐"
    };
  },
  methods: {
    isShow(){
      // $(".header-right ul").attr("style", "display: none");
      if(this.show == true){
        $(".header-right ul").attr("style", "display: none");
        this.show = false
        return
      }
      if(this.show == false){
         $(".header-right ul").attr("style", "display: block");
         this.show = true
         return
      }
      
    },
    rush() {
      common.tokenAjax("/ssr_nodes");
    },
    goBuy() {
      this.$router.push("/buy");
    },
    goHelp() {
      this.$router.push("/help");
    },
    goOrder() {
      this.$router.push("/order");
    },
    goFeedBack() {
      this.$router.push("/feedback");
    },
    goCard() {
      this.$router.push("/card");
    },
    change(status) {
      // if (status == true) {
      //   status = "已连接";
      // } else {
      //   status = "未连接";
      // }
      // this.$Message.info("连接状态：" + status);
      if (status == false) {
        $(".nList").attr("style", "display: none");
      } else {
        $(".nList").attr("style", "display: block");
      }
    },
    outLogin() {
      localStorage.removeItem("Flag");
      this.$router.push("./login");
      common.delCookie("token");
      // Axios({
      //   url: "http://192.168.0.161:9988/api/qt/login", //在线跨域请求
      //   method: "post", //默认是get请求
      //   transformRequest: [function (data) {
      //           let ret = ''
      //           for (let it in data) {
      //             ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
      //           }
      //           return ret
      //         }],
      //   headers: {
      //     //设置请求头
      //     // "Access-Control-Allow-Origin": "*",
      //     "Content-Type": "application/x-www-form-urlencoded",
      //     // "Access-Control-Allow-Credentials": "true",
      //     // "Access-Control-Allow-Headers": "x-requested-with,content-type"
      //   },
      //   data: {
      //     //？search后面的值写在params中
      //     channel: "GW",
      //     phone: "13538143602",
      //     password: "28552599"
      //   }
      // })
      //   .then(function(val) {
      //     console.log(val); // axios会对我们请求来的结果进行再一次的封装（ 让安全性提高 ）
      //   })
      //   .catch(function(err) {
      //     console.log(err);
      //   });
    }
  }
};
</script>

<style scoped>
.home {
  margin-top: 10px;
  overflow: hidden;
}
.home ul {
  padding: 0px;
  margin: 0;
}
.home ul li {
  padding: 0;
  margin-top: 0px !important;
}
.ivu-menu-submenu-title {
  color: #2d8cf0;
}
.ivu-menu-vertical .ivu-menu-item,
.ivu-menu-vertical .ivu-menu-submenu-title {
  padding: 2px !important;
  text-align: center;
}
.ivu-menu-vertical .ivu-menu-submenu .ivu-menu-item {
  padding-left: 0;
}
.ivu-menu-vertical .ivu-menu-submenu-title-icon {
  right: 15px !important;
  position: absolute !important;
  top: 50% !important;
  transform: translateY(-50%) !important;
}
.ivu-menu-vertical .ivu-menu-submenu-title {
  padding: 5px !important;
}
a {
  padding-left: 5px !important;
  width: 100%;
  height: 100%;
  display: block;
  color: #515a6e;
}
a:hover {
  color: #2d8cf0;
}

.h-top {
  overflow: hidden;
  height: 190px;
}
.h-logo {
  float: left;
}
.h-logo img {
  width: 55px;
  height: 55px;
}
.h-box {
  float: left;
  width: 235px;
}
.h-box p {
  line-height: 35px;
  height: 35px;
}
.h-box-p {
  height: 22px;
  position: relative;
  line-height: 22px !important;
}
.h-box-p ul {
  float: left;
  position: absolute;
}
.cont {
  position: absolute;
  left: 175px;
}
.fr {
  float: right;
}
.fl {
  float: left;
}
.ivu-menu-item-active:not(.ivu-menu-submenu):after {
  background: #fff;
}
.nod-li {
  display: flex;
  line-height: 40px;
  height: 40px;
}
.nod-li span {
  flex: 1;
  text-align: right;
}
.buy {
  color: #2d8cf0;
  float: left;
  cursor: pointer;
}
.buy:hover {
  cursor: pointer;
  color: red;
}
.app-header {
  display: flex;
}
.app-header span {
}
.app-header .header-left {
  flex: 1;
  text-align: center;
}
.app-header .header-left i {
  color: #fff;
}
.app-header .header-mid {
  flex: 6;
  text-align: center;
}
.app-header .header-right {
  flex: 1;
}
.app-header .header-right ul{
  position: absolute;
    right: 20px;
    background: #fff;
    display: none;
}
.app-header .header-right ul li{
    width: 100px;
    line-height: 25px;
    color: #000;
    padding: 5px;
    font-size: 14px;
}
.app-footer{
  font-size: 14px ;
  padding-bottom: 10px; 
}
.app-footer i{
  color: #fff;
}
.app-footer p{
  line-height: 26px;
}
.app-buttom{
  font-size: 14px
}
.app-buttom li{
    display: flex;
  line-height: 40px;
  height: 40px;
}
.app-buttom li span {
  flex: 1;
  text-align: center;
}
.xf{
  width: 45px;
  height: 30px;
  margin: 0px 20px 0px 10px;
  border: 1px solid #fff;
  border-radius: 25%;
  text-align: center;
  line-height: 30px;
  
}
</style>