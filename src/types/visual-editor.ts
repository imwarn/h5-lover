import { CSSProperties } from "vue";
/**
 * @description 动画项
 */
 export interface Animation {
  /** 动画名称 */
  label: string;
  /** 动画类名 */
  value: string;
  /** 动画持续时间 */
  duration: number;
  /** 动画延迟多久执行 */
  delay: number;
  /** 动画执行次数 */
  count: number;
  /** 是否无限循环动画 */
  infinite: boolean;
};
/**
 * 组件属性类型枚举
 */
export enum VisualEditorPropsType {
  /** 输入框 */
  input = "input",
  /** 数字输入框 */
  inputNumber = "InputNumber",
  /** 颜色选择器 */
  color = "color",
  /** 下拉选择器 */
  select = "select",
  /** 表格 */
  table = "table",
  /** 开关 */
  switch = "switch",
  /** 模型绑定选择器 */
  modelBind = "ModelBind",
  /** 可拖拽项 */
  crossSortable = "CrossSortable",
}

export interface VisualEditorSelectOptions {
  label: string;
  value: string | number | boolean | object;
  [prop: string]: any;
}[];

export interface VisualEditorTableOption {
  options: {
    label: string; // 列显示文本
    field: string; // 列绑定的字段
  }[];
  showKey: string;
};

/**
 * 组件属性
 */
export type VisualEditorProps = {
  type: VisualEditorPropsType;
  /** 表单项标签名称 */
  label: string;
  /** 表单项提示说明 */
  tips?: string;
  /** 表单域标签的位置 */
  labelPosition?: string;
  /** 表单项默认值 */
  defaultValue?: any;
} & {
  /** 可选项 */
  options?: VisualEditorSelectOptions;
  /** 是否可以多选 */
  multiple?: boolean;
  /** 项属性配置 */
  showItemPropsConfig?: boolean;
} & {
  max?: number;
  min?: number;
} & {
  table?: VisualEditorTableOption;
};


/**
 * @description 组件属性
 */
export interface VisualEditorBlockData {
  /** 组件id 时间戳, 组件唯一标识 */
  _vid: string;
  /** 组件所属的模块（基础组件、容器组件） */
  moduleName: keyof ComponentModules;
  /** 映射 VisualEditorConfig 中 componentMap 的 component对象 */
  componentKey: string;
  /** 组件标签名称 */
  label: string;
  /** 是否需要调整位置 */
  adjustPosition: boolean;
  /** 当前是否为选中状态 */
  focus: boolean;
  /** 当前组件的样式 */
  styles: CSSProperties & {
    tempPadding?: string;
  };
  /** 是否调整过宽度或者高度 */
  hasResize: boolean;
  /** 组件的设计属性 */
  props: Record<string, any>;
  /** 绑定的字段 */
  model: Record<string, string>;
  /** 组件是否可以被拖拽 */
  draggable: boolean;
  /** 是否显示组件样式配置项 */
  showStyleConfig?: boolean;
  /** 动画集 */
  animations?: Animation[];
  /** 组件动作集合 */
  actions: Action[];
  /** 组件事件集合 */
  events: { label: string; value: string }[];
  [prop: string]: any;
}
/**
 * @description 组件动作事件处理
 */
export interface ActionHandle {
  key: string;
  name: string;
  link: string[];
  data?: {
    bind?: string;
    recv?: string;
  };
}
/**
 * @description 组件动作
 */
export interface Action {
  key: string;
  name: string;
  event: string;
  handle: ActionHandle[];
}
/**
 * 组件模块类型
 */
export interface ComponentModules {
  baseComponent: VisualEditorComponent[]; // 基础组件
  businessComponents: VisualEditorComponent[]; // 容器组件
}

/**
 * 单个组件注册类型
 */
export interface VisualEditorComponent {
  /** 组件name */
  key: string;
  /** 组件所属模块名称 */
  moduleName: keyof ComponentModules;
  /** 组件唯一id */
  _vid?: string;
  /** 组件中文名称 */
  label: string;
  /** 组件预览函数 */
  preview: () => JSX.Element;
  /** 组件渲染函数 */
  render: (data: {
    props: any;
    model: any;
    styles: CSSProperties;
    block: VisualEditorBlockData;
    custom: Record<string, any>;
  }) => () => JSX.Element;
  /** 组件是否可以被拖拽 */
  draggable?: boolean;
  /** 是否显示组件的样式配置项 */
  showStyleConfig?: boolean;
  /** 组件属性 */
  props?: Record<string, VisualEditorProps>;
  /** 动画集 */
  animations?: Animation[];
  /** 组件事件集合 */
  events?: { label: string; value: string }[];
  /** 组件样式 */
  styles?: CSSProperties;
}
