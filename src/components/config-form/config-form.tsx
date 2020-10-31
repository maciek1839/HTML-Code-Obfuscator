import React, {Component} from "react";
import {Container, Form} from 'reactstrap';
import GenerateHtmlModal from "../generate-html-modal";
import {NotificationContainer} from 'react-notifications';
import AlgorithmService from '../../services/algorithm-service';
import {ObfuscationAlgorithm} from '../../model/algorithms/obfuscation-algorithm';
import {ObfuscationConfig} from '../../model/configs/obfuscation-config';
import AlgorithmDetailsView from './algorithm-details-view/algorithm-details-view';
import HtmlTypesView from './html-types-view/html-types-view';
import AlgorithmSelectView from './algorithm-select-view/algorithm-select-view';
import SubmitBtnView from './submit-btn-view/submit-btn-view';
import LoadConfigurationView from './load-configuration-view/load-configuration-view';

export interface ConfigurationFormProps {
  algorithms: ObfuscationAlgorithm[];
  callbackProcessAction: any;
  config: ObfuscationConfig;
  showHtmlTemplateModal: boolean;
}

class ConfigurationForm extends Component<ConfigurationFormProps> {

  constructor(props: Readonly<ConfigurationFormProps>) {
    super(props);
  }

  render() {
    let config = this.props.config;
    let algorithmHtmlSelectValue = config.algorithmType != null ? config.algorithmType : 0;
    let algorithmDetails = config.algorithmType ? AlgorithmService.getAlgorithm(config.algorithmType) : undefined;
    let htmlSelectValue = config.htmlFileType != null ? config.htmlFileType : 0;
    return (
      <Container>
        <NotificationContainer/>
        <GenerateHtmlModal
          showHtmlTemplateModal={this.props.showHtmlTemplateModal}
          callbackProcessAction={this.props.callbackProcessAction}>
        </GenerateHtmlModal>
        <Form className="element-m-spacing-t">
          <LoadConfigurationView {...this.props}/>
          <AlgorithmSelectView algorithmHtmlSelectValue={algorithmHtmlSelectValue} {...this.props} />
          <AlgorithmDetailsView algorithm={algorithmDetails}/>
          <HtmlTypesView htmlSelectValue={htmlSelectValue} {...this.props}/>
          <SubmitBtnView {...this.props} />
        </Form>
      </Container>
    );
  }
}

export default ConfigurationForm;
