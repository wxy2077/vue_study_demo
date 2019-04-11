<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!--调用组件-->
    <list-cate></list-cate>
  </div>
</template>

<script>
// @ is an alias to /src
import ListCate from '../components/ListCate'

export default {
  name: 'home',
  components: {
    "list-cate": ListCate,   // 组件注册重命名
  }
}
</script>
