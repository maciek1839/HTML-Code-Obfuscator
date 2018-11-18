import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label } from 'reactstrap';
import { closeModal } from "../actions/generate-html-modal-action";
import { prepareHtmlConfig } from "../services/html-generator-service"
import { generateHtml } from "../actions/generate-html-modal-action"

class GenerateHtmlModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sections: 1,
            headers: 1,
            paragraphs: 1,
            inputs: 1
        };
    }

    handleClose = () => {
        this.props.callbackProcessAction(closeModal());
    }

    handleGenerate = () => {
        let htmlConfig = prepareHtmlConfig(
            this.state.sections,
            this.state.headers,
            this.state.paragraphs,
            this.state.inputs);
        this.props.callbackProcessAction(generateHtml(htmlConfig))
    }

    change(event, type) {
        if (event.target.value >= 0) {
            switch (type) {
                case 'Headers':
                    this.setState({ headers: event.target.value });
                    break;
                case 'Paragraphs':
                    this.setState({ paragraphs: event.target.value });
                    break;
                case 'Inputs':
                    this.setState({ inputs: event.target.value });
                    break;
                case 'Sections':
                    if(event.target.value>0){
                        this.setState({ sections: event.target.value });
                    }
                    break;
            }
        }
    }


    render() {
        return (
            <Modal isOpen={this.props.showHtmlTemplateModal} className={this.props.className}>
                <ModalHeader>Generate HTML to obfuscate</ModalHeader>
                <ModalBody>
                    <p>Choose HTML elements for generated HTML.</p>
                    <Label>Sections</Label>
                    <Input type='number' label='Sections' value={this.state.sections} onChange={e => this.change(e, 'Sections')} />
                    <Label>Headers</Label>
                    <Input type='number' label='Headers' value={this.state.headers} onChange={e => this.change(e, 'Headers')} />
                    <Label>Paragraphs</Label>
                    <Input type='number' label='Paragraphs' value={this.state.paragraphs} onChange={e => this.change(e, 'Paragraphs')} />
                    <Label>Inputs</Label>
                    <Input type='number' label='Inputs' value={this.state.inputs} onChange={e => this.change(e, 'Inputs')} />
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