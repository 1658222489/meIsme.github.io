<template>
  <div>
    <el-container>
      <el-aside width="200px">
      <Sidebar></Sidebar>
    </el-aside>
      <el-container>
        <el-header style="background-color: blue">
          <Header></Header>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
    import Header from '@/components/Header/index.vue'
    import Sidebar from '@/components/Sidebar/index.vue'
    export default {
        setup() {

        },
        components: {
            Sidebar,
            // Wrapper,
            Header
        }
    };
</script>
<style lang="less" scoped>
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        min-height: 400px;
    }

</style>
