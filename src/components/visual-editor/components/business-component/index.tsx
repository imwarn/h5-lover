export default defineComponent({
  name: "BusinessComponent",
  label: "业务组件",
  order: 3,
  icon: "Edit",
  setup() {
    return () => {
      <>
        <div>业务按钮</div>
      </>;
    };
  },
});
