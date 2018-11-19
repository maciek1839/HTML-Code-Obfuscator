import React, { Component } from "react";
import htmlBeautify from 'html-beautify'
import { Row, Input, Col, Container } from 'reactstrap';
import { fromHex, toHex, toASCII, toHtmlEntities, htmlToJavascript, encodeUsingOwnFunction } from "../services/html-encoder";


class ObfuscationOutput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            html: '',
            result: '',
            config: null,
            readyToEdit: false
        }
    }

    handleChange = evt => {
        let changedHtml = evt.target.value;
        this.setState({
            result: this.processHtml(changedHtml),
            html: changedHtml
        });
    };

    componentDidUpdate() {
        if (this.props.config !== null && (this.state.html === '' || this.isConfigurationChanged(this.state.config, this.props.config))) {
            this.setState({
                html: htmlBeautify(this.props.config.html),
                result: this.processHtml(this.props.config.html),
                config: this.props.config
            });
        }
    }

    isConfigurationChanged(oldConfig, newConfig){
        return oldConfig !=null && newConfig != null && (oldConfig.choosenAlgorithm.value != newConfig.choosenAlgorithm.value);
    }

    processHtml(html) {
        let result = null;
        switch (this.props.config.choosenAlgorithm.value) {
            case '1':
                let htmlToJs = htmlToJavascript(html);
                result =
                    `
            document.write(eval('${htmlToJs}'))
            `
                break;
            case '2':
                let encodedHtml = btoa(unescape(html));
                result =
                    `
            document.write(atob('${encodedHtml}'))
            `
                break;
            case '3':
                let hex = toHex(html);
                result =
                    `
            document.write(fromHex('${hex}'))
            `;
                break;
            case '4':
                let ascii = toHtmlEntities(html);
                result =
                    `
            document.write(fromHtmlEntities('${ascii}'))
            `;
                break;
            case '5':
                let escapedHtml = escape(html);
                result =
                    `
            document.write(unescape('${escapedHtml}'))
            `
                break;
            case '6':
                let customEncoding = encodeUsingOwnFunction(html);
                result =
                    `
                document.write(ownDecodingFunction('${customEncoding}'))
                `
                break;
            default:
                console.log("Not implemented method for obfuscation algorithm!");
        }
        return result;
    }

    onClickTextarea() {
        this.setState({ html: this.state.html + " " })
    }

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col sm={6}>
                            <h4>HTML</h4>
                        </Col>
                        <Col sm={6}>
                            <h4>Javascript</h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={6}>
                            <Input value={this.state.html} type="textarea" style={{ height: '510px' }} onChange={this.handleChange} />
                        </Col>
                        <Col sm={6} style={{ wordWrap: 'break-word', whiteSpace: 'pre-wrap' }}>
                            {this.state.result}
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default ObfuscationOutput;
