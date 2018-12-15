import {ObfuscationAlgorithm} from "./enums/algorithm-type";

export interface ObfuscationConfig {

    choosenAlgorithm: ObfuscationAlgorithm|null;
    choosenHtml: any;
    html: any;
    htmlConfig: any;
}

export function createConfig(choosenAlgorithm: any, choosenHtml: any, html: any, htmlConfig: any = null):ObfuscationConfig {
    return {
        choosenAlgorithm: choosenAlgorithm,
        choosenHtml: choosenHtml,
        html: html,
        htmlConfig: htmlConfig
    };
}

export function getInitialObfuscationConfig():ObfuscationConfig{
    return {
        choosenAlgorithm: null,
        choosenHtml: null,
        html: null,
        htmlConfig: null
    };
}