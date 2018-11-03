import React, {Component} from 'react';
import './App.css';
import {Button, Card, Collapsible, CollapsibleItem, Icon, Input, Row, Tab, Tabs} from 'react-materialize';
import ConfigurationForm from "./components/tabs/config-form/ConfigForm";
import HTMLPreview from "./components/tabs/preview/HTMLPreview";
import ObfuscationOutput from "./components/tabs/obfuscation-output/ObfuscationOutput";
import htmlBeautify from 'html-beautify'

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            //export to enum
            algorithms: [
                {
                    name: 'Html to Javascript',
                    value: '1',
                    details: {
                        steps: [
                            'Split HTML file line by line.',
                            'Replace white characters.',
                            'Create function which add lines to document using document.write function.']
                    }
                },
                {
                    name: 'Html to Unicode characters',
                    value: '2',
                    details: {
                        steps: [
                            'Create js function encoding characters to Unicode characters.',
                            'Create decoding function.',
                            'Add output from decoding function to HTML.'
                        ]
                    }
                },
                {
                    name: 'Html to escape characters',
                    value: '3',
                    details: {
                        steps: [
                            'Change endcoding using escape javascript function.',
                            'Decode using unescape javascript function.',
                            'Add element to HTML.'
                        ]
                    }
                },
                {
                    name: 'Using own encoding and decoding function. [NOT IMPLEMENTED YET]',
                    value: '4',
                    details: {
                        steps: [
                            'Encode HTML using own function.',
                            'Save encoded content into js variable.',
                            'Decode using own decoding function.',
                            'Add element to HTML document.'
                        ]
                    }
                },
                {
                    name: 'Combine above methods [NOT IMPLEMENTED YET]',
                    value: '5',
                    details: {
                        steps: ['To be done...']
                    }
                }
            ],
            previewHtml: null,
            obfuscationConfig: null,
            activeTab:1
        };
    }

    processDataFromConfigurationForm = (config)=>{
        console.info(config);
        this.setState({
            obfuscationConfig: config,
            doObfuscation: true,
            activeTab:3,
            previewHtml: config.html
        });
    }
    
    render() {
        return (
            <div>
                <header className="App">
                    <h1>HTML obfuscator</h1>
                </header>
                <Tabs>
                    <Tab title="Configuration" active={this.state.activeTab == 1}>
                        <ConfigurationForm 
                        algorithms={this.state.algorithms} 
                        callbackConfigurationForm={this.processDataFromConfigurationForm}/>
                    </Tab>
                    <Tab title="HTML Preview" active={this.state.activeTab == 2} disabled={!this.state.previewHtml}>
                        <HTMLPreview previewHtml={this.state.previewHtml}/>
                    </Tab>
                    <Tab title="Result" active={this.state.activeTab == 3} disabled={!this.state.obfuscationConfig}>
                        <ObfuscationOutput config={this.state.obfuscationConfig}/>
                    </Tab>
                </Tabs>
            </div>
        );
    }
    //react methods
    // shouldComponentUpdate() {
    //     return false;
    // }
}

export default App;
