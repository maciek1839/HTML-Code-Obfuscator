import { generateHTML } from "../services/html-generator-service";

export function regenerateHtmlReducer(prevState, htmlConfig) {
    console.log('RegenerateHtmlReducer');
    let newState = { ...prevState };
    console.log(htmlConfig);
    newState.obfuscationConfig.html = generateHTML(htmlConfig);
    return newState;
}