import React, { Component } from "react";
import htmlBeautify from 'html-beautify'

class ObfuscationOutput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            html: htmlBeautify(props.config.html),
            result: this.processHtml(htmlBeautify(props.config.html))
        };
    }

    handleChange = evt => {
        let changedHtml = evt.target.value;
        this.setState({
            result: this.processHtml(changedHtml),
            html: changedHtml
        });
    };

    processHtml(html) {
        let result = null;
        switch (this.props.config.algorithm.value) {
            case '3':
                let escapedHtml = escape(html);
                // console.log(escapedHtml);
                // let unescapedHtml = unescape(escapedHtml);
                // console.log(unescapedHtml);
                result =
                    `
            document.write(unescape('${escapedHtml}'))
            `
                break;
            default:
                console.warning("Not implemented method for obfuscation algorithm!");
        }
        return result;
    }

    onClickTextarea(e) {
        this.setState({ html: this.state.html + " " })
    }

    render() {
        return (
            <div>
                <h3>Deobfuscator</h3>
                <div className={"row"}>
                    <div className={"col s6"}><h4>HTML</h4></div>
                    <div className={"col s6"}><h4>Javascript</h4></div>
                    <div className={"col s6"} style={{ height: '280px' }} >
                        <textarea
                            suppressContentEditableWarning={true}
                            contentEditable={true}
                            style={{ whiteSpace: 'pre-wrap', height: '100%' }}
                            onChange={this.handleChange}>
                            {this.state.html}
                        </textarea>
                    </div>
                    <div className={"col s6"}
                        style={{ wordWrap: 'break-word', whiteSpace: 'pre-wrap' }}>{this.state.result}</div>
                </div>
            </div>
        );
    }
}

export default ObfuscationOutput;
