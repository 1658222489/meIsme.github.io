<template lang="pug">
el-menu(
  class="el-menu-vertical-demo"
  :collapse="state.app.isCollapse"
  :collapse-transition="false"
  router
  :default-active="currentActiveRoute"
  @select="menuSelect"
)
  Sidebar(:item="routes" basePath="")
</template>

<script lang="ts">
import { useStore } from 'vuex';
// import {useRoute} from "vue-router";
import {ref} from 'vue';
import Sidebar from './Sidebar.vue';

// import {useDynamicRoutesHook} from '@/composition/useTagViewApi';
import {useDynamicRoutesHook} from "../../../lib/useTagViewApi";

export default {
  props: ['routes'],
  setup () {
    const store = useStore();
    // const route = useRoute();
    const {dynamicRouteTags} = useDynamicRoutesHook();

    let currentActiveRoute = ref('');

    // watch(route, (newVal) => {
    //   if(newVal.meta.activePath) {
    //     currentActiveRoute.value = newVal.meta.activePath;
    //   } else {
    //     currentActiveRoute.value = newVal.path;
    //   }
    // });

    function menuSelect(index) {
      let parentPath = '';
      let parentPathIndex = index.lastIndexOf('/');
      if( parentPathIndex > 0) {
        parentPath = index.slice(0, parentPathIndex);
      }
      dynamicRouteTags(index, parentPath);
    }
    return {
      state: store.state,
      menuSelect,
      // variables,
      currentActiveRoute
    };
  },
  components: {
    Sidebar
  }
};
</script>
<style lang="less" scoped>
</style>
