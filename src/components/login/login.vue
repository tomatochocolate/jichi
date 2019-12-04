<template>
    <div class="loginbox safebox show">
	<div class="logo"><img src="../../assets/logo.png" alt=""></div>
	<div class="title">登录机翅膀</div>
	<ul class="from">
		<li>
			<i class="icon"><img src="../../assets/phone.png" alt=""></i><input type="text" onkeyup="this.value=this.value.replace(/\D/g,'')" class="phone" placeholder="请输入手机号" autocomplete="off">
		</li>
		<li>
			<i class="icon"><img src="../../assets/password.png" alt=""></i><input type="password" class="password" placeholder="请输入密码" autocomplete="off">
		</li>
	</ul>
	<a href="javascript:;" class="btn" @click="getData">登录</a>
	<ul class="other">
		<li><a  @click="goRegister">注册账号</a></li><li><a   @click="goChange">忘记密码？</a></li>
	</ul>
	<div class="info">
		新用户免费体验<span>30分钟</span> <a href="javascript:show('.regbox');">马上注册&gt;</a>
	</div>
</div>
</template>
<script>
export default {
  name: 'login',
  data () {
    return {
		
    }
  },
  methods:{
	  goRegister(){
			this.$router.push('/register');
		
	  },
	  goChange(){
		   this.$router.push('/change');
	  },
	  getData() {
	//   localStorage.setItem("islogin", 'true');
	this.$router.push('/home');
	},
	
  }
}
</script>



