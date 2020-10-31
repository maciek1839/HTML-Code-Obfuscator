import React, {Component} from 'react';
import './App.scss';
import {Col, Container, Nav, NavItem, NavLink, Row, TabContent, TabPane} from 'reactstrap';
import classnames from 'classnames';
import ConfigurationForm from "./components/config-form/config-form";
import HTMLPreview from "./components/html-preview/html-preview";
import SettingsTab from "./components/settings-tab";
import ObfuscationOutput from "./components/obfuscation-output/obfuscation-output";
import {ApplicationState, AppProps, getInitialState} from "./state/application-state"
import {Action} from "./actions/action";
import packageJson from '../package.json';
import GlobalReducer from './reducers/global-reducer';

class App extends Component<AppProps, ApplicationState> {

  constructor(props: AppProps) {
    super(props);
    this.state = getInitialState();
  }

  componentDidMount() {
    console.log(`Program version: ${packageJson.version}`);
  }

  reduceAction(action: Action) {
    this.setState(GlobalReducer.reduce(this.state, action));
  }

  render() {
    return (
      <Container>
        <div>
          <header>
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
                <Col>
                  <ConfigurationForm
                    algorithms={this.state.algorithms}
                    config={this.state.obfuscationConfig}
                    showHtmlTemplateModal={this.state.showHtmlTemplateModal}
                    callbackProcessAction={(e: any) => this.reduceAction(e)}
                  />
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="2">
              <Row>
                <Col>
                  <HTMLPreview
                    previewHtml={this.state.obfuscationConfig.html}
                    callbackProcessAction={(e: any) => this.reduceAction(e)}
                    htmlConfig={this.state.obfuscationConfig.htmlConfig}
                  />
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="3">
              <Row>
                <Col>
                  <ObfuscationOutput
                    config={this.state.outputObfuscationConfig}
                    callbackProcessAction={(e: any) => this.reduceAction(e)}
                  />
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="4">
              <Row>
                <Col>
                  <SettingsTab/>
                </Col>
              </Row>
            </TabPane>
          </TabContent>
        </div>
      </Container>
    );
  }

  toggle(tab: string) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
}

export default App;
