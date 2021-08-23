<template>
    <!--    递归显示导航菜单-->
    <div v-for="(item) in routerArray" :key="item.path">
        <!--只有一级菜单-->
        <el-menu-item v-if="!item.children && item.isShow" :index="item.path">
            <!--图标-->
            <i :class="item.icon"></i>
            <!--标题-->
            <span>{{item.name}}</span>
        </el-menu-item>
        <!--有多级菜单-->
        <el-submenu v-if="item.children && item.isShow" :index="item.path">
            <template #title>
                <i :class="item.icon"></i>
                <span> {{item.name}}</span>
            </template>
            <!--递归组件，把遍历的值传回子组件，完成递归调用-->
            <Sidebar :routerList="item.children"></Sidebar>
        </el-submenu>
    </div>
</template>

<script>
    import {reactive, onBeforeMount, toRefs} from 'vue'

    export default {
        name: "sidebar",
        props: {
            routerList: {
                type: Array,
            },
        },
        setup(props) {
            const data = reactive({
                routerArray: props.routerList
            });
            onBeforeMount(() => {

            });
            return {
                ...toRefs(data)
            }
        }
    }
</script>

<style lang="less" scoped>

</style>
