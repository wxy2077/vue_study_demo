/*
* url 前缀处理
* */
import config from '../config/config'
export default  function (actionName) {

    return config.development + actionName   // 凭接请求的url
}