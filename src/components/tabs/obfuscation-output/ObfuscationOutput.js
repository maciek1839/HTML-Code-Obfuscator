import { Card, Tab } from "react-materialize";
import React, { Component } from "react";
import htmlBeautify from 'html-beautify'

class ObfuscationOutput extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    processHtml(){
        let result=null;
        switch (this.props.config.algorithm.value) {
                        case '3':
                            let escapedHtml = escape(this.props.config.html);
                            console.log(escapedHtml);
                            let unescapedHtml = unescape(escapedHtml);
                            console.log(unescapedHtml);
                            result =
                                `
            document.write(unescape('${escapedHtml}'))
            `
                            break;
                    }
        return result;
    }   

    render() {
        let config = this.props.config;
        return (
            <div>
                <h3>Deobfuscator</h3>
                {config ? <div className={"row"}>
                    <div className={"col s6"}><h4>HTML</h4></div>
                    <div className={"col s6"}><h4>Javascript</h4></div>
                    <div className={"col s6"} 
                    suppressContentEditableWarning={true} 
                    contentEditable={true}
                    style={{ whiteSpace: 'pre-wrap' }}>{htmlBeautify(config.html)}</div>
                    <div className={"col s6"}
                    style={{ wordWrap: 'break-word', whiteSpace: 'pre-wrap' }}>{this.processHtml()}</div>
                </div> : null}
            </div>
        );
    }
}

export default ObfuscationOutput;
