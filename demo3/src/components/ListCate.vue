<template>
    <div class="ListCate">
        <h1>这是listCate标签</h1>
        <!--<button type="button" @click="loadCate()">按钮</button>-->
        <ul>
            <li v-for="(cate, index) in CateInfo">
                {{ cate.cate_name }}
            </li>
        </ul>
    </div>
</template>

<script>
    import api from '../api/index'

    export default {
        name: 'ListCate',
        // props: ['CateInfo'],
        data() {
            return {
                CateInfo: ''
            }
        },
        methods: {
            //
            listCate() {
                // 发送http请求
                api.article.listCate().then(({data}) => {
                    //  判断状态码
                    if (data.code === 200) {
                        // this.CateInfo = data;
                        console.log(data, '1111');
                        this.CateInfo = data.cate_list
                    }
                }).catch(({error}) => {
                    console.log("error: ", error)
                })
            },
        },
        //
        created() {
            this.listCate()
        }
    }
</script>

<style scoped>

</style>