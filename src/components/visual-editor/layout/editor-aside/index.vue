<template>
  <el-tabs tab-position="left" class="aside-tabs">
    <el-tab-pane v-for="menu in menuList" :key="menu.id">
      <template #label>
        <el-icon :size="24">
          <component :is="menu.icon" />
        </el-icon>
        <span>{{ menu.label }}</span>
      </template>
      User
    </el-tab-pane>
  </el-tabs>
</template>

<script setup lang="ts">
import components from "../../components/";

const comps = Object.entries(components)
  .map(([name, component]) => {
    console.log('====================================');
    console.log(name);
    console.log(component);
    console.log('====================================');
    const { label, icon, order } = component;
    return { label, icon, name, order, comp: component };
  })
  .sort((a, b) => a.order - b.order);
console.log(comps);

const menuList = [
  {
    id: "page",
    icon: "document",
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
const baseComp = [
  {
    id: "text",
    lable: "文本",
    value: "base-text",
    thumbnail:
      "https://page-static.oss-cn-qingdao.aliyuncs.com/static/brick/brick_tpl_text.webp",
  },
  {
    id: "image",
    lable: "图片",
    value: "base-image",
    thumbnail:
      "https://page-static.oss-cn-qingdao.aliyuncs.com/static/brick/brick_tpl_picture.webp",
  },
];
</script>

<style lang="scss" scoped>
.aside-tabs {
  :deep(.el-tabs__content) {
    height: 100%;
  }
  :deep(.el-tabs__item) {
    height: 66px;
    line-height: 24px;
    @include we-flex(column, center);
  }
  .el-tabs__ {
    &item {
      @include we-flex(column);
    }
    &content {
      padding: 32px;
      height: 100%;
      color: #6b778c;
      font-size: 32px;
      font-weight: 600;
    }
  }
}

.el-tabs--right .el-tabs__content,
.el-tabs--left .el-tabs__content {
  height: 100%;
}
</style>
