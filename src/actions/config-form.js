export const setAlgorithm = algorithmId => {
    return {
        type: ConfigFormActions.SET_ALGORITHM,
        payload: algorithmId
    };
};

export const setHtmlType = htmlType => {
    return {
        type: ConfigFormActions.SET_HTML_TYPE,
        payload: htmlType
    };
};

export const setHtmlFile = file => {
    return {
        type: ConfigFormActions.SET_HTML_FILE,
        payload: file
    };
}

export const showGenerateHtmlModal = () => {
    return {
        type: ConfigFormActions.SHOW_GENERATE_HTML_MODAL,
        payload: null
    };
}

export const showResult = () => {
    return {
        type: ConfigFormActions.SHOW_RESULT,
        payload: null
    };
}

export const loadConfigAction = (config) => {
    return {
        type: ConfigFormActions.LOAD_CONFIG,
        payload: config
    };
}


export const ConfigFormActions = {
    SET_ALGORITHM: 'SET_ALGORITHM',
    SET_HTML_TYPE: 'SET_HTML_TYPE',
    SET_HTML_FILE: 'SET_HTML_FILE',
    SHOW_GENERATE_HTML_MODAL: 'SHOW_GENERATE_HTML_MODAL',
    SHOW_RESULT: 'SHOW_RESULT',
    LOAD_CONFIG: 'LOAD_CONFIG'
}