export interface KeyValue {
  key: any,
  value: any
}

export enum HtmlFileType {
  GENERATE = 1,
  LOAD_FILE = 2
}

const HtmlTypes = [
  {key: HtmlFileType.GENERATE, value: 'Generate'},
  {key: HtmlFileType.LOAD_FILE, value: 'Load file'}
];

export default HtmlTypes;
