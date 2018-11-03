import React, { Component } from "react";


class HTMLPreview extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        let htmlContent = this.props.previewHtml;
        return (
            <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        );
    }
}

export default HTMLPreview;