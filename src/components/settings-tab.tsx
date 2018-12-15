
import React, { Component } from "react";
import { Button, Row, Label, Col, Container } from 'reactstrap';
import { clearUserConfigs } from "../services/preserved-configuration.service";



class SettingsTab extends Component {

    clearConfigurations = () => {
        clearUserConfigs();
    };

    render() {
        return (
            <Container style={{ marginTop: 5 }}>
                <Row>
                    <Label sm={10}>Clear saved configurations</Label>
                    <Col sm={2}>
                        <Button color="danger" onClick={this.clearConfigurations}>Clear</Button>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default SettingsTab;