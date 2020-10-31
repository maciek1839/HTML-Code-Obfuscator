import {Action} from "./action";

export const setAlgorithm: ((_: any) => Action) = (algorithmId: any) => {
  return {
    type: ConfigFormActions.SET_ALGORITHM,
    payload: algorithmId
  };
};

export const setHtmlType: ((_: any) => Action) = (htmlType: any) => {
  return {
    type: ConfigFormActions.SET_HTML_TYPE,
    payload: htmlType
  };
};

export const setHtmlFile: ((_: any) => Action) = (file: any) => {
  return {
    type: ConfigFormActions.SET_HTML_FILE,
    payload: file
  };
};

export const showGenerateHtmlModal: ((_: any) => Action) = () => {
  return {
    type: ConfigFormActions.SHOW_GENERATE_HTML_MODAL,
    payload: null
  };
};

export const showResult: (() => Action) = () => {
  return {
    type: ConfigFormActions.SHOW_RESULT,
    payload: null
  };
};

export const loadConfigAction: ((_: any) => Action) = (config: any) => {
  return {
    type: ConfigFormActions.LOAD_CONFIG,
    payload: config
  };
};


export const ConfigFormActions = {
  SET_ALGORITHM: 'SET_ALGORITHM',
  SET_HTML_TYPE: 'SET_HTML_TYPE',
  SET_HTML_FILE: 'SET_HTML_FILE',
  SHOW_GENERATE_HTML_MODAL: 'SHOW_GENERATE_HTML_MODAL',
  SHOW_RESULT: 'SHOW_RESULT',
  LOAD_CONFIG: 'LOAD_CONFIG'
};
