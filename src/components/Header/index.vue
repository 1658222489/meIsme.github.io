<template>
    <div class="headerMain">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <template v-for="(item,index) in route.matched" :key="index">
                <el-breadcrumb-item :to="item.path" v-if="item.name !== '首页'">
                    {{item.name}}
                </el-breadcrumb-item>
            </template>
        </el-breadcrumb>
        <el-image :src="src" fit="cover"></el-image>
    </div>
</template>

<script>
    import {useRoute} from 'vue-router';
    import {reactive, onBeforeMount, toRefs} from 'vue'
    import img from '@/assets/img/logo.png'
    export default {
        setup() {
            const data = reactive({
                src:img,
                route:useRoute(),
            });
            onBeforeMount(() => {

            });

            return {
                ...toRefs(data)
            };
        },
    };
</script>
<style lang="less" scoped>
    .headerMain {
        height: 100%;
        width: 100%;
        .displayAlignJustify();
        .el-image{
            width: 50px;
            height: 50px;
            background-color: cadetblue;
            border-radius: 50%;
        }
    }
</style>
