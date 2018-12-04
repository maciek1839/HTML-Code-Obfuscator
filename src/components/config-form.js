import React, { Component } from "react";
import HtmlType, { getLoadFileType } from '../model/enums/html-type';
import { setAlgorithm, setHtmlType, setHtmlFile, showResult, loadConfigAction } from '../actions/config-form';
import { Collapse, Button, Form, FormGroup, Label, Input, Col, Container, ListGroupItem, ListGroup } from 'reactstrap';
import GenerateHtmlModal from "./generate-html-modal";
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { getDefaultConfiguration, getConfigs} from "../services/preserved-configuration.service";
import { getAlgorithm } from "../model/enums/algorithm-type";

class ConfigurationForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showAlgorithmDetails: false,

        };
    }

    openCloseDetails = () => {
        this.setState({
            showAlgorithmDetails: !this.state.showAlgorithmDetails
        });
    }

    handleChangeAlgorithms = (event) => {
        let newChoosenAlgorithm = event.target.value;
        this.props.callbackProcessAction(setAlgorithm(newChoosenAlgorithm));
    }

    handleChangeHtmlType = (event) => {
        let newHtmlType = event.target.value;
        this.props.callbackProcessAction(setHtmlType(newHtmlType));
    }

    handleUserFile = (event) => {
        let file = event.target.files[0];
        let reader = new FileReader();
        reader.onload = (evt) => {
            this.props.callbackProcessAction(setHtmlFile(evt.target.result));
        };
        reader.readAsText(file, "UTF-8");
    }

    handleSubmit = () => {
        this.props.callbackProcessAction(showResult());
    }

    renderHtmlTypesList = () => {
        let list = [];
        for (var i = 0; i < HtmlType.length; i++) {
            let element = HtmlType[i];
            list.push(<option key={element.id} value={element.id}>{element.value}</option>)
        }
        return list;
    }

    renderConfigurations = () =>{
        let elements = [];
        elements.push(<option key={0} value={null}></option>);
        elements.push(<option key={1} value={null} disabled={true}>default</option>);
        getDefaultConfiguration().forEach(elem => {
            elements.push(<option key={elem.name} value={JSON.stringify(elem)}>{elem.name}</option>)
        });
        elements.push(<option key={2} value={null} disabled={true}>saved</option>);
        getConfigs().forEach(elem => {
            elements.push(<option key={elem.name} value={JSON.stringify(elem)}>{elem.name}</option>)
        });

        return elements;
    }

    handleLoadConfig = (event) => {
        if (event.target.value) {
            let preservedConfig=JSON.parse(event.target.value);
            this.props.callbackProcessAction(loadConfigAction(preservedConfig.config));
            NotificationManager.success('Successfully load config!', preservedConfig.name);
        }
    }

    render() {
        let config = this.props.config;
        let selectedAlgorithm = config.choosenAlgorithm ? config.choosenAlgorithm : 0;
        let algorithmDetails = getAlgorithm(selectedAlgorithm);
        let selectedHtml = config.choosenHtml != null ? parseInt(config.choosenHtml) : 0;
        let isDisabledSubmit = !(config && selectedAlgorithm && selectedHtml != null && config.html);
        return (
            <Container>
                <NotificationContainer />
                <GenerateHtmlModal showHtmlTemplateModal={this.props.showHtmlTemplateModal}
                    callbackProcessAction={e => this.props.callbackProcessAction(e)}>
                </GenerateHtmlModal>
                <Form>
                    <FormGroup row></FormGroup>
                    <FormGroup row>

                        <Col sm={9}>
                            Load configuration
                    </Col>
                        <Col sm={3}>
                            <Input type="select" onChange={this.handleLoadConfig}>
                                {this.renderConfigurations()}
                            </Input>
                        </Col>
                    </FormGroup>
                    <FormGroup row></FormGroup>
                    <FormGroup row>
                        <Label sm={2}>Algorithm</Label>
                        <Col sm={10}>
                            <Input value={selectedAlgorithm} type="select" name="select" onChange={this.handleChangeAlgorithms}>
                                <option key={0} value={null}></option>
                                {this.props.algorithms.map((item) =>
                                    <option key={item.value} value={item.value}>{item.name}</option>
                                )}
                            </Input>
                        </Col>
                    </FormGroup>
                    {algorithmDetails ? <FormGroup>
                        <Col sm={{ size: 2, offset: 10 }}>
                            <Button color="primary" onClick={this.openCloseDetails} style={{ marginBottom: '1rem' }}>Show details</Button>
                        </Col>
                        <Collapse isOpen={this.state.showAlgorithmDetails}>
                            <ListGroup flush>
                                {algorithmDetails.details.steps.map((step, index) =>
                                    <ListGroupItem key={index}>{index + 1}. {step}</ListGroupItem>
                                )}
                            </ListGroup>
                        </Collapse>
                    </FormGroup> : null}

                    <FormGroup row>
                        <Label sm={2}>HTML to obfuscate</Label>
                        <Col sm={10}>
                            <Input value={selectedHtml} type="select" name="select" onChange={this.handleChangeHtmlType}>
                                <option key={0} value={null}></option>
                                {this.renderHtmlTypesList()}
                            </Input>
                        </Col>
                        <Col sm={12}>
                            {selectedHtml === getLoadFileType() ?
                                <Input type="file" label="File" onChange={this.handleUserFile} />
                                : null}
                        </Col>
                    </FormGroup>
                    <FormGroup check row>
                        <Col sm={{ size: 2, offset: 10 }}>
                            <Button type="button" disabled={isDisabledSubmit} className="btn btn-success" onClick={this.handleSubmit}>Submit</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </Container>
        );
    }
}

export default ConfigurationForm;