import {Action} from "./actions";

export function saveConfigAction(config: any): Action {
    return {
        type: ObfuscationOutputActions.SAVE_CONFIG,
        payload: config
    };
}

export const ObfuscationOutputActions = {
    SAVE_CONFIG: 'SAVE_CONFIG'
};