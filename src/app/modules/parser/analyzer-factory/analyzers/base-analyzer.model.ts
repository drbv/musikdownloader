import {DataModel} from '../../../../models/DataModel';
import {ResultItem} from '../../file-definition/result.item.model';
import {DataModelService} from '../data-model.service';

export abstract class BaseAnalyzer {
  protected currentModel: DataModel;

  constructor(protected dataModelService: DataModelService) {
  }

  async analyzeItem(item: any): Promise<ResultItem> {
    this.currentModel = await this.dataModelService.setDataModel(item.Quelle);

    return this.onAnalyzeItem(item);
  }

  protected abstract onAnalyzeItem(item: any): ResultItem;


}
