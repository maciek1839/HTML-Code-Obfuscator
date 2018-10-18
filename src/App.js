import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Icon, Tabs, Tab, Row, Input, Collapsible, CollapsibleItem } from 'react-materialize';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      algorithms: [
        {
          name: 'Html to Javascript',
          value: '1',
          details: {
            steps: ['1. Do this do that. ',
              '1. Do this do that. '],
            usage: 'example'
          }
        },
        {
          name: 'Html to Unicode characters',
          value: '2',
          details: {
            steps: [],
            usage: ''
          }
        },
        {
          name: 'Html to overlapping layers',
          value: '3',
          details: {
            steps: [],
            usage: ''
          }
        },
        {
          name: 'Combine 1 and 2',
          value: '4',
          details: {
            steps: [],
            usage: ''
          }
        }
      ], htymlTypes: [
        { id: 'default', value: "Default" },
        { id: 'custom', value: "Load custom" }
      ],
      userConfiguration: {
        algorithmType: null,
        algorithmDetails: null,
        htmlType: null,
        userCustomFile: null,
        openInNewBrowserTab: false
      }
    };

    this.handleChangeAlgorithms = this.handleChangeAlgorithms.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeHtmlType = this.handleChangeHtmlType.bind(this);
    this.handleOpenInNewBrowserTab = this.handleOpenInNewBrowserTab.bind(this);
  }

  handleChangeAlgorithms(event) {
    let uConfig = { ...this.state.userConfiguration }
    uConfig.algorithmType = event.target.value;
    uConfig.algorithmDetails = this.state.algorithms.filter(e => e.value === event.target.value)[0].details;
    this.setState({ userConfiguration: uConfig });
  }

  handleChangeHtmlType(event) {
    let uConfig = { ...this.state.userConfiguration }
    uConfig.htmlType = event.target.value;
    this.setState({ userConfiguration: uConfig });
  }

  handleSubmit(event) {
    //process
  }

  handleUserFile(event) {
    let file = event.target.files[0];
    let uConfig = { ...this.state.userConfiguration };
    uConfig.userCustomFile = file;
    this.setState({ userConfiguration: uConfig });
  }

  handleOpenInNewBrowserTab(event) {
    let openInNewBrowser = event.target.value;
    let uConfig = { ...this.state.userConfiguration };
    uConfig.openInNewBrowserTab = openInNewBrowser;
    this.setState({ userConfiguration: uConfig });
  }

  render() {
    return (
      <div>
        <header className="App">
          <h1>HTML obfuscator</h1>
        </header>
        <Tabs>
          <Tab title="Configuration" active>
            <Row>
              <h2>Algorithm</h2>
              <Row>
                <Input s={12} type='select' label="Select algorithm" defaultValue='' onChange={this.handleChangeAlgorithms}>
                  <option value="" disabled>Choose an algorithm</option>
                  {this.state.algorithms.map((item) =>
                    <option key={item.value} value={item.value}>{item.name}</option>
                  )}
                </Input>
              </Row>
              {this.state.userConfiguration.algorithmDetails != null ? <Collapsible popout>
                <CollapsibleItem header='Details' icon='notes'>
                  {this.state.userConfiguration.algorithmDetails.steps.map((step, index) =>
                    <span key={index}>{step}<br /> </span>
                  )}
                  <h3>How to use it on you page?</h3>
                  {this.state.userConfiguration.algorithmDetails.usage}
                </CollapsibleItem>
              </Collapsible> : null}
              <h2>HTML to obfuscate</h2>
              <Row>
                <Input s={12} type='select' label="HTML type" defaultValue='' onChange={this.handleChangeHtmlType}>
                  <option value="" disabled>Choose HTML</option>
                  {this.state.htymlTypes.map(type =>
                    <option key={type.id} value={type.id}>{type.value}</option>
                  )}
                </Input>
              </Row>
              {this.state.userConfiguration.htmlType === 'custom' ? <Row>
                <Input type="file" label="File" onChange={this.handleUserFile} />
              </Row> : null}
              <h3>Open in a new browser tab?</h3>
              <Row>
                <Input name='result-place' type='radio' value={true} label='Yes' checked={this.state.userConfiguration.openInNewBrowserTab==true} onClick={this.handleOpenInNewBrowserTab}/>
                <Input name='result-place' type='radio' value={false} label='No*' checked={this.state.userConfiguration.openInNewBrowserTab==false} onClick={this.handleOpenInNewBrowserTab} />
              </Row>
              * The reulst will be shown in a new tab 'Result'.
            <div className="center-align">
                <Button type="submit" onClick={this.handleSubmit}>Process<Icon left>autorenew</Icon></Button>
              </div>
            </Row>
          </Tab>
          <Tab title="HTML Preview">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.js</code> and save to reload.
          </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
          </a>
            </header>
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default App;
