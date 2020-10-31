import {ObfuscationConfig} from '../model/configs/obfuscation-config';
import {PreservedConfiguration} from '../model/configs/preserved-configuration';
import {AlgorithmType} from '../model/algorithms/algorithm-type';
import {HtmlFileType} from '../model/html-types';
import {FileName, loadTemplate} from '../utils/file-loader';

export default class ConfigurationFactory {
  static createConfig(algorithm: AlgorithmType,
                      htmlFileType: HtmlFileType,
                      html: string): ObfuscationConfig {
    return {
      algorithmType: algorithm,
      htmlFileType: htmlFileType,
      html: html
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

  static getDefaultConfiguration(): PreservedConfiguration[] {
    return [
      this.createPreservedConfiguration(
        'HTML entities',
        this.createConfig(
          AlgorithmType.HTML_TO_HTML_ENTITIES,
          HtmlFileType.LOAD_FILE,
          loadTemplate(FileName.EXAMPLE1)
        )
      ),
      this.createPreservedConfiguration(
        'Base64',
        this.createConfig(
          AlgorithmType.HTML_TO_BASE64,
          HtmlFileType.LOAD_FILE,
          loadTemplate(FileName.EXAMPLE2)
        )
      )
    ];
  }

  static isConfigurationComplete(config: ObfuscationConfig): boolean {
    return config &&
      config.algorithmType != null &&
      config.html != null &&
      config.htmlFileType != null
  }
}
