import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label } from 'reactstrap';
import { closeModal } from "../actions/generate-html-modal-action";
import { prepareHtmlConfig } from "../services/html-generator-service"
import { generateHtml } from "../actions/generate-html-modal-action"

class GenerateHtmlModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            headers: 1,
            paragraphs: 1,
            buttons: 1,
            links: 1,
            inputs: 1,
            images: 1
        };
    }

    handleClose = () => {
        this.props.callbackProcessAction(closeModal());
    }

    handleGenerate = () => {
        let htmlConfig = prepareHtmlConfig(this.state.headers,
            this.state.paragraphs,
            this.state.buttons,
            this.state.links,
            this.state.inputs,
            this.state.images);
        this.props.callbackProcessAction(generateHtml(htmlConfig))
    }

    change(event, type) {
        let prevConfig = { ...this.state };
        switch (type) {
            case 'Headers':
                this.setState({ headers: event.target.value });
                break;
            case 'Paragraphs':
                this.setState({ paragraphs: event.target.value });
                break;
            case 'Buttons':
                this.setState({ buttons: event.target.value });
                break;
            case 'Links':
                this.setState({ links: event.target.value });
                break;
            case 'Inputs':
                this.setState({ inputs: event.target.value });
                break;
            case 'Images':
                this.setState({ images: event.target.value });
                break;
        }
    }


    render() {
        return (
            <Modal isOpen={this.props.showHtmlTemplateModal} className={this.props.className}>
                <ModalHeader>Generate HTML to obfuscate</ModalHeader>
                <ModalBody>
                    <p>Choose HTML elements for generated HTML.</p>
                    <Label for="exampleAddress">Headers</Label>
                    <Input type='number' label='Headers' value={this.state.headers} onChange={e => this.change(e, 'Headers')} />
                    <Label for="exampleAddress">Paragraphs</Label>
                    <Input type='number' label='Paragraphs' value={this.state.paragraphs} onChange={e => this.change(e, 'Paragraphs')} />
                    <Label for="exampleAddress">Buttons</Label>
                    <Input type='number' label='Buttons' value={this.state.buttons} onChange={e => this.change(e, 'Buttons')} />
                    <Label for="exampleAddress">Links</Label>
                    <Input type='number' label='Links' value={this.state.links} onChange={e => this.change(e, 'Links')} />
                    <Label for="exampleAddress">Inputs</Label>
                    <Input type='number' label='Inputs' value={this.state.inputs} onChange={e => this.change(e, 'Inputs')} />
                    <Label for="exampleAddress">Images</Label>
                    <Input type='number' label='Images' value={this.state.images} onChange={e => this.change(e, 'Images')} />
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