export function getInitialObfuscationConfig(){
    return {
        choosenAlgorithm: null,
        choosenHtml: null,
        html: null,
        htmlConfig: null
    };
};

export function createConfig(choosenAlgorithm, choosenHtml, html, htmlConfig=null){
    return {
        choosenAlgorithm: choosenAlgorithm,
        choosenHtml: choosenHtml,
        html: html,
        htmlConfig: htmlConfig
    };
}