import { saveConfig } from "../services/preserved-configuration.service";


export function saveConfigReducer(prevState:any, userConfig:any) {
    saveConfig(userConfig);
    return prevState;
}