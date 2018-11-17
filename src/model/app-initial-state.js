import {getDefaultAlgorithms} from "./enums/algorithm-type"
import {getInitialObfuscationConfig} from "./obfuscation-config"

export function getInitialState() {
    return {
      algorithms: getDefaultAlgorithms(),
      obfuscationConfig: getInitialObfuscationConfig(),
      activeTab: '1',
      showHtmlTemplateModal: false,
      outputObfuscationConfig: null
    };
  }