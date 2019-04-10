import axios from 'axios'

/*
* 创建 axios 实例 并初始化
* */
const request = axios.create({
    timeout: 1000 * 10,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json; charset=utf-8'
    }
});

// 返回 request 对象 方便封装接口
export default request