<template>
  <div class="home">
    <el-button @click="login">默认按钮</el-button>
  </div>
</template>

<script>
// @ is an alias to /src
import {reactive, onMounted} from 'vue'
import { useStore} from 'vuex';

export default {
  name: 'Home',
    setup(){
        let store = useStore();
        const data = reactive({
            userName:'张三',
        });
       const login = (ele) =>{
           console.log(store);
           console.log(ele);
           store.dispatch('userLogin',{name:data.userName,sex:'男'})
       };
       onMounted(() =>{
           console.log(data.userName);
       });
        return {
           login,
            data
        }
    }
}
</script>
