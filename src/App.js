import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Tabs, Tab, Row, Input, Collapsible, CollapsibleItem } from 'react-materialize';


var algorithms=[
  {name:'Html to Javascript',
value: '1'},
{name:'Html to Unicode characters',
value: '2'},
{name:'Html to overlapping layers',
value: '3'},
{name:'Combine 1 and 2',
value: '4'}
];

class App extends Component {



  // showAlgorithmDetails = false;
  // showFilePicker = false;

  constructor() {
    super();
  }

  showAlgorithmDetails = () => {

  }

  render() {
    return (
      <div>
        <header className="App">
          <h1>HTML obfuscator</h1>
        </header>
        <Tabs>
          <Tab title="Configuration" active>
            <h2>Algorithm</h2>
            <Row>
              <Input s={12} type='select' label="Select algorithm"  >
              
              {this.algorithms.map(item => (
                  <option key={item.value} value={item.value}>
                    {item.name}
                  </option>
                ))}

              </Input>
            </Row>
            <Collapsible popout>
              <CollapsibleItem header='Details' icon='notes'>
                1. Do this do that. <br />
                2. Do this do that. <br />
                3. Do this do that. <br />
                4. Do this do that. <br />
                5. Do this do that.
    <h3>How to use it on you page?</h3>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </CollapsibleItem>
            </Collapsible>
            <h2>HTML to obfuscate</h2>
            <Row>
              <Input s={12} type='select' label="HTML type" defaultValue='1'>
                <option value='1'>Default</option>
                <option value='2'>Load custom</option>
              </Input>
            </Row>
            <Row>
              <Input type="file" label="File" />
            </Row>
            <h3>Open in a new browser tab?</h3>
            <Row>
              <Input name='result-place' type='radio' value='yes' label='Yes' />
              <Input name='result-place' type='radio' value='no' label='No*' />
            </Row>
            * The reulst will be shown in a new tab 'Result'.
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
