export function prepareHtmlConfig(
    headerCount,
    paragraphCount,
    buttonCount,
    linkCount,
    inputCount,
    imageCount) {
    return [
        { type: 'header', value: headerCount },
        { type: 'paragraph', value: paragraphCount },
        { type: 'button', value: buttonCount },
        { type: 'link', value: linkCount },
        { type: 'input', value: inputCount },
        { type: 'image', value: imageCount }
    ];
}

export function generateHTML(config) {
    let result = getOpeningTag();
    config.map(e => {
        switch (e.type) {
            case 'header':
                for (let i = e.value; i > 0; i--) {
                    result += '<h1>Example title</h1>';
                }
                break;
            case 'paragraph':
                for (let i = e.value; i > 0; i--) {
                    result += '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>';
                }
                break;
            case 'button':
                for (let i = e.value; i > 0; i--) {
                    result += '<button type="button" style="color:black;">Click Me!</button>';
                }
                break;
            case 'link':
                for (let i = e.value; i > 0; i--) {
                    result += '<a href="https://www.w3schools.com/html/">Visit our HTML tutorial</a>';
                }
                break;
            case 'input':
                for (let i = e.value; i > 0; i--) {
                    result += '<input type="text" name="firstname">';
                }
                break;
            case 'image':
                for (let i = e.value; i > 0; --i) {
                    result += `<img src="https://fakeimg.pl/200x100/282828/eae0d0/?retina=1&text=%E3%81%93%E3%82%93%E3%81%AB%E3%81%A1%E3%81%AF&font=noto">`;
                }
                break;
            default:
                console.log("No such element!");
        }
    });

    result += getClosingTag();

    return result;
}

function getOpeningTag() {
    return `<!DOCTYPE html>
    <html>
    <head>
    <title>Generated HTML example</title>
    </head>
    <body>`;
}

function getClosingTag() {
    return `
    </body>
    </html>`;
}
