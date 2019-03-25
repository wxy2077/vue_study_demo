<template>
  <div>

    <!--<el-col :xs="8" :sm="6" :md="4" :lg="3">-->
    <!--<div class="grid-content bg-purple">-->
    <!--<router-link :to="{name: 'list'}">新闻列表</router-link>-->
    <!--</div>-->
    <!--</el-col>-->
    <el-row>
      <el-col :span="12">
        <div class="grid-content bg-purple">
          <router-link :to="{name: 'list'}"><el-button size="medium">文章列表</el-button></router-link>
        </div>
      </el-col>

      <el-col :span="12">
        <div class="grid-content bg-purple-light">
          <router-link :to="{name: 'user'}"><el-button size="medium">个人中心</el-button></router-link>
        </div>
      </el-col>
    </el-row>

    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data() {
      return {}
    },

  }
</script>

<style scoped>

</style>
