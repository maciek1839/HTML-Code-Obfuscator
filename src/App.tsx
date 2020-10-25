import React, {Component} from 'react';
import './App.scss';
import {Col, Container, Nav, NavItem, NavLink, Row, TabContent, TabPane} from 'reactstrap';
import classnames from 'classnames';
import ConfigurationForm from "./components/config-form";
import HTMLPreview from "./components/html-preview";
import SettingsTab from "./components/settings-tab";
import ObfuscationOutput from "./components/obfuscation-output";
import {algorithmReducer, htmlTypeFileReducer, htmlTypeReducer, loadConfigReducer, showResultReducer} from "./reducers/config-form-reducer";
import {EntryProps, EntryState, getInitialState} from "./model/app-initial-state"
import {ConfigFormActions} from "./actions/config-form"
import {GenerateHtmlModalActions} from "./actions/generate-html-modal-action";
import {closeModalReducer, generateHtmlReducer} from './reducers/generate-html-modal';
import {PreviewHtmlActions} from './actions/html-preview-actions';
import {regenerateHtmlReducer} from './reducers/preview-html-reducer';
import {ObfuscationOutputActions} from './actions/obfuscation-output-actions';
import {saveConfigReducer} from './reducers/obfuscation-output-reducer';
import {Action} from "./actions/actions";


class App extends Component<EntryProps, EntryState> {

    constructor(props: EntryProps) {
        super(props);
        this.state = getInitialState();
    }

    myGlobalReducer(action: Action) {
        let newState = null;
        switch (action.type) {
            case ConfigFormActions.SET_ALGORITHM:
                newState = algorithmReducer(this.state, action.payload);
                this.setState(newState);
                break;
            case ConfigFormActions.SET_HTML_TYPE:
                newState = htmlTypeReducer(this.state, action.payload);
                this.setState(newState);
                break;
            case ConfigFormActions.SET_HTML_FILE:
                newState = htmlTypeFileReducer(this.state, action.payload);
                this.setState(newState);
                break;
            case GenerateHtmlModalActions.CLOSE_MODAL:
                newState = closeModalReducer(this.state, action.payload);
                this.setState(newState);
                break;
            case GenerateHtmlModalActions.GENERATE_HTML:
                newState = generateHtmlReducer(this.state, action.payload);
                this.setState(newState);
                break;
            case ConfigFormActions.SHOW_RESULT:
                newState = showResultReducer(this.state);
                this.setState(newState);
                break;
            case PreviewHtmlActions.REGENERATE_HTML:
                newState = regenerateHtmlReducer(this.state, action.payload);
                this.setState(newState);
                break;
            case ObfuscationOutputActions.SAVE_CONFIG:
                newState = saveConfigReducer(this.state, action.payload);
                this.setState(newState);
                break;
            case ConfigFormActions.LOAD_CONFIG:
                newState = loadConfigReducer(this.state, action.payload);
                this.setState(newState);
                break;
            default:
                console.log(`No action type ${action.type} implemented!`);
        }
    }

    toggle(tab: string) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    render() {
        return (
            <Container>
                <div>
                    <header className="App">
                        <h1>HTML obfuscator</h1>
                    </header>
                    <Nav tabs>
                        <NavItem>
                            <NavLink
                                className={classnames({active: this.state.activeTab === '1'})}
                                onClick={() => {
                                    this.toggle('1');
                                }} href="#"
                            >
                                Configuration
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({active: this.state.activeTab === '2'})}
                                onClick={() => {
                                    this.toggle('2');
                                }}
                                href="#"
                                disabled={!this.state.obfuscationConfig.html}
                            >
                                HTML Preview
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({active: this.state.activeTab === '3'})}
                                onClick={() => {
                                    this.toggle('3');
                                }}
                                href="#"
                                disabled={!this.state.outputObfuscationConfig}
                            >
                                Result
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({active: this.state.activeTab === '4'})}
                                onClick={() => {
                                    this.toggle('4');
                                }}
                                href="#"
                            >
                                Settings
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent activeTab={this.state.activeTab}>
                        <TabPane tabId="1">
                            <Row>
                                <Col sm="12">
                                    <ConfigurationForm
                                        algorithms={this.state.algorithms}
                                        config={this.state.obfuscationConfig}
                                        showHtmlTemplateModal={this.state.showHtmlTemplateModal}
                                        callbackProcessAction={(e: any) => this.myGlobalReducer(e)}
                                    />
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tabId="2">
                            <Row>
                                <Col sm="12">
                                    <HTMLPreview
                                        previewHtml={this.state.obfuscationConfig.html}
                                        callbackProcessAction={(e: any) => this.myGlobalReducer(e)}
                                        htmlConfig={this.state.obfuscationConfig.htmlConfig}
                                    />
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tabId="3">
                            <Row>
                                <Col sm="12">
                                    <ObfuscationOutput
                                        config={this.state.outputObfuscationConfig}
                                        callbackProcessAction={(e: any) => this.myGlobalReducer(e)}
                                    />
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tabId="4">
                            <Row>
                                <Col sm="12">
                                    <SettingsTab/>
                                </Col>
                            </Row>
                        </TabPane>
                    </TabContent>
                </div>
            </Container>
        );
    }
}

export default App;
