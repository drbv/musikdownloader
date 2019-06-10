import {FileType} from '../../../enums/FileType';

export interface ParserResult {
  competitionNumber: number;
  fileType: FileType;
  data: any;

}
