import React, {Component} from 'react';
import './App.css';
import {Tab, Tabs} from 'react-materialize';
import ConfigurationForm from "./tabs/config-form/ConfigForm";
import HTMLPreview from "./tabs/preview/HTMLPreview";
import ObfuscationOutput from "./tabs/obfuscation-output/ObfuscationOutput";
import {getDefaultAlgorithms} from "../enums/ALgorithmType";
import {SetAlgorithmReducer} from "../redux/reducers/AlgorithmReducer";

class App extends Component { 

    constructor(props) {
        super(props);
        this.state = this.initialState();
        // this.myGlobalReducer = this.myGlobalReducer.bind(this);
    }

    initialState(){
        return {
            algorithms: getDefaultAlgorithms(),
            previewHtml: null,
            obfuscationConfig: null,
            activeTab:1,
            setAlgorithm:null
        };
    }

    myGlobalReducer(action){
        switch(action.type){
            case 'SET_ALGORITHM':
                let newState=SetAlgorithmReducer(this.state, action.payload);
                this.setState({newState});
                break;
            default :
                console.log(`No action type ${action.type} implemented!`);
        }
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
                    <Tab title="Configuration" active={this.state.activeTab === 1}>
                        <ConfigurationForm 
                        algorithms={this.state.algorithms}
                        config={this.state.obfuscationConfig} 
                        callbackConfigurationForm={this.processDataFromConfigurationForm}
                        callbackProcessAction={e=> this.myGlobalReducer(e)}
                        />
                    </Tab>
                    <Tab title="HTML Preview" active={this.state.activeTab === 2} disabled={!this.state.previewHtml}>
                        <HTMLPreview previewHtml={this.state.previewHtml}/>
                    </Tab>
                    <Tab title="Result" active={this.state.activeTab === 3} disabled={!this.state.obfuscationConfig}>
                        {this.state.obfuscationConfig?<ObfuscationOutput config={this.state.obfuscationConfig}/>:null}
                    </Tab>
                </Tabs>
            </div>
        );
    }

    // shouldComponentUpdate(nextProps, nextState){
    //     console.log("1");
    //     console.log(this.state);
    //     console.log("2");
    //     console.log(nextState);
    //     return true;//!equals(nextProps, this.props); // equals() is your implementation
    //  }
    //react methods
    // shouldComponentUpdate() {
    //     return false;
    // }
}

export default App;
