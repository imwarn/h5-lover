import {
  VisualEditorPropsType,
  VisualEditorProps,
} from "@/types/visual-editor";

/*---------------------------------------input-------------------------------------------*/

interface EditorInputProp {
  label: string;
  defaultValue?: any;
  tips?: string;
}

export function createEditorInputProp({
  label,
  defaultValue,
  tips,
}: EditorInputProp): VisualEditorProps {
  return {
    type: VisualEditorPropsType.input,
    label,
    tips,
    defaultValue,
  };
}
/*---------------------------------------select-------------------------------------------*/

export type VisualEditorSelectOptions = {
  label: string;
  value: string | number | boolean | object;
  [prop: string]: any;
}[];

interface EditorSelectProp {
  label: string;
  options: VisualEditorSelectOptions;
  defaultValue?: any;
  multiple?: boolean;
  tips?: string;
}

export function createEditorSelectProp({
  label,
  options,
  defaultValue,
  tips,
  multiple,
}: EditorSelectProp): VisualEditorProps {
  return {
    type: VisualEditorPropsType.select,
    label,
    defaultValue,
    tips,
    options,
    multiple,
  };
}

/*---------------------------------------color-------------------------------------------*/

interface EditorColorProp {
  label: string;
  defaultValue?: string;
}

export function createEditorColorProp({
  label,
  defaultValue,
}: EditorColorProp): VisualEditorProps {
  return {
    type: VisualEditorPropsType.color,
    label,
    defaultValue,
  };
}
/*---------------------------------------InputNumber -------------------------------------------*/
interface EditorInputNumberProp {
  label: string;
  defaultValue?: any;
  tips?: string;
  max?: number;
  min?: number;
}

export function createEditorInputNumberProp({
  label,
  defaultValue,
  max,
  min,
  tips,
}: EditorInputNumberProp): VisualEditorProps {
  return {
    type: VisualEditorPropsType.inputNumber,
    label,
    tips,
    max,
    min,
    defaultValue,
  };
}