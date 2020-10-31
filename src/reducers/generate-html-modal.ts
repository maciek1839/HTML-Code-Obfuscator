import HtmlGeneratorService from '../services/html-generator-service';

export function closeModalReducer(prevState: any, param: any) {
  let newState = {...prevState};
  newState.showHtmlTemplateModal = false;
  newState.obfuscationConfig.choosenHtml = null;
  return newState;
}

export function generateHtmlReducer(prevState: any, htmlConfig: any) {
  let newState = {...prevState};
  newState.obfuscationConfig.html = HtmlGeneratorService.generateHTML(htmlConfig);
  newState.obfuscationConfig.htmlConfig = htmlConfig;
  newState.showHtmlTemplateModal = false;
  return newState;
}
