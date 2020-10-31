import React, {ChangeEvent, Component} from 'react';
import {Col, FormGroup, Input, Label} from 'reactstrap';
import {ObfuscationAlgorithm} from '../../../model/algorithms/obfuscation-algorithm';
import {setAlgorithm} from '../../../actions/config-form';

interface AlgorithmSelectViewProps {
  algorithmHtmlSelectValue: number;
  algorithms: ObfuscationAlgorithm[];
  callbackProcessAction: any;
}

class AlgorithmSelectView extends Component<AlgorithmSelectViewProps> {

  constructor(props: Readonly<AlgorithmSelectViewProps>) {
    super(props);
  }

  handleChangeAlgorithms = (event: ChangeEvent<HTMLInputElement>) => {
    let newChosenAlgorithm = Number(event.target.value);
    this.props.callbackProcessAction(setAlgorithm(newChosenAlgorithm));
  };

  render() {
    return <FormGroup row className="width-100 element-m-spacing-t">
      <Label sm={2}>Algorithm</Label>
      <Col sm={10}>
        <Input value={this.props.algorithmHtmlSelectValue} type="select"
               onChange={this.handleChangeAlgorithms}>
          <option key={0} value={null}>&nbsp;</option>
          {this.props.algorithms.map((item: ObfuscationAlgorithm) =>
            <option key={item.type} value={item.type}>{item.name}</option>
          )}
        </Input>
      </Col>
    </FormGroup>
  };
}

export default AlgorithmSelectView;
