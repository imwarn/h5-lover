<!--
 * @Author: Warn imwarn@163.com
 * @Date: 2022-07-12 16:50:29
 * @LastEditors: Warn imwarn@163.com
 * @LastEditTime: 2022-07-12 17:09:54
 * @FilePath: /h5-lover/src/components/visual-editor/container/editor-header/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <el-row>
    <el-col :span="6">
      <div class="logo"></div>
    </el-col>

  </el-row>

</template>

<script setup lang="ts">

</script>

<style type="scss" scoped>
.logo{
  width: 60px;
  height: 60px;
  background: url('@/assets/logo.png');
  background-repeat: no-repeat;
  background-size: contain;
}
</style>
