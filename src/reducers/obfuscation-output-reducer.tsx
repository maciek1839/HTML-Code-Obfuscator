import ConfigurationService from '../services/configuration-service';

export function saveConfigReducer(prevState: any, userConfig: any) {
  ConfigurationService.saveConfig(userConfig);
  return prevState;
}
