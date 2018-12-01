import { saveConfig } from "../services/local-storage-service";

export function saveConfigReducer(prevState, userConfig) {
    saveConfig(userConfig);
    return prevState;
}