import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";

import "@/assets/styles/index.scss";
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(store).mount("#app");
