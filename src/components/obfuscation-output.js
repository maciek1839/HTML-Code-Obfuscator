import React, { Component } from "react";
import htmlBeautify from 'html-beautify'
import { Row, Input, Col, Container } from 'reactstrap';


class ObfuscationOutput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            html: '',
            result: '',
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
        if (this.props.config != null && this.state.html == '') {
            console.log("ss");
            this.setState({
                html: htmlBeautify(this.props.config.html),
                result: this.processHtml(this.props.config.html)
            });
        }
    }

    processHtml(html) {
        let result = null;
        console.log(this.props.config);
        switch (this.props.config.choosenAlgorithm.value) {
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
                console.log("Not implemented method for obfuscation algorithm!");
        }
        return result;
    }

    onClickTextarea() {
        this.setState({ html: this.state.html + " " })
    }

    render() {
        console.log(this.props.config);
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
