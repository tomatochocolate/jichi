<template>
  <div>
    <template>
      <Menu active-name="1-1" :open-names="['0']">
        <Submenu name="1">
          <template slot="title">
            <Icon type="ios-analytics" />{{phone}}
          </template>
          <MenuItem name="1-1" to="/order" >我的订单</MenuItem>
          <MenuItem name="1-2" to="/buy">续费充值</MenuItem>
          <MenuItem name="1-3" to="/help">使用帮助</MenuItem>
          <MenuItem name="1-4" to="/feedback">意见反馈</MenuItem>
          <MenuItem name="1-5" to="/card">卡密充值</MenuItem>
          <MenuItem name="1-6" @click.native='outLogin'>退出登录</MenuItem>
        </Submenu>
      </Menu>
    </template>
  </div>
</template>



<script>
export default {
  name: "home",
  data() {
    return {
      phone:""
    };
  },
  methods: {
 
    outLogin() {
      console.log(123);
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
.ivu-menu-submenu{
  border-bottom: 1px solid #ccc;
}

</style>