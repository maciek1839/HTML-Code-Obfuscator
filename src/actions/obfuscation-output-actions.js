export function saveConfig(config){
    return {
        type: ObfuscationOutputActions.SAVE_CONFIG,
        payload: config
    };
}

export const ObfuscationOutputActions = {
    SAVE_CONFIG: 'SAVE_CONFIG'
}