<template>
  <div>
    <el-form ref="from" label-width="50px">

    <el-form-item label="账号:">
    <!--<label>账号:-->
      <el-input placeholder="请输入账号" v-model="account" suffix-icon="el-icon-mobile-phone"></el-input>
    <!--</label>-->
    </el-form-item>

    <el-form-item label="密码:">
    <!--<label>密码:-->
      <el-input type="password" placeholder="请输入密码" v-model="password" show-password></el-input>
      </el-form-item>
    <!--</label>-->

      <el-button type="primary" @click="reg">登陆</el-button>

      <el-button>注册</el-button>


    </el-form>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    data() {
      return {
        account: '',
        password: '',
        form: '',
      }
    },
    methods: {
      reg() {
        // 点击跳转
        this.$router.push('/home/list')
      },
    }
  }
</script>

<style scoped>

</style>
