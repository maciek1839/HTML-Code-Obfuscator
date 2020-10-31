import {getGenerateType} from "../model/html-types";

export function algorithmReducer(prevState: any, valueToUpdate: any) {
  let newState = {...prevState};
  newState.obfuscationConfig.choosenAlgorithm = valueToUpdate;
  return newState;
}

export function htmlTypeReducer(prevState: any, valueToUpdate: any) {
  valueToUpdate = Number(valueToUpdate);
  let newState = {...prevState};
  newState.obfuscationConfig.choosenHtml = valueToUpdate;
  if (valueToUpdate === getGenerateType()) {
    newState.showHtmlTemplateModal = true;
  }
  return newState;
}

export function htmlTypeFileReducer(prevState: any, filContent: any) {
  let newState = {...prevState};
  newState.obfuscationConfig.html = filContent;
  return newState;
}

export function showResultReducer(prevState: any) {
  let newState = {...prevState};
  newState.activeTab = '3';
  newState.outputObfuscationConfig = {...newState.obfuscationConfig};
  return newState;
}

export function loadConfigReducer(prevState: any, config: any) {
  let newState = {...prevState};
  newState.obfuscationConfig = config;
  return newState;
}
