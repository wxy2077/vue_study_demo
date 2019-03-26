<template>
    <li @click="del_item(index)">
        <div style="box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)">
            {{ item }} -- {{ index }}
        </div>
    </li>
</template>

<script>
    export default {
        name: 'TodoItem',
        props: ["item", "index"],   // props接收父组件的信息
        data() {
            return {}
        }, methods: {
            del_item(index){
                // delete 父组件需要监听
                this.$emit("delete", index)
            }
        }
    }
</script>

<style scoped>

</style>