import { VisualEditorComponent } from '@/utils/visual-editor.utils';

const modules = import.meta.globEager('./*/index.tsx');

const components: Record<string, VisualEditorComponent> = {};

Object.entries(modules).forEach(([key, module]) => {
  const name = key.replace(/\.\/(.*)\/index\.(tsx|vue)/, '$1');
  components[name] = module?.default || module;
});

console.log(components, 'base-component');
export default components;
