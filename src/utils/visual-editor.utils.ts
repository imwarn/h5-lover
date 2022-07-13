import { inject, provide } from 'vue';
import type { VisualEditorProps, ComponentModules, VisualEditorBlockData, Animation } from '@/types/visual-editor'
import type { CSSProperties } from 'vue';
// import type { RequestEnum, ContentTypeEnum } from '@/enums/httpEnum';
// import { useDotProp } from '@/visual-editor/hooks/useDotProp';
// import { generateNanoid } from '@/visual-editor/utils';



/**
 * @description 页面配置
 */
export type PageConfig = {
  /** 背景图片 */
  bgImage: string;
  /** 背景颜色 */
  bgColor: string;
  /** 是否缓存当前页面 */
  keepAlive: boolean;
};
/**
 * @description 页面对象
 */
export type VisualEditorPage = {
  /** 页面标题 */
  title: string;
  /** 页面路径 */
  path: string;
  /** 404是重定向到默认页面 */
  isDefault?: boolean;
  /** 页面配置 */
  config: PageConfig;
  /** 当前页面的所有组件 */
  blocks: VisualEditorBlockData[];
};
/**
 * @description 可以认为是 路由=>页面
 */
export type VisualEditorPages = {
  [path: string]: VisualEditorPage;
};
/**
 * @description 实体类型
 */
export type EntityType = {
  /** 绑定的字段 输入 */
  key: string;
  /** 实体名称 输入 */
  name: string;
  /** 数据类型 选择 */
  type: string;
  /** 默认值 输入 */
  value: string;
};


/**
 * @description 单个组件注册规则
 */
export type VisualEditorComponent = {
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
};

export type VisualEditorMarkLines = {
  x: { left: number; showLeft: number }[];
  y: { top: number; showTop: number }[];
};


export type VisualDragEvent = {
  dragstart: {
    on: (cb: () => void) => void;
    off: (cb: () => void) => void;
    emit: () => void;
  };
  dragend: {
    on: (cb: () => void) => void;
    off: (cb: () => void) => void;
    emit: () => void;
  };
};

export const VisualDragProvider = (() => {
  const VISUAL_DRAG_PROVIDER = '@@VISUAL_DRAG_PROVIDER';
  return {
    provide: (data: VisualDragEvent) => {
      provide(VISUAL_DRAG_PROVIDER, data);
    },
    inject: () => {
      return inject(VISUAL_DRAG_PROVIDER) as VisualDragEvent;
    },
  };
})();


/**
 * @description 创建编辑器配置
 * @returns {} 返回编辑器注册组件的方法等
 */
export function createVisualEditorConfig() {
  const componentModules: ComponentModules = {
    baseComponent: [],
    businessComponents: [],
  };
  // const componentList: VisualEditorComponent[] = []
  const componentMap: Record<string, VisualEditorComponent> = {};
  return {
    componentModules,
    componentMap,
    registry: <
      _,
      Props extends Record<string, VisualEditorProps> = {},
      Model extends Record<string, string> = {},
    >(
      moduleName: keyof ComponentModules,
      key: string,
      component: {
        label: string;
        preview: () => JSX.Element;
        render: (data: {
          props: { [k in keyof Props]: any };
          model: Partial<{ [k in keyof Model]: any }>;
          styles: CSSProperties;
          block: VisualEditorBlockData;
          custom: Record<string, any>;
        }) => () => JSX.Element;
        props?: Props;
        model?: Model;
        styles?: CSSProperties;
      },
    ) => {
      const comp = { ...component, key, moduleName };
      componentModules[moduleName].push(comp);
      componentMap[key] = comp;
    },
  };
}

export type VisualEditorConfig = ReturnType<typeof createVisualEditorConfig>;
