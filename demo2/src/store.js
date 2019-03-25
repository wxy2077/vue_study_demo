import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        lists: [
            {"title":"test title1", "content": "test content1111111111111111111111模拟数据模拟数据模拟数据"},
            {"title":"test title2", "content": "test content2222222222222222222222模拟数据模拟数据模拟数据"},
            {"title":"test title3", "content": "test content3333333333333333333333模拟数据模拟数据模拟数据"},
        ],
        count: 0
    },
    mutations: {
        addItem (state, value) {
            state.lists.push(value);
        },
    },
    actions: {

    }
})
