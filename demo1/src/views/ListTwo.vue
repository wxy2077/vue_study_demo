<template>
    <div>
        输入:
        <el-input placeholder="请输入" v-model="info" style="width:50%"></el-input>
        <el-button type="primary" @click="add_item(info)">添加</el-button>
        <p>父子组件之间传递以及$emit回调使用</p>
        <ul>
            <todo-item v-for="(info, index) in list_info" :key="index"
                       :item="info"
                       :index="index"
                       @delete="handleDelete"

            ></todo-item>
        </ul>
    </div>
</template>

<script>
    import TodoItem from '@/components/TodoItem.vue'

    export default {
        name: 'ListTwo',
        data() {
            return {
                info: '',
                list_info: [],
            }
        },
        components: {
            "todo-item": TodoItem,
        },
        methods: {
            add_item(item) {
                this.list_info.push(item);
                this.info = ''
            },
            handleDelete(index){
                // 接受子组件过来的参数
                this.list_info.splice(index, 1)
            }

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