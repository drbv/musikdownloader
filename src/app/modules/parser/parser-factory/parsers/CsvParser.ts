
import {IParser} from '../../file-definition/parser.interface';
import {Papa, ParseError} from 'ngx-papaparse';


export class CsvParser implements IParser {
  private papa: Papa = new Papa();

  constructor() {
  }

  public parse(file: File): Promise<any> {

    return new Promise<any>((resolve, reject) => {
      this.papa.parse(file, {
        header: true,
        complete: (result) => {

          const resultData = Array.from(result.data);

          if (result.errors) {
            result.errors.forEach((error: ParseError) => {

              resultData.splice(error.row, 1);
            });
          }

          resolve(resultData);
        }
      });
    });

  }
}
