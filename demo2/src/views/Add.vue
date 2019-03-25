<template>
  <div>

    <p>标题</p>
    <el-input type="textarea" v-model="title" placeholder="请输入标题"></el-input>

    <p>内容</p>
    <el-input type="textarea" v-model="content" placeholder="请输入内容"></el-input>

    <p>
      <el-button type="primary" @click="add()">确认添加</el-button>
    </p>

  </div>
</template>

<script>
  import store from '@/store'

  export default {
    name: 'Add',
    store,
    data() {
      return {
        title: '',
        content: '',
      }
    },
    methods: {
      add() {
        store.commit('addItem',{
          "title": this.title,
          "content": this.content,
        });
        this.$router.push('/home/list')
      }
    }
  }
</script>

<style scoped>

</style>
