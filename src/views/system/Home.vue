<template>
    <el-button @click="login">默认按钮</el-button>
    <el-button @click="sum++">求和</el-button>
    <h2>{{person}}</h2>
    <el-button @click="addSex">添加性别</el-button>

</template>

<script>
    import {reactive, onMounted, toRefs, watch} from 'vue'
    import {useStore} from 'vuex';
    import {useRoute} from 'vue-router';

    export default {
        name: 'Home',
        setup() {
            let store = useStore();
            const data = reactive({
                userName: '张三',
                sum: 0,
                person: {name: '张三', age: 18}
            });
            const routs = [
                {path: '1', id: 1, name: '1', uid: 0},
                {path: '11', id: 11, name: '11', uid: 1},
                {path: '111', id: 111, name: '111', uid: 11},
                {path: '112', id: 112, name: '112', uid: 11},
                {path: '2', id: 2, name: '2', uid: 0},
                {path: '21', id: 21, name: '21', uid: 2},
                {path: '22', id: 22, name: '22', uid: 2},
                {path: '211', id: 211, name: '211', uid: 21},
                {path: '221', id: 221, name: '221', uid: 22},
            ];
            const getRouter = (data) => {
                let oneLev = data.filter(data => data.uid === 0);
                for (let item of oneLev) {
                    getRouterList(item, item.id);
                }
                console.log('oneLev',oneLev);
            };
            const getRouterList = (item, id) => {
                for (let obj of routs){
                    if(obj.uid === id){
                        item.children = [];
                        item.children.push(obj);
                        if(obj.uid){
                            getRouterList(obj,obj.id)
                        }
                    }
                }
            };
            const login = () => {
                console.log(store);
                store.dispatch('userLogin', {name: data.userName, sex: '男'}).then(res => {
                    console.log(res);
                })
            };
            const addSex = () => {
                console.log(data);
                data.person.sex = '男';
                console.log(data.person);
            };
            onMounted(() => {
                getRouter(routs);
                console.log(store);
                console.log(useRoute());
            });
            watch(() => data.sum, (newValue, oldValue) => {
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
