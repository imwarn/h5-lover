import { createVisualEditorConfig } from './visual-editor.utils';
import baseComponent from '@/packages/base-component';

export const visualConfig = createVisualEditorConfig();
// 注册基础控件
Object.entries(baseComponent).forEach(([name, widget]) =>
  visualConfig.registry('baseComponent', name, widget),
);

console.log(
  `%c成功加载组件数量:${Object.keys(visualConfig.componentMap).length}`,
  'color:#409EFF;background-color:#ecf5ff;padding:0 10px;line-height:2;margin-bottom:4px;',
);

console.log('visualConfig:', visualConfig);
