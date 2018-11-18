export function regenerateHtml(config){
    return {
        type: PreviewHtmlActions.REGENERATE_HTML,
        payload: config
    };
}

export const PreviewHtmlActions = {
    REGENERATE_HTML: 'REGENERATE_HTML'
}