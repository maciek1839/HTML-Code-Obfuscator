import { PreservedConfiguration } from "../model/enums/preserved-configuraiton";
import { createConfig } from "../model/obfuscation-config";
import { loadTemplate, FileName } from "../utils/file-loader";
import { getLoadFileType } from "../model/enums/html-type";
import { AlgorithmType } from "../model/enums/algorithm-type";

const APP_KEY = 'HTML_OBFUSCATOR_USER_COFNIG'

export function saveConfig(userConfig) {

    if (localStorage.getItem(APP_KEY) == null) {
        localStorage.setItem(APP_KEY, JSON.stringify([userConfig]));
    } else {
        let list = getConfigs();
        list.push(userConfig);

        localStorage.setItem(APP_KEY, JSON.stringify(list));
    }

}

export function getConfigs() {
    let configList = JSON.parse(localStorage.getItem(APP_KEY));

    return configList ? configList : [];
}

export function clearUserConfigs() {
    localStorage.removeItem(APP_KEY);
}

export function createUserConfig(name, config) {
    return PreservedConfiguration(name, config);
}

export function getConfig(title) {
    let config = null;
    getConfigs().forEach(element => {
        if (element.title === title) {
            config = element.config;
        }
    });

    return config;
}


export function getDefaultConfiguration() {
    let array = [];
    array.push(
        PreservedConfiguration(
            'HTML entities',
            createConfig(
                AlgorithmType.HTML_TO_HTML_ENTITIES,
                getLoadFileType(),
                loadTemplate(FileName.EXAMPLE1)
            )
        )
    );


    array.push(
        PreservedConfiguration(
            'Base64',
            createConfig(
                AlgorithmType.HTML_TO_BASE64,
                getLoadFileType(),
                loadTemplate(FileName.EXAMPLE2)
            )
        )
    );


    return array;
}


export function getPreseredConfiguration(id) {
    let result = null;
    getDefaultConfiguration().forEach(element => {
        if (element.id === parseInt(id)) {
            result = element;
        }
    });
    return result;
}

export function checkIfConfigExists(name){
    let result=false;
    getConfigs().forEach(e=>result=e.name===name);
    return result;
}