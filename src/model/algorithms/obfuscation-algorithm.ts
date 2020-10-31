import {AlgorithmType} from './algorithm-type';

export class ObfuscationAlgorithm {
  details: any;
  name: string;
  type: AlgorithmType;

  constructor(name: string, type: AlgorithmType, details: any) {
    this.name = name;
    this.type = type;
    this.details = details;
  }
}
