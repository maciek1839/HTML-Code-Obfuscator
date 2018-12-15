import React, {Component} from "react";
import {Button} from 'reactstrap';
import {regenerateHtml} from "../actions/html-preview-actions";

export interface HtmlPreviewProps {
    previewHtml: any;
    callbackProcessAction: any;
    htmlConfig: any;
}

class HTMLPreview extends Component<HtmlPreviewProps, any> {

    constructor(props: HtmlPreviewProps) {
        super(props);
        this.state = {};
    }

    componentDidUpdate() {
        if (this.props.previewHtml && this.props.previewHtml !== '') {
            (this.refs.preview as HTMLElement).innerHTML = this.props.previewHtml;
        }
    }

    generateAgain = () => {
        this.props.callbackProcessAction(regenerateHtml(this.props.htmlConfig));
    };

    render() {
        return (
            <div style={{position: "relative"}}>
                {this.props.htmlConfig !== null ?
                    <Button style={{position: "absolute", top: "0px", right: "0px"}} color="primary"
                            onClick={this.generateAgain}>Generate again</Button> : null}
                <div ref='preview'>...</div>
            </div>
        );
    }
}

export default HTMLPreview;