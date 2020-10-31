import React, {Component} from 'react';
import {Button, Col, FormGroup} from 'reactstrap';
import ConfigurationFactory from '../../../factories/configuration-factory';
import {showResult} from '../../../actions/config-form';
import {ObfuscationConfig} from '../../../model/configs/obfuscation-config';

interface SubmitBtnViewProps {
  callbackProcessAction: any;
  config: ObfuscationConfig;
}

class SubmitBtnView extends Component<SubmitBtnViewProps> {

  handleSubmit = () => {
    this.props.callbackProcessAction(showResult());
  };

  render() {
    return <FormGroup row className="width-100">
      <Col sm={{size: 2, offset: 10}}>
        <Button type="button"
                disabled={!ConfigurationFactory.isConfigurationComplete(this.props.config)}
                className="btn btn-success"
                onClick={this.handleSubmit}>Submit</Button>
      </Col>
    </FormGroup>
  };
}

export default SubmitBtnView;
