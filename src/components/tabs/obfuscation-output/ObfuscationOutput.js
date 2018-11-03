import { Card, Tab } from "react-materialize";
import React, { Component } from "react";


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
                    <div className={"col s6"}>HTML</div>
                    <div className={"col s6"}>Javascript</div>
                    <div className={"col s6"} contentEditable={true} >{config.html}</div>
                    <div className={"col s6"}>xxxx1xxxxx xxx</div>
                </div> : null}
            </div>
        );
    }
}

export default ObfuscationOutput;
