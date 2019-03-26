<template>
    <div>
        输入: <el-input placeholder="请输入" v-model="info" style="width:50%"></el-input>
        <el-button type="primary" @click="add_item(info)">添加</el-button>
        <p>单页面的实现</p>
        <ul>
            <li v-for="(info, index) in list_info" :key="index" @click="del_item(index)" >
                <div style="box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)">
                    <h3>{{ info }}</h3>
                    下角标：{{ index }}
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'Admin',
        data() {
            return {
                info: '',
                list_info: [],
            }
        },
        methods:{
            add_item(info){
                this.list_info.push(info);
                this.info = '';
            },
            del_item(index){
                this.list_info.splice(index, 1)
            }
        },

    }
</script>

<style scoped>
    ul, li {
        padding: 0;
        margin: 0;
        list-style: none
    }
</style>