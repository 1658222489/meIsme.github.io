<template>
  <div>
    <template v-for="(routeItem, routeIndex) in item">
      <el-menu-item
        :key="routeIndex"
        v-if="routeItem.app.length <= 0"
        :index="resolvePath(routeItem.path)"
      >
        <i :class="routeItem.meta.icon || ''"></i>
        <template #title>{{ routeItem.name }}</template>
      </el-menu-item>
      <el-submenu
        class="submenu-title"
        :key="routeIndex"
        v-if="routeItem.children.length > 0"
        :index="routeItem.path"
      >
        <template #title>
        <i :class="routeItem.meta.icon || ''"></i>
          <span>{{ routeItem.name }}</span>
        </template>
        <el-menu-item-group>
          <sidebar
            :item="routeItem.children"
            :basePath="basePath.length > 0 ? basePath + '/' + routeItem.path : routeItem.path"
          ></sidebar>
        </el-menu-item-group>
      </el-submenu>
    </template>
  </div>
</template>
<script>
import path from "path";
export default {
  name: "sidebar",
  props: {
    item: Object,
    basePath: String
  },
  setup(props) {
    function resolvePath(routePath) {
      let hasBasePath = props.basePath ? props.basePath : "";
      return path.resolve(hasBasePath, routePath);
    }
    return {
      resolvePath: resolvePath,

    };
  }
};
</script>
<style lang="less">

</style>
