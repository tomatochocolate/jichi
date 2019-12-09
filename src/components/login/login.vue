<template>
  <div class="loginbox safebox show">
    <div class="logo">
      <img src="../../assets/logo.png" alt />
    </div>
    <div class="title">登录机翅膀</div>
    <ul class="from">
      <li>
        <i class="icon">
          <img src="../../assets/phone.png" alt />
        </i>
        <input
          type="text"
          onkeyup="this.value=this.value.replace(/\D/g,'')"
          class="phone"
          placeholder="请输入手机号"
          autocomplete="off"
          v-model="userName"
        />
      </li>
      <li>
        <i class="icon">
          <img src="../../assets/password.png" alt />
        </i>
        <input
          type="password"
          class="password"
          placeholder="请输入密码"
          autocomplete="off"
          v-model="passWord"
        />
      </li>
    </ul>
    <a href="javascript:;" class="btn" @click="getData">登录</a>
    <ul class="other">
      <li>
        <a @click="goRegister">注册账号</a>
      </li>
      <li>
        <a @click="goChange">忘记密码？</a>
      </li>
    </ul>
    <div class="info">
      新用户免费体验
      <span>30分钟</span>
      <a @click="goRegister">马上注册&gt;</a>
    </div>
  </div>
</template>
<script>
import Vuex from "vuex";
import axios from "axios";
import store from "../../store/store";
import common from "../common/common";

export default {
  name: "login",
  data() {
    return {
      userName: "",
      passWord: ""
    };
  },
  methods: {
    goRegister() {
      this.$router.push("/register");
    },
    goChange() {
      this.$router.push("/change");
    },
    getData() {
      // localStorage.setItem("Flag", 'isLogin');
      // this.$store.dispatch("userLogin", true);
      //   this.$axios
      //     .post("/xxx/login", { user: name, password: pwd })
      //     .then(data => {
      //       //登录失败,先不讨论
      //       if (data.data.status != 200) {
      //         //iViewUi的友好提示
      //         this.$Message.error(data.data.message);
      //         //登录成功
      //       } else {
      //         //设置Vuex登录标志为true，默认userLogin为false
      //         this.$store.dispatch("userLogin", true);
      //         //Vuex在用户刷新的时候userLogin会回到默认值false，所以我们需要用到HTML5储存
      //         //我们设置一个名为Flag，值为isLogin的字段，作用是如果Flag有值且为isLogin的时候，证明用户已经登录了。
      //         localStorage.setItem("Flag", "isLogin");
      //         //iViewUi的友好提示
      //         this.$Message.success(data.data.message);
      //         //登录成功后跳转到指定页面
      //         this.$router.push("/home");
      //       }
      //     });
      this.$router.push("/home");
      var phone = $(".loginbox .phone").val();
      if (phone.length <= 0) {
        alert("登录时，手机号码，请填写");
        return false;
      }
      if (!/^1[3456789]\d{9}$/.test(phone)) {
        alert("登录时，手机号码，有误，请重新填写");
        return false;
      }
      var password = $(".loginbox .password").val();
      if (password.length <= 0) {
        alert("登录时，登录密码，请填写");
        return false;
      }
      common.sengAjax("/login", {
        channel: common.getChannelId(),
        phone: phone,
        password: password
      });
    }
  },
  created: function() {
	let getFlag = localStorage.getItem("Flag");
	if(getFlag === "isLogin"){
  
      //设置vuex登录状态为已登录
	  store.state.isLogin = true
	  this.$router.push("/home");
	  }
  }
};
</script>

<style scoped>
.icon {
  margin-right: 6px !important;
}
</style>


