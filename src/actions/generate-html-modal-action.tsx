import {Action} from "./actions";

export const closeModal: (() => Action) = () => {
    return {
        type: GenerateHtmlModalActions.CLOSE_MODAL,
        payload: null
    };
};

export const generateHtml: ((_: any) => Action) = (htmlConfig: any) => {
    return {
        type: GenerateHtmlModalActions.GENERATE_HTML,
        payload: htmlConfig
    };
};

export const GenerateHtmlModalActions = {
    CLOSE_MODAL: 'CLOSE_MODAL',
    GENERATE_HTML: 'GENERATE_HTML'
};