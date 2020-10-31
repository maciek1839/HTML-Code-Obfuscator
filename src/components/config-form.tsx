import React, {ChangeEvent, Component} from "react";
import HtmlTypes, {getLoadFileType} from '../model/html-types';
import {loadConfigAction, setAlgorithm, setHtmlFile, setHtmlType, showResult} from '../actions/config-form';
import {Button, Col, Collapse, Container, Form, FormGroup, Input, Label, ListGroup, ListGroupItem} from 'reactstrap';
import GenerateHtmlModal from "./generate-html-modal";
import {NotificationContainer, NotificationManager} from 'react-notifications';
import AlgorithmService from '../services/algorithm-service';
import ConfigurationService from '../services/configuration-service';
import {ObfuscationAlgorithm} from '../model/algorithms/obfuscation-algorithm';
import {ObfuscationConfig} from '../model/configs/obfuscation-config';

export interface ConfigurationFormProps {
  algorithms: ObfuscationAlgorithm[];
  callbackProcessAction: any;
  config: ObfuscationConfig;
  showHtmlTemplateModal: boolean;
}

interface ConfigurationFormState {
  showAlgorithmDetails: boolean
}

class ConfigurationForm extends Component<ConfigurationFormProps, ConfigurationFormState> {

  constructor(props: ConfigurationFormProps) {
    super(props);
    this.state = {
      showAlgorithmDetails: false
    };
  }

  handleChangeAlgorithms = (event: ChangeEvent<HTMLInputElement>) => {
    let newChosenAlgorithm = event.target.value;
    this.props.callbackProcessAction(setAlgorithm(newChosenAlgorithm));
  };

  handleChangeHtmlType = (event: ChangeEvent<HTMLInputElement>) => {
    let newHtmlType = event.target.value;
    this.props.callbackProcessAction(setHtmlType(newHtmlType));
  };

  handleLoadConfig = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.trim().length>0) {
      let preservedConfig = JSON.parse(event.target.value);
      this.props.callbackProcessAction(loadConfigAction(preservedConfig.config));
      NotificationManager.success('Successfully load config!', preservedConfig.name);
    }
  };

  handleSubmit = () => {
    this.props.callbackProcessAction(showResult());
  };

  handleUserFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.onload = (evt: any) => {
      this.props.callbackProcessAction(setHtmlFile(evt.target.result));
    };
    reader.readAsText(file, "UTF-8");
  };

  openCloseDetails = () => {
    this.setState({
      showAlgorithmDetails: !this.state.showAlgorithmDetails
    });
  };

  render() {
    let config = this.props.config;
    let selectedAlgorithmInputIndex = config.chosenAlgorithm ? config.chosenAlgorithm.type : 0;
    let algorithmDetails = AlgorithmService.getAlgorithm(selectedAlgorithmInputIndex);
    let selectedHtml = config.chosenHtml != null ? parseInt(config.chosenHtml) : 0;
    let isDisabledSubmit = !(config && selectedAlgorithmInputIndex && selectedHtml != null && config.html);
    return (
      <Container>
        <NotificationContainer/>
        <GenerateHtmlModal
          showHtmlTemplateModal={this.props.showHtmlTemplateModal}
          callbackProcessAction={this.props.callbackProcessAction}>
        </GenerateHtmlModal>
        <Form className="element-m-spacing-t">
          <FormGroup row>
            <Col sm={9}>
              Load configuration
            </Col>
            <Col sm={3}>
              <Input type="select" onChange={this.handleLoadConfig}>
                <option key={0} value={null}>&nbsp;</option>
                <option key={1} value={null} disabled={true}>default</option>
                {
                  ConfigurationService.getDefaultConfiguration().map(elem =>
                    <option key={elem.name} value={JSON.stringify(elem)}>{elem.name}</option>
                  )
                }
                <option key={2} value={null} disabled={true}>saved</option>
                {
                  ConfigurationService.getConfigs().map(elem=>
                    <option key={elem.name} value={JSON.stringify(elem)}>{elem.name}</option>
                  )
                }
              </Input>
            </Col>
          </FormGroup>
          <FormGroup row className="element-m-spacing-t">
            <Label sm={2}>Algorithm</Label>
            <Col sm={10}>
              <Input value={selectedAlgorithmInputIndex} type="select" name="select"
                     onChange={this.handleChangeAlgorithms}>
                <option key={0} value={null}>&nbsp;</option>
                {this.props.algorithms.map((item: any) =>
                  <option key={item.type} value={item.type}>{item.name}</option>
                )}
              </Input>
            </Col>
          </FormGroup>
          {algorithmDetails ? <FormGroup>
            <Col sm={{size: 2, offset: 10}}>
              <Button color="primary" onClick={this.openCloseDetails} style={{marginBottom: '1rem'}}>Show
                                                                                                     details</Button>
            </Col>
            <Collapse isOpen={this.state.showAlgorithmDetails}>
              <ListGroup flush>
                {algorithmDetails.details.steps.map((step: any, index: any) =>
                  <ListGroupItem key={index}>{index + 1}. {step}</ListGroupItem>
                )}
              </ListGroup>
            </Collapse>
          </FormGroup> : null}

          <FormGroup row>
            <Label sm={2}>HTML to obfuscate</Label>
            <Col sm={10}>
              <Input value={selectedHtml} type="select" name="select"
                     onChange={this.handleChangeHtmlType}>
                <option key={0} value={null}>&nbsp;</option>
                {this.renderHtmlTypesList()}
              </Input>
            </Col>
            <Col sm={12}>
              {selectedHtml === getLoadFileType() ?
                <Input type="file" label="File" onChange={this.handleUserFile}/>
                : null}
            </Col>
          </FormGroup>
          <FormGroup check row>
            <Col sm={{size: 2, offset: 10}}>
              <Button type="button" disabled={isDisabledSubmit} className="btn btn-success"
                      onClick={this.handleSubmit}>Submit</Button>
            </Col>
          </FormGroup>
        </Form>
      </Container>
    );
  }

  renderHtmlTypesList = () => {
    const list = [];
    for (let htmlType of HtmlTypes) {
      list.push(<option key={htmlType.key} value={htmlType.key}>{htmlType.value}</option>)
    }
    return list;
  };
}

export default ConfigurationForm;
