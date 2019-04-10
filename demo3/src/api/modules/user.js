import request from '../requests'
import requestUrl from '../requeestUrl'

export function login(params) {
    return request({
        url: requestUrl("/api/v1/user/login"),
        method: 'post',
        params,    // 注意post 请求携带参数 不需要传给data
    })
}