import {Papa, PapaParseError} from 'ngx-papaparse';
import {IParser} from '../../file-definition/parser.interface';


export class CsvParser implements IParser {
  private papa: Papa = new Papa();

  constructor() {
    console.log('CSV parser launched');
  }

  public parse(file: File): Promise<any> {
    console.log('parsing file:', file);

    return new Promise<any>((resolve, reject) => {
      this.papa.parse(file, {
        header: true,
        complete: (result) => {
          console.log('Parsed: ', result);

          const resultData = Array.from(result.data);

          if (result.errors) {
            result.errors.forEach((error: PapaParseError) => {
              console.log('error occured: ', error);

              resultData.splice(error.row, 1);
              console.log('parse result after delete: ', resultData);
            });
          }

          resolve(resultData);
        }
      });
    });

  }
}
