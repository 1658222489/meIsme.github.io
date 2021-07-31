<template>
  <div class="header_main">
    <div class="collapseicon">
      <i @click="toggleMenuCollpase()" :class="state.app.isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'"></i>
      <el-breadcrumb separator="/">
        <transition-group name="breadcrumb">
          <el-breadcrumb-item key="/" :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item v-for="(item, index) in routeListConfig.currentRouteList" :key="index">
              <a>{{ item.name }}</a>
          </el-breadcrumb-item>
        </transition-group>
      </el-breadcrumb>
    </div>
    <div class="link-tag">
      <tagsview></tagsview>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { watch, reactive } from "vue";
import tagsview from "../Tagsview/index.vue";
// import {useTheme} from './lib/useThemeApi';
import {useTheme} from "../../../lib/useThemeApi";

export default {
  setup() {
    const themeApi = useTheme();
    const store = useStore();
    const route = useRoute();
    let routeListConfig = reactive({
      currentRouteList: []
    });
    function toggleMenuCollpase() {
      store.commit("TOOGLESIDEBAR");
    }
    watch(
      () => route.path,
      () => {
        routeListConfig.currentRouteList = route.matched;
      }
    );

    return {
      toggleMenuCollpase,
      routeListConfig,
      state: store.state,
      themeApi
    };
  },
  components: {
    tagsview
  }
};
</script>
<style lang="less">

</style>
