# h5-lover

Low code building platform of HTML5 based on Vue3 and Vite, etc.

## Template

> node versions after v16 has pnpm, use after activation.
> 
> [Please check the document for details.](https://pnpm.io/zh/)

1、create initial project by Vite template
``` bash
#pnpm
pnpm create vite h5-lover --template vue-ts 
# create under the currently existing directory[h5-lover]
pnpm create vite . --template vue-ts
```
2、install dependencies
``` bash
pnpm install
```
3、run project
``` bash
pnpm run dev
```

## Some Dependencies

### Element Icons

use mode.
``` vue
<template>
 <el-icon color="#000" size="22">
    <!-- 自动导入必须遵循名称格式 {prefix：默认为i}-{collection：图标集合的名称}-{icon：图标名称}  -->
   <i-ep-edit />
 </el-icon>
</template>
```

install.
``` bash
# install
pnpm install @element-plus/icons-vue

```

auto import.

``` bash
# install
pnpm install -D unplugin-icons @types/node

```

``` typescript 
import { resolve } from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import Inspect from "vite-plugin-inspect";

const pathSrc = resolve(__dirname, "src");

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": pathSrc,
    },
  },
  plugins: [
    vue(),
    AutoImport({
      // Auto import functions from Vue, e.g. ref, reactive, toRef...
      // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
      imports: ["vue"],
      // Auto import functions from Element Plus, e.g. ElMessage, ElMessageBox... (with style)
      // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
      resolvers: [
        ElementPlusResolver(),
        // Auto import icon components
        // 自动导入图标组件
        IconsResolver({
          prefix: "Icon",
        }),
      ],
      dts: resolve(pathSrc, "auto-imports.d.ts"),
    }),
    Components({
      resolvers: [
        // Auto register icon components
        // 自动注册图标组件
        IconsResolver({
          enabledCollections: ["ep"],
        }),
        // Auto register Element Plus components
        // 自动导入 Element Plus 组件
        ElementPlusResolver(),
      ],
      dts: resolve(pathSrc, "auto-imports.d.ts"),
    }),
    Icons({
      autoInstall: true,
    }),
    Inspect(),
  ],
});

```

## Submit Standard

- `feat` 增加新功能
- `fix` 修复问题/BUG
- `style` 代码风格相关无影响运行结果的
- `perf` 优化/性能提升
- `refactor` 重构
- `revert` 撤销修改
- `test` 测试相关
- `docs` 文档/注释
- `build` 对构建系统或者外部依赖项进行了修改
- `chore` 依赖更新/脚手架配置修改等
- `workflow` 工作流改进
- `ci` 持续集成
- `types` 类型定义文件更改
- `wip` 开发中

## Contribution

Thank you to all the people who already contributed to h5-lover!

<a href="https://github.com/imwarn/h5-lover/graphs/contributors">contributors</a>


# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's Take Over mode by following these steps:

1. Run `Extensions: Show Built-in Extensions` from VS Code's command palette, look for `TypeScript and JavaScript Language Features`, then right click and select `Disable (Workspace)`. By default, Take Over mode will enable itself if the default TypeScript extension is disabled.
2. Reload the VS Code window by running `Developer: Reload Window` from the command palette.

You can learn more about Take Over mode [here](https://github.com/johnsoncodehk/volar/discussions/471).
