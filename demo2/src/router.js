import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import Admin from '@/views/Admin'
import Login from './views/Login.vue'
import Home from '@/views/Home'    // @ 相当于 /src
import List from '@/views/List'
import User from '@/views/User'
import Add from '@/views/Add'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'login',   // 用于跳转 <router-link :to="{name: 'login'}">去登陆</router-link>
            component: Login
        },
        {
            path: '/admin',
            name: 'admin',
            component: Admin
        },
        {
            path: '/add',
            name: 'add',
            component: () => import(/* webpackChunkName: "navigator" */ '@/views/Add')
        },


        {
            path: '/home',
            name: 'home',
            component: Home,
            children: [
                {
                    path: 'list',
                    name: 'list',
                    // component: List  懒加载
                    component: () => import(/* webpackChunkName: "navigator" */ '@/views/List')
                }, {

                    path: 'user',
                    name: 'user',
                    component: () => import(/* webpackChunkName: "navigator" */ '@/views/User')
                }

            ],
        }
    ]
})
