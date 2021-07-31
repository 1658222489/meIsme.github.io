import axios from '@/lib/request'

export const login = (data) =>{
    return axios.request({
        url: 'login',
        data: data,
        method: 'post'
    })
}
