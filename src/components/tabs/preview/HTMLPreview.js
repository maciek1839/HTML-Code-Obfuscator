import {Tab} from "react-materialize";
import React, {Component} from "react";


class HTMLPreview extends Component{

    constructor(props){
        super(props);
        this.state={

        };
    }
//
//     renderPreview(type) {
//         switch (type) {
//             case 'default':
//                 let template = this.loadTemplate();
//                 this.setPreviewHtml(template);
//                 this.enablePreview();
//                 break;
//             case 'custom':
//
//                 this.enablePreview();
//                 break;
//         }
//     }
//
//     enablePreview() {
//         let userConfiguration = {...this.state.userConfiguration};
//         userConfiguration.disablePreview = false;
//         this.setState({userConfiguration: userConfiguration});
//     }
//
//     setPreviewHtml(html) {
//         let uConfig = {...this.state.userConfiguration};
//         uConfig.previewHtml = html;
//         this.setState({userConfiguration: uConfig});
//     }
//
//     loadTemplate() {
//         let loadedTemplate = null;
//         let file = 'html-templates/example.html';
//         let request = new XMLHttpRequest();
//         request.open("GET", file, false);
//         request.send(null);
//         if (request.status === 200) {
//             loadedTemplate = request.responseText;
//         }
//         return loadedTemplate;
//     }

    render(){
        let htmlContent = this.props.previewHtml;
        return (
            <div dangerouslySetInnerHTML={{__html: htmlContent}}/>
        );
    }
}

export default HTMLPreview;