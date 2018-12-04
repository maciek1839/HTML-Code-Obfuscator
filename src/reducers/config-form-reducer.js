import { getGenerateType } from "../model/enums/html-type";

export function algorithmReducer(prevState, valueToUpdate) {
    let newState = { ...prevState };
    newState.obfuscationConfig.choosenAlgorithm = valueToUpdate;
    return newState;
}

export function htmlTypeReducer(prevState, valueToUpdate) {
    valueToUpdate = Number(valueToUpdate);
    let newState = { ...prevState };
    newState.obfuscationConfig.choosenHtml = valueToUpdate;
    if (valueToUpdate === getGenerateType()) {
        newState.showHtmlTemplateModal = true;
    }
    return newState;
}

export function htmlTypeFileReducer(prevState, filContent) {
    let newState = { ...prevState };
    newState.obfuscationConfig.html = filContent;
    return newState;
}

export function showResultReducer(prevState) {
    let newState = { ...prevState };
    newState.activeTab = '3';
    newState.outputObfuscationConfig = { ...newState.obfuscationConfig };
    return newState;
}

export function loadConfigReducer(prevState, config) {
    let newState = { ...prevState };
    newState.obfuscationConfig = config;
    return newState;
}