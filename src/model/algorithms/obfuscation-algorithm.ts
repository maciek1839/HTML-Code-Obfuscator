export class ObfuscationAlgorithm {
  details: any;
  name: string;
  value: string;

  constructor(name: string, value: string, details: any) {
    this.name = name;
    this.value = value;
    this.details = details;
  }
}
