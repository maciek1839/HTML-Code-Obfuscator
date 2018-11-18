import { generateHTML } from "../services/html-generator-service";

export function closeModalReducer(prevState, param) {
    console.log('CloseModalReducer');
    let newState = { ...prevState };
    newState.showHtmlTemplateModal = false;
    newState.obfuscationConfig.choosenHtml = null;
    return newState;
}

export function generateHtmlReducer(prevState, htmlConfig) {
    console.log('generateHtmlReducer');
    let newState = { ...prevState };
    newState.obfuscationConfig.html = generateHTML(htmlConfig);
    newState.obfuscationConfig.htmlConfig = htmlConfig;
    newState.showHtmlTemplateModal = false;
    return newState;
}