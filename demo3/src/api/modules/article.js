import request from '../requests'
import requestUrl from '../requestUrl'

export function listCate(params) {
    return request({
        url: requestUrl("/api/v1/article/get/cate"),
        method: 'get',
        data: params
    })
}