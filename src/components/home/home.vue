<template>
  <div class="home">
    <template>
      <Menu active-name="1-1" :open-names="['0']">
        <Submenu name="1">
          <template slot="title">
            <Icon type="ios-analytics" />
            {{phone}}
          </template>
          <MenuItem name="1-1" to="/order">我的订单</MenuItem>
          <MenuItem name="1-2" to="/buy">续费充值</MenuItem>
          <MenuItem name="1-3" to="/help">使用帮助</MenuItem>
          <MenuItem name="1-4" to="/feedback">意见反馈</MenuItem>
          <MenuItem name="1-5" to="/card">卡密充值</MenuItem>
          <MenuItem name="1-6" @click.native="outLogin">退出登录</MenuItem>
        </Submenu>
      </Menu>
    </template>
  </div>
</template>



<script>
import Axios from "axios";
export default {
  name: "home",
  data() {
    return {
      phone: ""
    };
  },
  methods: {
    outLogin() {
      Axios({
        url: "http://jcb.jichibang2019.com/api/qt/login", //在线跨域请求
        method: "post", //默认是get请求
        headers: {
          //设置请求头
          "Access-Control-Allow-Origin":"*",
        },
        params: {
          //？search后面的值写在params中
          channel:'GW',
          phone:'13538143602',
          password:'28552599',
        }
      })
        .then(function(val) {
          console.log(val); // axios会对我们请求来的结果进行再一次的封装（ 让安全性提高 ）
        })
        .catch(function(err) {
          console.log(err);
        });
    }
  }
};
</script>

<style scoped>
a {
  width: 100%;
  height: 100%;
  display: block;
  color: #515a6e;
}
a:hover {
  color: #2d8cf0;
}
.ivu-menu-submenu {
  border-bottom: 1px solid #ccc;
}
</style>