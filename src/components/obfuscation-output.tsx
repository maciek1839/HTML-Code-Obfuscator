import React, {Component} from "react";
import htmlBeautify from 'html-beautify'
import {Button, Col, Container, Input, Row} from 'reactstrap';
import {saveConfigAction} from "../actions/obfuscation-output-actions";
import {NotificationContainer, NotificationManager} from 'react-notifications';
import {AlgorithmType} from "../model/algorithms/algorithm-type";
import ConfigurationService from '../services/configuration-service';
import HtmlEncoderService from '../services/html-encoder-service';

export interface ObfuscationOutputProps {
  callbackProcessAction: any;
  config: any;
}

class ObfuscationOutput extends Component<ObfuscationOutputProps, any> {

  constructor(props: ObfuscationOutputProps) {
    super(props);
    this.state = {
      html: '',
      result: '',
      config: null,
      readyToEdit: false,
      configToSaveName: ''
    }
  }

  componentDidUpdate() {
    if (this.props.config !== null && (this.state.html === '' || this.isConfigurationChanged(this.state.config, this.props.config))) {
      this.setState({
        html: htmlBeautify(this.props.config.html),
        result: this.processHtml(this.props.config.html),
        config: this.props.config
      });
    }
  }

  componentWillReceiveProps(props: any) {
    if (this.state.config != null && props.config != null) {
      this.setState({
        config: this.props.config,
        result: this.processHtml(this.props.config.html, props.config.choosenAlgorithm)
      });

    }
  }

  handleChange = (evt: any) => {
    let changedHtml = evt.target.value;
    this.setState({
      result: this.processHtml(changedHtml),
      html: changedHtml
    });
  };

  isConfigurationChanged(oldConfig: any, newConfig: any) {
    return oldConfig != null && newConfig != null && (oldConfig.choosenAlgorithm.value !== newConfig.choosenAlgorithm.value);
  }

  onClickTextarea() {
    this.setState({html: this.state.html + " "})
  }

  processHtml(html: string, algorithmType: string = this.props.config.choosenAlgorithm) {
    let result = null;
    switch (algorithmType) {
      case AlgorithmType.HTML_TO_JAVASCRIPT:
        let htmlToJs = HtmlEncoderService.htmlToJavascript(html);
        result =
          `document.write(eval('${htmlToJs}'))`;
        break;
      case AlgorithmType.HTML_TO_BASE64:
        let encodedHtml = btoa(escape(html));
        result =
          `document.write(unescape(atob('${encodedHtml}')) `;
        break;
      case AlgorithmType.HTML_TO_HEX:
        let hex = HtmlEncoderService.toHex(html);
        result =
          `document.write(fromHex('${hex}'))`;
        break;
      case AlgorithmType.HTML_TO_HTML_ENTITIES:
        let ascii = HtmlEncoderService.toHtmlEntities(html);
        result =
          `document.write(fromHtmlEntities('${ascii}'))`;
        break;
      case AlgorithmType.HTML_ESCAPE_CHARACTERS:
        let escapedHtml = escape(html);
        result =
          `document.write(unescape('${escapedHtml}'))`;
        break;
      case AlgorithmType.HTML_ENCODE_WITH_OWN_FUN:
        let customEncoding = HtmlEncoderService.encodeUsingOwnFunction(html);
        result =
          `document.write(ownDecodingFunction('${customEncoding}'))`;
        break;
      default:
        console.log("Not implemented method for obfuscation algorithm!");
    }
    return result;
  }

  render() {
    return (
      <div>
        <NotificationContainer/>
        <Container>
          <Row style={{marginTop: 5}}>
            <Col sm={8}>

            </Col>
            <Col sm={2}>
              <Input type="text" placeholder="Enter config name..." value={this.state.configToSaveName}
                     onChange={this.updateConfigToSaveName}/>
            </Col>
            <Col sm={2}>
              <Button type="button" className="btn btn-info" onClick={this.saveConfiguration}
                      disabled={this.state.configToSaveName.length === 0}>Save configuration</Button>
            </Col>
          </Row>
          <Row>
            <Col sm={6}>
              <h4>HTML</h4>
            </Col>
            <Col sm={6}>
              <h4>Javascript</h4>
            </Col>
          </Row>
          <Row>
            <Col sm={6}>
              <Input value={this.state.html} type="textarea" style={{height: '510px'}}
                     onChange={this.handleChange}/>
            </Col>
            <Col sm={6} style={{wordWrap: 'break-word', whiteSpace: 'pre-wrap'}}>
              {this.state.result}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }

  saveConfiguration = () => {
    if (ConfigurationService.checkIfConfigExists(this.state.configToSaveName)) {
      NotificationManager.error('Configuration exists!');
    } else {
      this.props.callbackProcessAction(
        saveConfigAction(
          ConfigurationService.createUserConfig(this.state.configToSaveName, this.state.config)
        )
      );
      NotificationManager.info('Configuration saved!');
      this.setState({configToSaveName: ''});
    }
  };

  updateConfigToSaveName = (evt: any) => {
    this.setState({
      configToSaveName: evt.target.value
    });
  };
}

export default ObfuscationOutput;
