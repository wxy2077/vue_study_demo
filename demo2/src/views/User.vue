<template>
  <div>
    <img src="../assets/logo.png">
    <p>Welcome to personal center!</p>
    <router-link :to="{name: 'add'}">
    <el-button type="primary">添加文章</el-button>
    </router-link>

    <router-link :to="{name: 'login'}">
      <el-button>退出</el-button>
    </router-link>

    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'User',
    data() {
      return {}
    }
  }
</script>

<style scoped>

</style>
