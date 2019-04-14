import {FileType} from '../../../enums/FileType';
import {eDataModelId} from '../../../services/data-model/data-model.service';

export interface ParserResult {
  competitionNumber: number;
  fileType: FileType;
  dataModel: eDataModelId;
  data: any;

}
