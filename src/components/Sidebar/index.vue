<template>
<!--    导航栏的顶部-->
  <el-affix class="el-affix-Cursor" :z-index="1200" style="" @click="gotoHome">
    <div>
      <span>vue3练习</span>
    </div>
  </el-affix>
  <el-menu
    :default-active="route.path"
    class="el-menu-vertical-demo"
    active-text-color="#ffd04b"
    background-color="#545c64"
    text-color="#fff"
    :unique-opened="true"
    router>
<!--      导航组件-->
      <Sidebar :routerList="routers"></Sidebar>
  </el-menu>
</template>

<script>
    import Sidebar from '@/components/Sidebar/sidebar.vue'
    import {reactive, onMounted, toRefs} from 'vue'
    import {useRouter,useRoute} from 'vue-router'
    export default {
        setup() {
            const routers = useRouter();
            const data = reactive({
                routers:routers.options.routes,
                route: useRoute(),
            });
            const gotoHome = () => {
                routers.push({
                    path:'/home'
                });
            };
            const handleOpen = (key, keyPath) => {
                console.log(key, keyPath);
            };
            onMounted(() => {

                },
            );
            return {
                handleOpen,
                gotoHome,
                ...toRefs(data)
            };
        },
        components:{
            Sidebar
        }
    };
</script>
<style lang="less" scoped>
  .el-affix{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    background-color: cadetblue;
    cursor: pointer;

  }
</style>
