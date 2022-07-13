import { VisualEditorComponent } from "@/types/visual-editor";
import { createEditorInputProp, createEditorSelectProp, createEditorColorProp, createEditorInputNumberProp } from "@/utils/visual-editor.props";
import { fontFamilys } from "./font";

export default {
  key: "base-text",
  moduleName: "baseComponent",
  label: "文本",
  preview: () => <span>预览文本</span>,
  render: ({ props, block, styles }) => {
    return () => (
      <div
        ref={block._vid}
        style={{
          color: props.color,
          fontSize: `${parseFloat(props.size)}px`,
          fontFamily: props.font,
          ...styles,
        }}
      >
        {props.text || ""}
      </div>
    );
  },
  props: {
    text: createEditorInputProp({label: '显示文本'}),
    font: createEditorSelectProp({ label: '字体设置', options: [...fontFamilys] }),
    color: createEditorColorProp({ label: '字体颜色' }),
    size: createEditorInputNumberProp({
      label: '字体大小',
      defaultValue: 16,
    })
  }
} as VisualEditorComponent;
