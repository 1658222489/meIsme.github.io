<template>
  <div>
    <el-container>
<!--        左侧导航栏-->
      <el-aside width="200px">
<!--          左侧导航栏组件-->
          <Sidebar></Sidebar>
      </el-aside>
      <el-container>
<!--          头部-->
        <el-header style="background-color: blue">
<!--            头部组件-->
          <Header></Header>
        </el-header>
<!--          主体-->
        <el-main>
<!--            路由 占位符-->
          <Menu></Menu>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
    import Header from '@/components/Header/index.vue'
    import Sidebar from '@/components/Sidebar/index.vue'
    import Menu from '@/components/menus/menu.vue'
    export default {
        setup() {

        },
        components: {
            Sidebar,
            Header,
            Menu
        }
    };
</script>
<style lang="less" scoped>
</style>
