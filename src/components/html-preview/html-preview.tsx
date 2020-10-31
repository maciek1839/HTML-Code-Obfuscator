import React, {Component} from "react";
import {Button} from 'reactstrap';
import {regenerateHtml} from "../../actions/html-preview-actions";
import "./HtmlPreview.scss";

export interface HtmlPreviewProps {
  callbackProcessAction: any;
  htmlConfig: any;
  previewHtml: any;
}

class HTMLPreview extends Component<HtmlPreviewProps, any> {

  constructor(props: HtmlPreviewProps) {
    super(props);
    this.state = {};
  }

  componentDidUpdate() {
    if (this.props.previewHtml && this.props.previewHtml !== '') {
      (this.refs.preview as HTMLElement).innerHTML = this.props.previewHtml;
    }
  }

  generateAgain = () => {
    this.props.callbackProcessAction(regenerateHtml(this.props.htmlConfig));
  };

  render() {
    return (
      <div className="preview-wrapper">
        {this.props.htmlConfig !== null ?
          <Button className="preview-generate-btn" color="primary"
                  onClick={this.generateAgain}>Generate again</Button> : null}
        <div ref='preview'>...</div>
      </div>
    );
  }
}

export default HTMLPreview;
