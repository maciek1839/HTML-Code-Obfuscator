import {HtmlFileType} from "../model/html-types";
import {ApplicationState} from '../state/application-state';
import {AlgorithmType} from '../model/algorithms/algorithm-type';

export function algorithmReducer(prevState: ApplicationState, valueToUpdate: AlgorithmType) {
  let newState = {...prevState};
  newState.obfuscationConfig.algorithmType = valueToUpdate;
  return newState;
}

export function htmlFileTypeReducer(prevState: ApplicationState, valueToUpdate: HtmlFileType) {
  let newState = {...prevState};
  newState.obfuscationConfig.htmlFileType = Number(valueToUpdate);
  if (valueToUpdate === HtmlFileType.GENERATE) {
    newState.showHtmlTemplateModal = true;
  }
  return newState;
}

export function htmlTypeFileReducer(prevState: ApplicationState, filContent: any) {
  let newState = {...prevState};
  newState.obfuscationConfig.html = filContent;
  return newState;
}

export function showResultReducer(prevState: ApplicationState) {
  let newState = {...prevState};
  newState.activeTab = '3';
  newState.outputObfuscationConfig = {...newState.obfuscationConfig};
  return newState;
}

export function loadConfigReducer(prevState: ApplicationState, config: any) {
  let newState = {...prevState};
  newState.obfuscationConfig = config;
  return newState;
}
