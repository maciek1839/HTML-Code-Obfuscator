import {createPreservedConfiguration, PreservedConfiguration} from "../model/enums/preserved-configuration";
import {createConfig, ObfuscationConfig} from "../model/obfuscation-config";
import {FileName, loadTemplate} from "../utils/file-loader";
import {getLoadFileType} from "../model/enums/html-type";
import {AlgorithmType} from "../model/enums/algorithm-type";

const APP_KEY = 'HTML_OBFUSCATOR_USER_COFNIG';

export function saveConfig(userConfig: any): void {

    if (localStorage.getItem(APP_KEY) == null) {
        localStorage.setItem(APP_KEY, JSON.stringify([userConfig]));
    } else {
        let list = getConfigs();
        list.push(userConfig);

        localStorage.setItem(APP_KEY, JSON.stringify(list));
    }

}

export function getConfigs(): PreservedConfiguration[] {
    let result = [];
    let configs = localStorage.getItem(APP_KEY);
    if (configs) {
        result = JSON.parse(configs);
    }
    return result;
}

export function clearUserConfigs(): void {
    localStorage.removeItem(APP_KEY);
}

export function createUserConfig(name: string, config: ObfuscationConfig): PreservedConfiguration {
    return createPreservedConfiguration(name, config);
}

export function getConfig(title: string): PreservedConfiguration | null {
    let config = null;
    getConfigs().forEach((element: any) => {
        if (element.title === title) {
            config = element.config;
        }
    });

    return config;
}


export function getDefaultConfiguration(): PreservedConfiguration[] {
    let array = [];
    array.push(
        createPreservedConfiguration(
            'HTML entities',
            createConfig(
                AlgorithmType.HTML_TO_HTML_ENTITIES,
                getLoadFileType(),
                loadTemplate(FileName.EXAMPLE1)
            )
        )
    );


    array.push(
        createPreservedConfiguration(
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

export function checkIfConfigExists(name: string): boolean {
    return getConfigs().reduce((result: boolean, next: PreservedConfiguration) => next.name === name, false);
}