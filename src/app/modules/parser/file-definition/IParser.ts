import {ParserResult} from './ParserResult';


export interface IParser {
  parse(file: File): Promise<any>;
}
