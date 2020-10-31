import {ObfuscationConfig} from '../model/configs/obfuscation-config';
import {PreservedConfiguration} from '../model/configs/preserved-configuration';

export default class ConfigurationService {
  private static readonly APP_KEY = 'HTML_OBFUSCATOR_USER_COFNIG';

  static checkIfConfigExists(name: string): boolean {
    return this.loadConfigs().reduce((result: boolean, next: PreservedConfiguration) => next.name === name, false);
  }

  static clearUserConfigs(): void {
    localStorage.removeItem(ConfigurationService.APP_KEY);
  }

  static getInitialObfuscationConfig(): ObfuscationConfig {
    return {};
  }

  static loadConfigs(): PreservedConfiguration[] {
    let result = [];
    let configs = localStorage.getItem(ConfigurationService.APP_KEY);
    if (configs) {
      result = JSON.parse(configs);
    }
    return result;
  }

  static saveConfig(userConfig: any): void {
    if (localStorage.getItem(ConfigurationService.APP_KEY) == null) {
      localStorage.setItem(ConfigurationService.APP_KEY, JSON.stringify([userConfig]));
    } else {
      let list = this.loadConfigs();
      list.push(userConfig);
      localStorage.setItem(ConfigurationService.APP_KEY, JSON.stringify(list));
    }
  }
}
