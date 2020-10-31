import React, {Component} from "react";
import {Button, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';
import {closeModal, generateHtml} from "../actions/generate-html-modal-action";
import HtmlGeneratorService from '../services/html-generator-service';

export interface GenerateHtmlModalProps {
  callbackProcessAction: any;
  className?: string;
  showHtmlTemplateModal: boolean;
}

export interface GenerateHtmlModalState {
  headersNumber: number;
  inputsNumber: number;
  paragraphsNumber: number;
  sectionsNumber: number;
}

enum HtmlNumberType {
  HEADERS,
  PARAGRAPHS,
  INPUTS,
  SECTIONS
}

class GenerateHtmlModal extends Component<GenerateHtmlModalProps, GenerateHtmlModalState> {

  constructor(props: GenerateHtmlModalProps) {
    super(props);
    this.state = {
      sectionsNumber: 1,
      headersNumber: 1,
      paragraphsNumber: 1,
      inputsNumber: 1
    };
  }

  change(event: any, type: any) {
    if (event.target.value >= 0) {
      switch (type) {
        case HtmlNumberType.HEADERS:
          this.setState({headersNumber: event.target.value});
          break;
        case HtmlNumberType.PARAGRAPHS:
          this.setState({paragraphsNumber: event.target.value});
          break;
        case HtmlNumberType.INPUTS:
          this.setState({inputsNumber: event.target.value});
          break;
        case HtmlNumberType.SECTIONS:
          if (event.target.value > 0) {
            this.setState({sectionsNumber: event.target.value});
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
      this.state.sectionsNumber,
      this.state.headersNumber,
      this.state.paragraphsNumber,
      this.state.inputsNumber);
    this.props.callbackProcessAction(generateHtml(htmlConfig))
  };

  render() {
    return (
      <Modal isOpen={this.props.showHtmlTemplateModal} className={this.props.className}>
        <ModalHeader>Generate HTML to obfuscate</ModalHeader>
        <ModalBody>
          <p>Choose HTML elements for generated HTML.</p>
          <Label>Sections</Label>
          <Input type='number' value={this.state.sectionsNumber}
                 onChange={e => this.change(e, HtmlNumberType.SECTIONS)}/>
          <Label>Headers</Label>
          <Input type='number' value={this.state.headersNumber}
                 onChange={e => this.change(e, HtmlNumberType.HEADERS)}/>
          <Label>Paragraphs</Label>
          <Input type='number' value={this.state.paragraphsNumber}
                 onChange={e => this.change(e, HtmlNumberType.PARAGRAPHS)}/>
          <Label>Inputs</Label>
          <Input type='number' value={this.state.inputsNumber}
                 onChange={e => this.change(e, HtmlNumberType.INPUTS)}/>
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
