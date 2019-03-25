<template>
  <div>
    <ul>

      <li v-for="(info, index) in article_info" :key="index">
        <div style="box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)">
          <h3>{{ info.title }}</h3>
          <div>{{ info.content }}</div>
        </div>
      </li>

    </ul>
  </div>
</template>

<script>
  import store from '@/store'

  export default {
    name: 'List',
    store,
    data() {
      return {
        article_info: []
      }
    },
    mounted() {
      this.article_info = store.state.lists;
    }
  }
</script>

<style scoped>
  ul, li {
    padding: 0;
    margin: 0;
    list-style: none
  }


</style>
