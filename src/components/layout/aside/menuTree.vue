<template>
  <div>
    <template v-for="(child, index) in menuData">
      <el-submenu v-if="child.children && child.children.length > 0" :index="child.path" :key="index">
        <template slot="title">
          <i :class="child.icon?child.icon:[fa,fa-file]"></i>
          <span slot="title">{{ child.name }}</span>
        </template>
        <menu-tree :menuData="child.children"></menu-tree>
      </el-submenu>

      <el-menu-item v-else-if="!child.hidden" :index="child.path" :key="index">
        <i :class="child.icon?child.icon:[fa,fa-file]"></i>
        <span slot="title">{{ child.name}}</span>
      </el-menu-item>
    </template>
  </div>
</template>

<script>
export default {
  name: "menuTree",
  props: ["menuData"]
};
</script>

<style scoped>
</style>
