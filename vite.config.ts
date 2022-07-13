import { resolve } from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import DefineOptions from 'unplugin-vue-define-options/vite'
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import Inspect from "vite-plugin-inspect";

const pathSrc = resolve(__dirname, "./src");

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": pathSrc,
    },
  },
  plugins: [
    vue(),
    DefineOptions(),
    AutoImport({
      // Auto import functions from Vue, e.g. ref, reactive, toRef...
      // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
      imports: ["vue"],
      // Auto import functions from Element Plus, e.g. ElMessage, ElMessageBox... (with style)
      // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
      resolvers: [ElementPlusResolver()],
      dts: resolve(pathSrc, "auto-imports.d.ts"),
    }),
    Components({
      resolvers: [
        // Auto register Element Plus components
        // 自动导入 Element Plus 组件
        ElementPlusResolver(),
      ],
      dts: resolve(pathSrc, "auto-imports.d.ts"),
    }),
    Inspect(),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        // 全局引入变量和 mixin
        additionalData: `
          @import "@/assets/styles/mixin.scss";
        `,
      },
    },
  },
});
