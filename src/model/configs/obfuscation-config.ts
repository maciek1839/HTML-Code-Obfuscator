import {ObfuscationAlgorithm} from '../algorithms/obfuscation-algorithm';

export interface ObfuscationConfig {
  chosenAlgorithm: ObfuscationAlgorithm | null;
  chosenHtml: any;
  html: any;
  htmlConfig: any;
}
