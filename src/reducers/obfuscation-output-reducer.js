import { saveConfig } from "../services/preserved-configuration.service";


export function saveConfigReducer(prevState, userConfig) {
    saveConfig(userConfig);
    return prevState;
}