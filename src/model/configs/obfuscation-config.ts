import {AlgorithmType} from '../algorithms/algorithm-type';
import {HtmlFileType} from '../html-types';
import {HtmlConfig} from '../../services/html-generator-service';

export interface ObfuscationConfig {
  algorithmType?: AlgorithmType;
  html?: string;
  htmlConfig?: HtmlConfig;
  htmlFileType?: HtmlFileType;
}
