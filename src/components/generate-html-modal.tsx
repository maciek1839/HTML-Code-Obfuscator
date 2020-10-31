import React, {Component} from "react";
import {Button, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';
import {closeModal, generateHtml} from "../actions/generate-html-modal-action";
import HtmlGeneratorService from '../services/html-generator-service';

export interface GenerateHtmlModalProps {
  callbackProcessAction: any,
  className?: any
  showHtmlTemplateModal: any,
}

class GenerateHtmlModal extends Component<GenerateHtmlModalProps, any> {

  constructor(props: GenerateHtmlModalProps) {
    super(props);
    this.state = {
      sections: 1,
      headers: 1,
      paragraphs: 1,
      inputs: 1
    };
  }

  change(event: any, type: any) {
    if (event.target.value >= 0) {
      switch (type) {
        case 'Headers':
          this.setState({headers: event.target.value});
          break;
        case 'Paragraphs':
          this.setState({paragraphs: event.target.value});
          break;
        case 'Inputs':
          this.setState({inputs: event.target.value});
          break;
        case 'Sections':
          if (event.target.value > 0) {
            this.setState({sections: event.target.value});
          }
          break;
      }
    }
  }

  handleClose = () => {
    this.props.callbackProcessAction(closeModal());
  };

  handleGenerate = () => {
    let htmlConfig = HtmlGeneratorService.prepareHtmlConfig(
      this.state.sections,
      this.state.headers,
      this.state.paragraphs,
      this.state.inputs);
    this.props.callbackProcessAction(generateHtml(htmlConfig))
  };

  render() {
    return (
      <Modal isOpen={this.props.showHtmlTemplateModal} className={this.props.className}>
        <ModalHeader>Generate HTML to obfuscate</ModalHeader>
        <ModalBody>
          <p>Choose HTML elements for generated HTML.</p>
          <Label>Sections</Label>
          <Input type='number' value={this.state.sections}
                 onChange={e => this.change(e, 'Sections')}/>
          <Label>Headers</Label>
          <Input type='number' value={this.state.headers}
                 onChange={e => this.change(e, 'Headers')}/>
          <Label>Paragraphs</Label>
          <Input type='number' value={this.state.paragraphs}
                 onChange={e => this.change(e, 'Paragraphs')}/>
          <Label>Inputs</Label>
          <Input type='number' value={this.state.inputs}
                 onChange={e => this.change(e, 'Inputs')}/>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.handleGenerate}>Generate</Button>{' '}
          <Button color="secondary" onClick={this.handleClose}>Cancel</Button>
        </ModalFooter>
      </Modal>
    );
  }
}

export default GenerateHtmlModal;
