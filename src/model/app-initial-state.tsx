import {getDefaultAlgorithms, ObfuscationAlgorithm} from "./enums/algorithm-type"
import {getInitialObfuscationConfig, ObfuscationConfig} from "./obfuscation-config"

export interface EntryState {
  algorithms: ObfuscationAlgorithm[],
  obfuscationConfig: ObfuscationConfig,
  activeTab: string,
  showHtmlTemplateModal: boolean,
  outputObfuscationConfig: ObfuscationConfig|null
}

export interface EntryProps {
}



export function getInitialState():EntryState {
    return {
      algorithms: getDefaultAlgorithms(),
      obfuscationConfig: getInitialObfuscationConfig(),
      activeTab: '1',
      showHtmlTemplateModal: false,
      outputObfuscationConfig: null
    };
  }