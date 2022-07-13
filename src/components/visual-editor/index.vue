<template>
  <el-container class="container">
    <el-header>
      <editor-header></editor-header>
    </el-header>
    <el-container class="layout">
      <el-aside>
        <editor-aside></editor-aside>
      </el-aside>
      <el-main></el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.el-header{
  height: 80px;
}
.layout {
  height: calc(100vh - 80px);
}
.el-main {
  width: calc(100vw - 200px);
  background-color: #f6f7f8;
}
</style>