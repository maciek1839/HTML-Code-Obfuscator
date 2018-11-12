import {Button, Collapsible, CollapsibleItem, Icon, Input, Row, Modal} from 'react-materialize';
import React, {Component} from "react";
import HtmlType from '../../../enums/HtmlType';
import generateHTML from '../../services/HTMLGeneratorService';

class ConfigurationForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            choosenAlgorithm: null,
            htmlType: null,
            customHtml:null,
            isOpenModal: false,
            generatedHTMlConfig:{
                headers: 1,
                paragraphs:1,
                buttons:1,
                links:1,
                inputs:1,
                images:1
            }
        };

        this.handleChangeAlgorithms = this.handleChangeAlgorithms.bind(this);
        this.handleChangeHtmlType = this.handleChangeHtmlType.bind(this);
        this.handleUserFile = this.handleUserFile.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.changeHeaders = this.changeHeaders.bind(this);
    }
    
    handleChangeAlgorithms(event) {
        let algorithmName=event.target.value;
        let newChoosenAlgorithm = this.props.algorithms.filter(e => e.value === algorithmName)[0];
        this.setState({choosenAlgorithm: newChoosenAlgorithm});
    }

    handleChangeHtmlType(event) {
       
        let newHtmlType = event.target.value;
        console.log(newHtmlType);
        if(newHtmlType === 'default'){
            this.setState({isOpenModal: true});
        } else {
            this.setState({htmlType: newHtmlType});
        }
    }

    handleUserFile(event) {
        let file = event.target.files[0];
        this.setState({customHtml: file});
        this.props.callbackConfigurationFormPreview(file);
    }

    handleSubmit(event) {
        event.preventDefault();
        let htmlContent=null;
        let htmltypeKey=Object.keys(HtmlType).find(key => HtmlType[key]===HtmlType.default);
        console.log(htmltypeKey);
        // if (this.state.htmlType === 'default'){
            // htmlContent = this.loadTemplate();
            htmlContent=generateHTML(this.state.generatedHTMlConfig);
            console.log(htmlContent);
        // } else {
        //     htmlContent=this.state.customHtml;
        // }
        let config = {
            algorithm:this.state.choosenAlgorithm,
            html:htmlContent
        };
        console.log(config);
        this.props.callbackConfigurationForm(config);
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

    renderHtmlTypesList = () => {
        let list = [];
        for (const htmlKey of Object.keys(HtmlType)) {
          list.push(<option key={htmlKey} value={htmlKey}>{HtmlType[htmlKey]}</option>)
        }
        return list;
      }

    generateHTMLFromPopup(){
        this.setState({isOpenModal: false});
    }

    changeHeaders(event, type){
        console.log(type); 
        console.log(event.target.value);
        let prevConfig = {...this.state.generatedHTMlConfig};
        switch(type){
            case 'Headers':
                prevConfig.headers= event.target.value;
                this.setState({generatedHTMlConfig: prevConfig});
            break;
            case 'Paragraphs':
                prevConfig.paragraphs= event.target.value;
                this.setState({generatedHTMlConfig: prevConfig});
            break;
            case 'Buttons':
            prevConfig.buttons= event.target.value;
            this.setState({generatedHTMlConfig: prevConfig});
            break;
            case 'Links':
            prevConfig.links= event.target.value;
            this.setState({generatedHTMlConfig: prevConfig});
            break;
            case 'Inputs':
            prevConfig.inputs= event.target.value;
            this.setState({generatedHTMlConfig: prevConfig});
            break;
            case 'Images':
            prevConfig.images= event.target.value;
            this.setState({generatedHTMlConfig: prevConfig});
            break;
        }
    }

    render() {
        return (
                <Row>
                    {/* todo 12.11.2018 extract to another component! */}
                    <Modal open={this.state.isOpenModal} header='Generate Html'
                     actions={
                        <div>
                          <Button modal="close" waves="light" className="red lighten-2">Cancel</Button> 
                          <Button modal="close" waves="light" className="blue" onClick={ this.generateHTMLFromPopup.bind(this) }><Icon left>build</Icon>Generate</Button>
                        </div>
                      }
                    >
                        <p>Choose HTML elements for generated HTML.</p> 
                        <Input type='number' label='Headers' value ={this.state.generatedHTMlConfig.headers} onChange={e=>this.changeHeaders(e,'Headers')}/>
                        <Input type='number' label='Paragraphs' value ={this.state.generatedHTMlConfig.paragraphs} onChange={e=>this.changeHeaders(e,'Paragraphs')}/>
                        <Input type='number' label='Buttons' value ={this.state.generatedHTMlConfig.buttons} onChange={e=>this.changeHeaders(e,'Buttons')}/>
                        <Input type='number' label='Links' value ={this.state.generatedHTMlConfig.links} onChange={e=>this.changeHeaders(e,'Links')}/>
                        <Input type='number' label='Inputs' value ={this.state.generatedHTMlConfig.inputs} onChange={e=>this.changeHeaders(e,'Inputs')}/>
                        <Input type='number' label='Images' value ={this.state.generatedHTMlConfig.images} onChange={e=>this.changeHeaders(e,'Images')}/>
                    </Modal>
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
                            {this.renderHtmlTypesList()}
                        </Input>
                    </Row>
                    {this.state.htmlType === 'custom' ? <Row>
                        <Input type="file" label="File" onChange={this.handleUserFile}/>
                    </Row> : null}
                    <div className="center-align">
                        <Button type={"button"} onClick={this.handleSubmit}>Process<Icon
                            left>autorenew</Icon></Button>
                    </div>
                </Row>
            );
    }
}

export default ConfigurationForm;