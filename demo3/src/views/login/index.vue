<template>
    <div class="login-container">

        <el-form class="login-form" label-width="80px">
            <el-form-item label="账号:">
                <el-input placeholder="请输入账号" v-model="account" suffix-icon="el-icon-mobile-phone"></el-input>
            </el-form-item>

            <el-form-item label="密码:">
                <el-input type="password" placeholder="请输入密码" v-model="password" show-password></el-input>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="onSubmit">登陆</el-button>
                <el-button @click="clearCk">注册</el-button>
            </el-form-item>

        </el-form>
    </div>
</template>

<script>
    // import api from '@/api/index'   // @ 表示 src目录
    import api from '../../api/index'
    import utils from '../../utils/index'

    export default {
        name: 'index',
        data() {
            return {
                account: "",
                password: "",
            }
        },
        methods: {
            onSubmit() {
                api.user.login({
                    "account": this.account,
                    "password": this.password,
                }).then(({data}) => {
                    //  判断状态码
                    if(data.code === 200) {
                        console.log("模拟登陆成功!");
                        utils.cookie.setCookie(this.account, this.password, 1)
                    }else{
                        console.log("登陆失败!!!");
                    }
                }).catch(({error}) => {
                    alert("登陆异常! 请稍后再试");
                    console.log("Login Error", error)
                })
            },
            clearCk(){
                utils.cookie.delCookie(this.account)
            }

        },

    }
</script>

<style lang="scss">
    .login-container {
        /*background-color: aquamarine;*/
        width: 400px;
        margin: 0 auto;

        text-align: center;
        display: inline-block;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        border-radius: 4px;

        /*margin-top: 50px;*/
        /*vertical-align: middle;*/
    }

    .login-container .login-form {
        /*登陆文本框样式*/
        margin-right: 50px;
        margin-top: 20px;
    }


</style>
