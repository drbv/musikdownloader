import {Papa} from 'ngx-papaparse';
import {IParser} from '../file-definition/IParser';
import {ParserResult} from '../file-definition/ParserResult';


export class CsvParser implements IParser
{
  private papa: Papa = new Papa();

  constructor()
  {
    console.log('CSV parser launched');
  }

  public parse(file: File): Promise<any>
  {
    console.log('parsing file:', file);

    return new Promise<any>((resolve, reject) => {
      this.papa.parse(file, {
        header: true,
        complete: (result) => {
          console.log('Parsed: ', result);

          resolve(result.data);
        }
      });
    });

  }
}
