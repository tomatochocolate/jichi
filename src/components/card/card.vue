<template>
    <div class="help" id="con">
	<ul>
		<li>
			<div style="font-weight:bold;font-size:12px">请输入的卡序列号：</div>
			<div style="margin-top:15px">
				<input id="cardSerial" placeholder="卡序列号" type="text" style="min-width:265px;width:100%;height:28px;padding:2px 5px;border:1px solid #999;letter-spacing:2px;font-size:12px"/>
			</div>
			<div style="margin-top:15px"><a href="javascript:;" class="btn" style="padding:5px 10px;font-size:12px">提交充值</a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="buy.html" style="font-size:12px;color:blue;text-decoration:underline">返回</a></div>
		</li>
	</ul>
</div>
</template>

<script>
export default {
  name: 'card',
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