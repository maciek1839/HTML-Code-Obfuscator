import React, { Component } from "react";


class HTMLPreview extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidUpdate() {
        if (this.props.previewHtml && this.props.previewHtml !== '') {
            this.refs.test.innerHTML = this.props.previewHtml;
        }
    }

    render() {
        let htmlContent = this.props.previewHtml;
        return (
            <div ref='test'></div>
        );
    }
}

export default HTMLPreview;