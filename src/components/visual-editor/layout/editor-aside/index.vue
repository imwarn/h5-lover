<template>
  <el-tabs tab-position="left" style="height: 200px" class="demo-tabs">
    <el-tab-pane v-for="menu in menuList" :key="menu.id">
      <template #label>
        <el-icon :size="24">
          <component :is="menu.icon" />
        </el-icon>
        <span>{{ menu.label }}</span>
      </template>
      User
    </el-tab-pane>
    <el-tab-pane label="Config">Config</el-tab-pane>
    <el-tab-pane label="Role">Role</el-tab-pane>
    <el-tab-pane label="Task">Task</el-tab-pane>
  </el-tabs>
</template>

<script setup lang="ts">
const menuList = [
  {
    id: "page",
    icon: 'edit',
    label: "页面",
    content: "页面配置",
  },
  {
    id: "base",
    icon: "cold-drink",
    label: "基础组件",
    content: "基础组件",
  },
  {
    id: "business",
    icon: "medal",
    label: "业务组件",
    content: "业务组件",
  },
];
</script>

<style lang="scss" scoped>
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}

.el-tabs--right .el-tabs__content,
.el-tabs--left .el-tabs__content {
  height: 100%;
}
</style>
