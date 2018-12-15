import { generateHTML } from "../services/html-generator-service";

export function regenerateHtmlReducer(prevState:any, htmlConfig:any) {
    let newState = { ...prevState };
    newState.obfuscationConfig.html = generateHTML(htmlConfig);
    return newState;
}