import React, {Component} from 'react';
import {Col, FormGroup, Input} from 'reactstrap';
import ConfigurationFactory from '../../../factories/configuration-factory';
import {loadConfigAction} from '../../../actions/config-form';
import ConfigurationService from '../../../services/configuration-service';
import {NotificationManager} from "react-notifications";

interface LoadConfigurationViewProps {
  callbackProcessAction: any;
}

class LoadConfigurationView extends Component<LoadConfigurationViewProps> {

  handleLoadConfig = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.trim().length > 0) {
      let preservedConfig = JSON.parse(event.target.value);
      this.props.callbackProcessAction(loadConfigAction(preservedConfig.config));
      NotificationManager.success('Successfully load config!', preservedConfig.name);
    }
  };

  render() {
    return <FormGroup row className="width-100">
      <Col sm={9}>
        Load configuration
      </Col>
      <Col sm={3}>
        <Input type="select" onChange={this.handleLoadConfig}>
          <option key={0} value={null}>&nbsp;</option>
          <option key={1} value={null} disabled={true}>default</option>
          {
            ConfigurationFactory.getDefaultConfiguration().map(elem =>
              <option key={elem.name} value={JSON.stringify(elem)}>{elem.name}</option>
            )
          }
          <option key={2} value={null} disabled={true}>saved</option>
          {
            ConfigurationService.loadConfigs().map(elem =>
              <option key={elem.name} value={JSON.stringify(elem)}>{elem.name}</option>
            )
          }
        </Input>
      </Col>
    </FormGroup>
  };
}

export default LoadConfigurationView;
