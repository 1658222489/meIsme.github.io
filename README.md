# vue3elementplus

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run dev
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Run your end-to-end tests
```
npm run test:e2e
```

### 项目结构

```
project
---public
---src
------api         后端api|URL|method|head 等等...
------assets      静态资源
------components  首页页面布局
------config      配置文件：后端服务器请求地址
------lib         公共API|FUNCTION
------router      路由文件，路由配置规则见src/router/routers/index.js
------store       vuex文件，在action中有请求method，请求分为三步可极大提高代码重用
------views       组件，组件建议分模块创建文件夹
------app.vue     项目入口文件
------main.js     项目配置文件
---tests
---.browserslitrc项目浏览器文件
---.eslintrc.js  项目规则文件
---package.json  项目插件文件
---vue.config.js 项目配置文件

```
###请求数据
````
    1.import { useStore} from 'vuex';
      setup(){
            ....
            let store = useStore();
            ....
      }
    2.function中使用
      store.dispatch('userLogin',{name:data.userName,sex:'男'}).then(res => {
          console.log(res);
      })
    3在src/store/module/XXX.js中:
        import {login} from "src/api/XXXX";
        在actions中
        userLogin({commit},data){
            return new Promise((resolve, reject) => {
                login(data).then(res => resolve(res)).catch(error => reject(error))
            })
        }
    4.在src/api/XXX.js中
    import axios from '@/lib/request'
  
    export const login = (data) =>{
        return axios.request({
            url: 'login',
            data: data,
            method: 'post'
        })
    }
````
