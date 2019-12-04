<template>
    <div class="regbox safebox show">
	<div class="logo"><img src="../../assets/logo.png" alt=""></div>
	<div class="title">手机号注册</div>
	<ul class="from">
		<li>
			<i class="icon"><img src="../../assets/phone.png" alt=""></i><input type="text" onkeyup="this.value=this.value.replace(/\D/g,'')" class="phone" placeholder="请输入手机号" autocomplete="off">
		</li><li>
		<i class="icon"><img src="../../assets/password.png" alt=""></i><input type="password" class="password" placeholder="请输入密码" autocomplete="off">
	</li><li>
		<i class="icon"><img src="../../assets/checkcode.png" alt=""></i><input class="checkcode" type="text" placeholder="请输入验证码" autocomplete="off"><a href="javascript:;" class="checkcodebtn">发送验证码</a>
	</li>
	</ul>
	<a href="javascript:;" class="btn">注册</a>
	<ul class="other">
		<li><a  @click="goLogin">登录</a></li><li><a  @click="goChange">忘记密码？</a></li>
	</ul>
	<div class="info">
		新用户免费体验<span>30分钟</span><a >马上登录&gt;</a>
	</div>
</div>
</template>

<script>
export default {
  name: 'register',
  data () {
    return {
    }
  },
  methods:{
	  goLogin(){
		   this.$router.push('/login');
	  },
	  goChange(){
		   this.$router.push('/change');
	  }
  }
}
</script>

<style scoped>
.safebox .from li .checkcode {
    width: 124px;
}
</style>