import React, { Component } from "react";


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

    render() {
        return (
            <div ref='preview'></div>
        );
    }
}

export default HTMLPreview;