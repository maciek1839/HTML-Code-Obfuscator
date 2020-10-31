import React, {ChangeEvent, Component} from 'react';
import {Col, FormGroup, Input, Label} from 'reactstrap';
import HtmlTypes, {HtmlFileType} from '../../../model/html-types';
import {setHtmlFile, setHtmlType} from '../../../actions/config-form';

interface HtmlTypesViewProps {
  callbackProcessAction: any;
  htmlSelectValue: number;
}

class HtmlTypesView extends Component<HtmlTypesViewProps> {

  render() {
    return <FormGroup row className="width-100">
      <Label sm={2}>HTML to obfuscate</Label>
      <Col sm={10}>
        <Input value={this.props.htmlSelectValue} type="select"
               onChange={this.handleChangeHtmlType}>
          <option key={0} value={null}>&nbsp;</option>
          {this.renderHtmlTypesList()}
        </Input>
      </Col>
      <Col sm={12}>
        {this.renderFileInput(this.props.htmlSelectValue)}
      </Col>
    </FormGroup>;
  }

  private handleChangeHtmlType = (event: ChangeEvent<HTMLInputElement>) => {
    let newHtmlType = Number(event.target.value);
    this.props.callbackProcessAction(setHtmlType(newHtmlType));
  };

  private handleUserFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.onload = (evt: any) => {
      this.props.callbackProcessAction(setHtmlFile(evt.target.result));
    };
    reader.readAsText(file, "UTF-8");
  };

  private renderFileInput(htmlSelectValue: number): JSX.Element | null {
    return htmlSelectValue === HtmlFileType.LOAD_FILE ?
      <Input type="file" label="File" onChange={this.handleUserFile}/>
      : null
  }

  private renderHtmlTypesList = () => {
    const list = [];
    for (let htmlType of HtmlTypes) {
      list.push(<option key={htmlType.key} value={htmlType.key}>{htmlType.value}</option>)
    }
    return list;
  };
}

export default HtmlTypesView;
