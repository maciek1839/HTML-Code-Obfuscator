import {AlgorithmType} from './algorithm-type';

export class ObfuscationAlgorithm {
  details: { steps: string[] };
  name: string;
  type: AlgorithmType;

  constructor(name: string, type: AlgorithmType, details: { steps: string[] }) {
    this.name = name;
    this.type = type;
    this.details = details;
  }
}
