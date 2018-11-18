import React, { Component } from "react";
import { Button} from 'reactstrap';
import { regenerateHtml } from "../actions/html-preview-actions";

class HTMLPreview extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidUpdate() {
        if (this.props.previewHtml && this.props.previewHtml !== '') {
            this.refs.preview.innerHTML = this.props.previewHtml;
        }
    }

    generateAgain = ()=>{
        this.props.callbackProcessAction(regenerateHtml(this.props.htmlConfig));
    }

    render() {
        return (
            <div style={{position: "relative"}}> 
                {this.props.htmlConfig !== null && this.props.htmlConfig.choosenHtml===0 ? <Button style={{position: "absolute",top: "0px",right: "0px"}} color="primary" onClick={this.generateAgain}>Generate again</Button>:null}
                <div ref='preview'></div>
            </div>
        );
    }
}

export default HTMLPreview;