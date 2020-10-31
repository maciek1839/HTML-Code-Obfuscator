import {ObfuscationConfig} from "../model/configs/obfuscation-config"
import {ObfuscationAlgorithm} from '../model/algorithms/obfuscation-algorithm';
import AlgorithmService from '../services/algorithm-service';
import ConfigurationService from '../services/configuration-service';

export interface ApplicationState {
  activeTab: string,
  algorithms: ObfuscationAlgorithm[],
  obfuscationConfig: ObfuscationConfig,
  outputObfuscationConfig: ObfuscationConfig | null
  showHtmlTemplateModal: boolean,
}

export interface AppProps {
}

export function getInitialState(): ApplicationState {
  return {
    algorithms: AlgorithmService.getDefaultAlgorithms(),
    obfuscationConfig: ConfigurationService.getInitialObfuscationConfig(),
    activeTab: '1',
    showHtmlTemplateModal: false,
    outputObfuscationConfig: null
  };
}
