import { visualConfig } from '@/utils/visual-editor.config'
export default defineComponent({
  name: "BaseComponent",
  label: "基础组件",
  order: 2,
  icon: "Edit",
  setup() {
    const baseComponent = ref(visualConfig.componentModules.baseComponent)
    console.log('====================================');
    console.log('base-component tsx');
    console.log(baseComponent);
    console.log('====================================');
    
    const log = (evt: string) => {
      window.console.log('onChange:', evt);
    };
    return () => {
      <>
        <div>基础按钮</div>
      </>;
    };
  },
});
