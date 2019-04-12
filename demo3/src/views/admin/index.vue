<template>
    <Editor></Editor>
</template>

<script>
    // 导入富文本编辑器
    import Editor from '../../components/admin/wangEditor'
    export default {
        name: 'index',
        data() {
            return {}
        },
        components:{
            Editor,    //组件注册
        }
    }
</script>

<style scoped>

</style>