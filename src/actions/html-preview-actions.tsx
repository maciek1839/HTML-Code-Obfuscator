import {Action} from "./actions";

export function regenerateHtml(config:any):Action{
    return {
        type: PreviewHtmlActions.REGENERATE_HTML,
        payload: config
    };
}

export const PreviewHtmlActions = {
    REGENERATE_HTML: 'REGENERATE_HTML'
};