<template>
    <el-container>
        <el-aside width="200px">
            <el-menu
                :default-active="$route.path"
                class="el-menu-vertical-demo"
                active-text-color="#ffd04b"
                background-color="#545c64"
                text-color="#fff"
                router>
                <el-affix :z-index="1200" style="height: 60px;background-color: cadetblue">
                    <div>
                        <span>
                            <span>vue3联系</span>
                        </span>
                    </div>
                </el-affix>
                <template v-for="(item,index) in routers" :key="index">
                    <el-submenu v-if="item.children && item.isShow" :index="item.path">
                        <template #title>
                            <i :class="item.icon"></i>
                            <span>{{item.name}}</span>
                        </template>
                        <el-menu-item v-for="child in item.children" :key="child" :index="child.path">
                            <i :class="child.icon"></i>
                            <template #title>
                                {{child.name}}
                            </template>
                        </el-menu-item>
                    </el-submenu>
                    <el-menu-item v-else-if="item.isShow"  :index="item.path">
                        <span>{{item.name}}</span>
                    </el-menu-item>
                </template>

            </el-menu>
        </el-aside>
        <el-container>
            <el-header style="background-color: blue">Header</el-header>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>


</template>

<script>
    import {reactive, onMounted,toRefs} from 'vue'
    import {useRouter} from 'vue-router'
    export default {
        setup() {
            const routers = useRouter();
            const data = reactive({
                routers:[],
                routerValue: '',
            });
            const handleOpen = (key, keyPath) => {
                console.log(key);
                console.log(keyPath);
                data.routerValue = key
            };
            const handleClose = (key, keyPath) => {
                console.log(key);
                console.log(keyPath);

            };
            onMounted(() => {
                let array = routers.options.routes;
                let router = [];
                    array.forEach(item =>{
                    if(item.children){
                        router = [...router,...item.children]
                    }
                });
                data.routers = router;
                console.log(router);
                },
            );
            return {
                handleOpen,
                handleClose,
                ...toRefs(data)
            };
        },
        components: {}
    };
</script>
<style lang="less" scoped>
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        min-height: 400px;
    }

</style>
