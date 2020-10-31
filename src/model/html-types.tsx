export interface KeyValue {
  key: any,
  value: any
}

const HtmlTypes = [
  {key: 1, value: 'Generate'},
  {key: 2, value: 'Load file'}
];

export function getGenerateType() {
  return 1;
}

export function getLoadFileType() {
  return 2;
}

export default HtmlTypes;
