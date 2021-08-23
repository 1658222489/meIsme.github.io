<template>
    <el-button @click="login">默认按钮</el-button>
    <el-button @click="sum++">求和</el-button>
      <h2>{{person}}</h2>
    <el-button @click="addSex">添加性别</el-button>

</template>

<script>
import {reactive, onMounted,toRefs,watch} from 'vue'
import { useStore} from 'vuex';
import {useRoute} from 'vue-router';

export default {
  name: 'Home',
    setup(){
        let store = useStore();
        const data = reactive({
            userName:'张三',
            sum:0,
            person:{name:'张三',age:18}
        });
       const login = () =>{
           console.log(store);
           store.dispatch('userLogin',{name:data.userName,sex:'男'}).then(res => {
               console.log(res);
           })
       };
       const addSex = () => {
           console.log(data);
           console.log(data.person);
           data.person.sex = '男';
       };
       onMounted(() =>{
           console.log(store);
           console.log(useRoute());
       });
       watch(()=>data.sum,(newValue,oldValue)=>{
           console.log(newValue);
           console.log(oldValue);
       });
        return {
            addSex,
           login,
            ...toRefs(data)
        }
    }
}
</script>
