import {ObfuscationConfig} from '../model/configs/obfuscation-config';
import {PreservedConfiguration} from '../model/configs/preserved-configuration';
import {getLoadFileType} from '../model/html-types';
import {FileName, loadTemplate} from '../utils/file-loader';
import {AlgorithmType} from '../model/algorithms/algorithm-type';

export default class ConfigurationService {
  private static readonly APP_KEY = 'HTML_OBFUSCATOR_USER_COFNIG';

  static checkIfConfigExists(name: string): boolean {
    return this.getConfigs().reduce((result: boolean, next: PreservedConfiguration) => next.name === name, false);
  }

  static clearUserConfigs(): void {
    localStorage.removeItem(ConfigurationService.APP_KEY);
  }

  static createConfig(chosenAlgorithm: any, chosenHtml: any, html: any, htmlConfig: any = null): ObfuscationConfig {
    return {
      chosenAlgorithm: chosenAlgorithm,
      chosenHtml: chosenHtml,
      html: html,
      htmlConfig: htmlConfig
    };
  }

  static createPreservedConfiguration(name: string, config: ObfuscationConfig): PreservedConfiguration {
    return {
      name: name,
      config: config
    };
  }

  static createUserConfig(name: string, config: ObfuscationConfig): PreservedConfiguration {
    return this.createPreservedConfiguration(name, config);
  }

  static getConfig(title: string): PreservedConfiguration | null {
    let config = null;
    this.getConfigs().forEach((element: any) => {
      if (element.title === title) {
        config = element.config;
      }
    });

    return config;
  }

  static getConfigs(): PreservedConfiguration[] {
    let result = [];
    let configs = localStorage.getItem(ConfigurationService.APP_KEY);
    if (configs) {
      result = JSON.parse(configs);
    }
    return result;
  }

  static getDefaultConfiguration(): PreservedConfiguration[] {
    return [
      this.createPreservedConfiguration(
        'HTML entities',
        this.createConfig(
          AlgorithmType.HTML_TO_HTML_ENTITIES,
          getLoadFileType(),
          loadTemplate(FileName.EXAMPLE1)
        )
      ),
      this.createPreservedConfiguration(
        'Base64',
        this.createConfig(
          AlgorithmType.HTML_TO_BASE64,
          getLoadFileType(),
          loadTemplate(FileName.EXAMPLE2)
        )
      )
    ];
  }

  static getInitialObfuscationConfig(): ObfuscationConfig {
    return {
      chosenAlgorithm: null,
      chosenHtml: null,
      html: null,
      htmlConfig: null
    };
  }

  static saveConfig(userConfig: any): void {
    if (localStorage.getItem(ConfigurationService.APP_KEY) == null) {
      localStorage.setItem(ConfigurationService.APP_KEY, JSON.stringify([userConfig]));
    } else {
      let list = this.getConfigs();
      list.push(userConfig);

      localStorage.setItem(ConfigurationService.APP_KEY, JSON.stringify(list));
    }

  }
}
