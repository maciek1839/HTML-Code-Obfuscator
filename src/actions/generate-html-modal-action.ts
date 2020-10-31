import {Action} from "./action";
import {HtmlConfig} from '../services/html-generator-service';

export const closeModal: (() => Action) = () => {
  return {
    type: GenerateHtmlModalActions.CLOSE_MODAL,
    payload: undefined
  };
};

export const generateHtml: ((_: any) => Action) = (htmlConfig: HtmlConfig) => {
  return {
    type: GenerateHtmlModalActions.GENERATE_HTML,
    payload: htmlConfig
  };
};

export const GenerateHtmlModalActions = {
  CLOSE_MODAL: 'CLOSE_MODAL',
  GENERATE_HTML: 'GENERATE_HTML'
};
