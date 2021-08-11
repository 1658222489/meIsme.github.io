<template>
  <el-affix class="el-affix-Cursor" :z-index="1200" style="" @click="gotoHome">
    <div>
      <span>vue3练习</span>
    </div>
  </el-affix>
  <el-menu
    :default-active="$route.path"
    class="el-menu-vertical-demo"
    active-text-color="#ffd04b"
    background-color="#545c64"
    text-color="#fff"
    :unique-opened="true"
    @open="handleOpen"
    router>
    <template v-for="(item,index) in routers" :key="index">
      <el-submenu v-if="item.children && item.children.length > 0 && item.isShow" :index="item.path">
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
      <el-menu-item v-else-if="item.isShow" :index="item.path">
        <span>{{item.name}}</span>
      </el-menu-item>
    </template>
  </el-menu>
</template>

<script>
    import {reactive, onMounted, toRefs} from 'vue'
    import {useRouter} from 'vue-router'
    export default {
        setup() {
            const routers = useRouter();
            const data = reactive({
                routers: [],
                routerValue: '',
            });
            const gotoHome = () => {
                console.log(routers);
                routers.push({
                    path:'/home'
                });
            };
            const handleOpen = (key, keyPath) => {
                console.log(key, keyPath);
            };
            onMounted(() => {
                data.routers = routers.options.routes;
                },
            );
            return {
                handleOpen,
                gotoHome,
                ...toRefs(data)
            };
        },
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
