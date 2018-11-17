export function algorithmReducer(prevState, valueToUpdate) {
    console.log('AlgorithmReducer');
    let newState = { ...prevState };
    newState.obfuscationConfig.choosenAlgorithm = valueToUpdate;
    return newState;
}

export function htmlTypeReducer(prevState, valueToUpdate) {
    console.log('HTMLTypeReducer');
    valueToUpdate = Number(valueToUpdate);
    let newState = { ...prevState };
    newState.obfuscationConfig.choosenHtml = valueToUpdate;
    if (valueToUpdate === 0) {
        newState.showHtmlTemplateModal = true;
    }
    return newState;
}

export function htmlTypeFileReducer(prevState, filContent) {
    console.log('HTMLTypeFileReducer');
    let newState = { ...prevState };
    newState.obfuscationConfig.html = filContent;
    return newState;
}

export function showResultReducer(prevState, param) {
    console.log('ShowResultReducer');
    let newState = { ...prevState };
    newState.activeTab = '3';
    newState.outputObfuscationConfig = { ...newState.obfuscationConfig };
    return newState;
}
