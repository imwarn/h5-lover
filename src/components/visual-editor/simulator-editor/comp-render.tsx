import { VisualEditorBlockData } from "@/types/visual-editor";
import { visualConfig } from "@/utils/visual-VisualEditorBlockData.config";
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "CompRender",
  props: {
    element: {
      type: Object as PropType<VisualEditorBlockData>,
      default: () => ({}),
    },
  },
  setup(props) {
    return visualConfig.componentMap[props.element.componentKey].render({
      styles: props.element.styles || {},
      props: props.element.props || {},
      model: {},
      block: props.element,
      custom: {},
    });
  },
});
