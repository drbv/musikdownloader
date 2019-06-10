export interface IParser {
  parse(file: File): Promise<any>;
}
