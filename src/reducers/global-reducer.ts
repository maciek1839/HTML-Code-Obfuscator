import {Action} from '../actions/action';
import {ConfigFormActions} from '../actions/config-form';
import {algorithmReducer, htmlFileTypeReducer, htmlTypeFileReducer, loadConfigReducer, showResultReducer} from './config-form-reducer';
import {GenerateHtmlModalActions} from '../actions/generate-html-modal-action';
import {closeModalReducer, generateHtmlReducer} from './generate-html-modal-reducer';
import {PreviewHtmlActions} from '../actions/html-preview-actions';
import {regenerateHtmlReducer} from './preview-html-reducer';
import {ObfuscationOutputActions} from '../actions/obfuscation-output-actions';
import {saveConfigReducer} from './obfuscation-output-reducer';
import {ApplicationState} from '../state/application-state';

export default class GlobalReducer {
  static reduce(currentState: ApplicationState, action: Action): ApplicationState {
    switch (action.type) {
      case ConfigFormActions.SET_ALGORITHM:
        return algorithmReducer(currentState, action.payload);
      case ConfigFormActions.SET_HTML_TYPE:
        return htmlFileTypeReducer(currentState, action.payload);
      case ConfigFormActions.SET_HTML_FILE:
        return htmlTypeFileReducer(currentState, action.payload);
      case GenerateHtmlModalActions.CLOSE_MODAL:
        return closeModalReducer(currentState, action.payload);
      case GenerateHtmlModalActions.GENERATE_HTML:
        return generateHtmlReducer(currentState, action.payload);
      case ConfigFormActions.SHOW_RESULT:
        return showResultReducer(currentState);
      case PreviewHtmlActions.REGENERATE_HTML:
        return regenerateHtmlReducer(currentState, action.payload);
      case ObfuscationOutputActions.SAVE_CONFIG:
        return saveConfigReducer(currentState, action.payload);
      case ConfigFormActions.LOAD_CONFIG:
        return loadConfigReducer(currentState, action.payload);
      default:
        throw `No action type ${action.type} implemented!`;
    }
  }
}
