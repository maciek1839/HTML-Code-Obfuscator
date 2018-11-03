import {Button, Collapsible, CollapsibleItem, Icon, Input, Row, Tab} from 'react-materialize';
import React, {Component} from "react";

class ConfigurationForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            choosenAlgorithm: null,
            htmlType: null,
            customHtml:null
        };

        this.handleChangeAlgorithms = this.handleChangeAlgorithms.bind(this);
        this.handleChangeHtmlType = this.handleChangeHtmlType.bind(this);
        this.handleUserFile = this.handleUserFile.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChangeAlgorithms(event) {
        let algorithmName=event.target.value;
        let newChoosenAlgorithm = this.props.algorithms.filter(e => e.value === algorithmName)[0];
        this.setState({choosenAlgorithm: newChoosenAlgorithm});
    }

    handleChangeHtmlType(event) {
        let newHtmlType = event.target.value;
        this.setState({htmlType: newHtmlType});
    }

    handleUserFile(event) {
        let file = event.target.files[0];
        this.setState({customHtml: file});
    }

    handleSubmit(event) {
        let htmlContent=null;
        if (this.state.htmlType == 'default'){
            htmlContent = this.loadTemplate();
        } else {
            htmlContent=this.state.customHtml;
        }
        let config = {
            algorithm:this.state.choosenAlgorithm,
            html:htmlContent
        };
        this.props.callbackConfigurationForm(config);
//         switch (this.state.userConfiguration.algorithmType) {
//             case '2':
//                 let escapedHtml = escape(this.state.userConfiguration.previewHtml);
//                 console.log(escapedHtml);
//                 let unescapedHtml = unescape(escapedHtml);
//                 console.log(unescapedHtml);
//                 let codeToPlaceOnWebsite =
//                     `<script>
// document.write(unescape('${escapedHtml}'))
// </script>`
//                 let uConfig = {...this.state.userConfiguration};
//                 uConfig.htmlDeobfuscator = codeToPlaceOnWebsite;
//                 this.setState({userConfiguration: uConfig});
//                 break;
//         }

    }

    loadTemplate() {
        let loadedTemplate = null;
        let file = 'html-templates/example.html';
        let request = new XMLHttpRequest();
        request.open("GET", file, false);
        request.send(null);
        if (request.status === 200) {
            loadedTemplate = request.responseText;
        }
        return loadedTemplate;
    }

    render() {
        return (
                <Row>
                    <h2>Algorithm</h2>
                    <Row>
                        <Input s={12} type='select' label="Select algorithm" defaultValue=''
                               onChange={this.handleChangeAlgorithms}> 
                            <option value="" disabled>Choose an algorithm</option>
                            {this.props.algorithms.map((item) =>
                                <option key={item.value} value={item.value}>{item.name}</option>
                            )}
                        </Input>
                    </Row>
                    {this.state.choosenAlgorithm ? <Collapsible popout>
                        <CollapsibleItem header='Details' icon='notes'>
                        <ol>
                            {this.state.choosenAlgorithm.details.steps.map((step, index) =>
                                <li key={index}>{step}</li>
                            )}
                        </ol>
                        </CollapsibleItem>
                    </Collapsible> : null}
                    <h2>HTML to obfuscate</h2>
                    <Row>
                        <Input s={12} type='select' label="HTML type" defaultValue=''
                               onChange={this.handleChangeHtmlType}>
                            <option value="" disabled>Choose HTML</option>
                            {this.props.htmlTypes.map(type =>
                                <option key={type.id} value={type.id}>{type.value}</option>
                            )}
                        </Input>
                    </Row>
                    {this.state.htmlType === 'custom' ? <Row>
                        <Input type="file" label="File" onChange={this.handleUserFile}/>
                    </Row> : null}
                    <div className="center-align">
                        <Button type="submit" onClick={this.handleSubmit}>Process<Icon
                            left>autorenew</Icon></Button>
                    </div>
                </Row>
            );
    }
}

export default ConfigurationForm;