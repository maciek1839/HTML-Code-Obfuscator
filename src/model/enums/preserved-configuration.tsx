import {ObfuscationConfig} from "../obfuscation-config";

export function createPreservedConfiguration(name:string, config:ObfuscationConfig):PreservedConfiguration{
    return {
      "name": name,
      "config": config  
    };
}

export interface PreservedConfiguration{
    "name": string;
    "config": ObfuscationConfig;
}