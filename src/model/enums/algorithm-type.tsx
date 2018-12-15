export class ObfuscationAlgorithm {
    constructor(name: string, value: string, details: any) {
        this.name = name;
        this.value = value;
        this.details = details;
    }

    name: string;
    value: string;
    details: any;
}


export function getDefaultAlgorithms(): ObfuscationAlgorithm[] {
    return [
        {
            name: 'Html to Javascript',
            value: AlgorithmType.HTML_TO_JAVASCRIPT,
            details: {
                steps: [
                    'Split HTML file line by line.',
                    'Replace white characters.',
                    'Create function which add lines to document using document.write function.']
            }
        },
        {
            name: 'Html to Base64 characters',
            value: AlgorithmType.HTML_TO_BASE64,
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
            value: AlgorithmType.HTML_TO_HEX,
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
            value: AlgorithmType.HTML_TO_HTML_ENTITIES,
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
            value: AlgorithmType.HTML_ESCAPE_CHARACTERS,
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
            value: AlgorithmType.HTML_ENCODE_WITH_OWN_FUN,
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

export const AlgorithmType = {
    HTML_TO_JAVASCRIPT: '1',
    HTML_TO_BASE64: '2',
    HTML_TO_HEX: '3',
    HTML_TO_HTML_ENTITIES: '4',
    HTML_ESCAPE_CHARACTERS: '5',
    HTML_ENCODE_WITH_OWN_FUN: '6'
};

export function getAlgorithm(id: string) {
    let result = getDefaultAlgorithms().filter(e => e.value === id);
    return result.length > 0 ? result[0] : null;
}
