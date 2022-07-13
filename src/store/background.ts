import { defineStore } from "pinia";

export const useBackgroundStore = defineStore({
  id: "background",
  state: () => ({
    backgroundColor: <null | string>null,
  }),
  // 是否开启数据缓存，持久化
  persist: {
    enabled: true,
  },
  actions: {
    setBackgroundColor(backgroundColor: null | string) {
      this.backgroundColor = backgroundColor;
    },
  },
});
