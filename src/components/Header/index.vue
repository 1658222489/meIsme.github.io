<template>
  <div class="header_main">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <template v-for="(item,index) in $route.matched" :key="index" >
        <el-breadcrumb-item :to="item.path" v-if="item.name !== '首页'">
          {{item.name}}
        </el-breadcrumb-item>
      </template>

    </el-breadcrumb>
  </div>
</template>

<script>
  import {useRouter} from 'vue-router';
  import {reactive, onBeforeMount, toRefs} from 'vue'
export default {
  setup() {
      const router = useRouter();
      const data = reactive({
        router:''
      });
      onBeforeMount(() => {
          console.log(router);
          data.router = ''
      });

    return {

      ...toRefs(data)
    };
  },
};
</script>
<style lang="less">

</style>
