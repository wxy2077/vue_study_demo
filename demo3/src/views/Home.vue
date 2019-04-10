<template>
    <div class="home">

        <img alt="Vue logo" src="../assets/logo.png">

        <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->

        <ListCate></ListCate>
        <div v-html="message">
        </div>

    </div>
</template>

<script>
    // @ is an alias to /src
    // import HelloWorld from '@/components/HelloWorld.vue'
    import ListCate from '../components/ListCate'
    export default {
        name: 'home',
        data() {
            return {
                message: "<p>123<h1>Title</h1><img src='https://www.baidu.com/img/bd_logo1.png'></p>",

            }
        },
        components: {
            // HelloWorld
            ListCate
        },
    }

</script>
