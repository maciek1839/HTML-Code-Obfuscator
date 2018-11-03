import { Card, Tab } from "react-materialize";
import React, { Component } from "react";
import htmlBeautify from 'html-beautify'

class ObfuscationOutput extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
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
                    <div className={"col s6"}>xxxx1xxxxx xxx</div>
                </div> : null}
            </div>
        );
    }
}

export default ObfuscationOutput;
