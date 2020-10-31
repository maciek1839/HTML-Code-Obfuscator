import {AlgorithmType} from '../model/algorithms/algorithm-type';
import {ObfuscationAlgorithm} from '../model/algorithms/obfuscation-algorithm';

export default class AlgorithmService {
  static getAlgorithm(id: AlgorithmType): ObfuscationAlgorithm | null {
    let result = this.getDefaultAlgorithms().filter(algorithm => algorithm.type === id);
    return result.length > 0 ? result[0] : null;
  }

  static getDefaultAlgorithms(): ObfuscationAlgorithm[] {
    return [
      new ObfuscationAlgorithm(
        'Html to Javascript',
        AlgorithmType.HTML_TO_JAVASCRIPT,
        {
          steps: [
            'Split HTML file line by line.',
            'Replace white characters.',
            'Create function which add lines to document using document.write function.']
        }
      ),
      new ObfuscationAlgorithm(
        'Html to Base64 characters',
        AlgorithmType.HTML_TO_BASE64,
        {
          steps: [
            'Create js function encoding characters to Base64 characters.',
            'Create decoding function.',
            'Add output from decoding function to HTML.'
          ]
        }
      ),
      new ObfuscationAlgorithm(
        'Html to Hex characters',
        AlgorithmType.HTML_TO_HEX,
        {
          steps: [
            'Create js function encoding characters to Hex characters.',
            'Create decoding function.',
            'Add output from decoding function to HTML.'
          ]
        }
      ),
      new ObfuscationAlgorithm(
        'Html to html entities',
        AlgorithmType.HTML_TO_HTML_ENTITIES,
        {
          steps: [
            'Create js function encoding characters to html codes.',
            'Create decoding function.',
            'Add output from decoding function to HTML.'
          ]
        }
      ),
      new ObfuscationAlgorithm(
        'Html to escape characters (ASCII)',
        AlgorithmType.HTML_ESCAPE_CHARACTERS,
        {
          steps: [
            'Change endcoding using escape javascript function.',
            'Decode using unescape javascript function.',
            'Add element to HTML.'
          ]
        }
      ),
      new ObfuscationAlgorithm(
        'Using own encoding and decoding function.',
        AlgorithmType.HTML_ENCODE_WITH_OWN_FUN,
        {
          steps: [
            'Encode HTML using own function.',
            'Save encoded content into js variable.',
            'Decode using own decoding function.',
            'Add element to HTML document.'
          ]
        }
      )
    ];
  }
}
