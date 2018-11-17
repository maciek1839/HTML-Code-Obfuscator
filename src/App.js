import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import ConfigurationForm from "./components/config-form";
import HTMLPreview from "./components/html-preview";
import ObfuscationOutput from "./components/obfuscation-output";
import { algorithmReducer, htmlTypeReducer, htmlTypeFileReducer, showResultReducer } from "./reducers/config-form-reducer";
import { getInitialState } from "./model/app-initial-state"
import { ConfigFormActions } from "./actions/config-form"
import { GenerateHtmlModalActions } from "./actions/generate-html-modal-action";
import { closeModalReducer, generateHtmlReducer } from './reducers/generate-html-modal';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = getInitialState();
  }

  myGlobalReducer(action) {
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
        newState = showResultReducer(this.state, action.payload);
        this.setState(newState);
        break;
      default:
        console.log(`No action type ${action.type} implemented!`);
    }
  }

  processDataFromConfigurationForm = (config) => {
    this.setState({
      obfuscationConfig: config,
      doObfuscation: true,
      activeTab: 3,
      previewHtml: config.html
    });
  }

  toggle(tab) {
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
            <NavItem >
              <NavLink
                className={classnames({ active: this.state.activeTab === '1' })}
                onClick={() => { this.toggle('1'); }} href="#"
              >
                Configuration
            </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === '2' })}
                onClick={() => { this.toggle('2'); }}
                href="#"
                disabled={this.state.obfuscationConfig.html ? null : true}
              >
                HTML Preview
            </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === '3' })}
                onClick={() => { this.toggle('3'); }}
                href="#"
                disabled={this.state.outputObfuscationConfig ? null : true}
              >
                Result
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
                    callbackConfigurationForm={this.processDataFromConfigurationForm}
                    showHtmlTemplateModal={this.state.showHtmlTemplateModal}
                    callbackProcessAction={e => this.myGlobalReducer(e)}
                  />
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="2">
              <Row>
                <Col sm="12">
                  <HTMLPreview previewHtml={this.state.obfuscationConfig.html} />
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="3">
              <Row>
                <Col sm="12">
                  <ObfuscationOutput config={this.state.outputObfuscationConfig} />
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
