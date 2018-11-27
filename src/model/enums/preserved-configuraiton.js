export function getDefaultConfiguration(){
    let array=[];
    array.push(
        {
            id:11,
            name: 'Base64',
            config: {
                choosenAlgorithm: null,
                choosenHtml: null,
                html: null
            }
        }
    );

    array.push(
        {
            id:12,
            name: 'HTML entities',
            config: {
                choosenAlgorithm: null,
                choosenHtml: null,
                html: null
            }
        }
    );

    return array;
}