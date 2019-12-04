<template>
  <div class="chagebox safebox show">
	<div class="logo"><img src="../../assets/logo.png" alt=""></div>
	<div class="title">修改密码</div>
	<ul class="from">
		<li>
			<i class="icon"><img src="../../assets/phone.png" alt=""></i><input type="text" onkeyup="this.value=this.value.replace(/\D/g,'')" class="phone" placeholder="请输入手机号" autocomplete="off">
		</li><li>
		<i class="icon"><img src="../../assets/checkcode.png" alt=""></i><input class="checkcode" type="text" placeholder="请输入验证码" autocomplete="off"><a href="javascript:;" class="checkcodebtn">发送验证码</a>
	</li><li>
		<i class="icon"><img src="../../assets/password.png" alt=""></i><input type="password" class="password" placeholder="请输入新密码" autocomplete="off">
	</li>
	</ul>
	<a href="javascript:;" class="btn">确定</a>
	<ul class="other">
		<li><a  @click="goRegister">注册账号</a></li><li><a  @click="goLogin">登录</a></li>
	</ul>

</div>
</template>

<script>
export default {
  name: 'change',
  data () {
    return {
    }
  },
   methods:{
	  goRegister(){
		   this.$router.push('/register');
	  },
	  goLogin(){
		   this.$router.push('/login');
	  }
  }
}
</script>

<style scoped>
.safebox .from li .checkcode {
    width: 124px;
}
</style>