export function getDefaultAlgorithms() {
    return [
        {
            name: 'Html to Javascript',
            value: '1',
            details: {
                steps: [
                    'Split HTML file line by line.',
                    'Replace white characters.',
                    'Create function which add lines to document using document.write function.']
            }
        },
        {
            name: 'Html to Base64 characters',
            value: '2',
            details: {
                steps: [
                    'Create js function encoding characters to Base64 characters.',
                    'Create decoding function.',
                    'Add output from decoding function to HTML.'
                ]
            }
        },
        {
            name: 'Html to Hex characters',
            value: '3',
            details: {
                steps: [
                    'Create js function encoding characters to Hex characters.',
                    'Create decoding function.',
                    'Add output from decoding function to HTML.'
                ]
            }
        },
        {
            name: 'Html to html entities',
            value: '4',
            details: {
                steps: [
                    'Create js function encoding characters to html codes.',
                    'Create decoding function.',
                    'Add output from decoding function to HTML.'
                ]
            }
        },
        {
            name: 'Html to escape characters (ASCII)',
            value: '5',
            details: {
                steps: [
                    'Change endcoding using escape javascript function.',
                    'Decode using unescape javascript function.',
                    'Add element to HTML.'
                ]
            }
        },
        {
            name: 'Using own encoding and decoding function.',
            value: '6',
            details: {
                steps: [
                    'Encode HTML using own function.',
                    'Save encoded content into js variable.',
                    'Decode using own decoding function.',
                    'Add element to HTML document.'
                ]
            }
        }
    ];
}