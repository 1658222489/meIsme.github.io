import axios from "axios";
import app from '@/main';
const logout = () =>{
    app.config.globalProperties.$router.push({ name:'login' });
};

const respFilter = res =>{
    let message = app.config.globalProperties.$message;
    let msg = {"content":res.data.message,"duration": 5};
    let code = res.data.code;
    let method = res.config.method;
    if (method){
        method = method.toLowerCase();
    }
    if((method !== 'options') && code === 'timeout'){
        logout()
    }else if(code === 'Unauthorized'){
        message.error(msg);
    }else if(code === 'system_error'){
        message.error(msg);
    }
    if(res.data.success === false){
        message.error(msg);
    }
    return true;
};

class HttpRequest {
    constructor (baseUrl = baseURL) {
        this.baseUrl = baseUrl;
        this.queue = {}
    }
    getInsideConfig () {
        return {
            baseURL: this.baseUrl,
            headers: {
                token: localStorage.getItem('token') || '',
            }
        }
    }

    interceptors (instance) {
        // 请求拦截
        instance.interceptors.request.use(config => {
            return config
        }, error => {
            respFilter(res);
            return Promise.reject(error)
        })
        // 响应拦截
        instance.interceptors.response.use(
            (res) => {
            respFilter(res);
            const { data, status, headers } = res;
            return { data, status, headers }
        },
            error => {
                console.log(app);

                return Promise.reject(error)
        })
    }
    request (options) {
        const instance = axios.create();
        options = Object.assign(this.getInsideConfig(), options);
        this.interceptors(instance, options.url);
        return instance(options)
    }
}
export default HttpRequest
