import React, {Component} from 'react';
import {Button, Col, Collapse, FormGroup, ListGroup, ListGroupItem} from 'reactstrap';
import {ObfuscationAlgorithm} from '../../../model/algorithms/obfuscation-algorithm';

interface AlgorithmDetailsViewProps {
  algorithm?: ObfuscationAlgorithm,
}

interface AlgorithmDetailsViewState {
  showDetails: boolean,
}

class AlgorithmDetailsView extends Component<AlgorithmDetailsViewProps, AlgorithmDetailsViewState> {

  constructor(props: Readonly<AlgorithmDetailsViewProps>) {
    super(props);
    this.state = {
      showDetails: false
    };
  }

  openCloseDetails = () => {
    this.setState({
      showDetails: !this.state.showDetails
    });
  };

  render() {
    return this.props.algorithm ? this.renderDetailsElement() : null
  };

  private renderDetailsElement(): JSX.Element {
    return <FormGroup>
      <Col sm={{size: 2, offset: 10}}>
        <Button color="primary" onClick={this.openCloseDetails} className="element-m-spacing-b">
          Show details
        </Button>
      </Col>
      <Collapse isOpen={this.state.showDetails}>
        <ListGroup flush>
          {this.props.algorithm.details.steps.map((step: string, index: number) =>
            <ListGroupItem key={index}>{index + 1}. {step}</ListGroupItem>
          )}
        </ListGroup>
      </Collapse>
    </FormGroup>;
  }
}

export default AlgorithmDetailsView;
