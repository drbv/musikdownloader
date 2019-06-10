import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DataModel} from '../../../models/DataModel';

export enum eDataModelId {
  DATABASE_RR = 'RR',
  DATABASE_BW = 'BW',
  PORTAL   = 'AB'
}

export interface DataModelType {
  id: eDataModelId;
  url: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataModelService {

  dataModel: DataModel;
  dataModelDictionary: Map<eDataModelId, string> = new Map<eDataModelId, string>();

  constructor(private readonly httpClient: HttpClient) {
    this.dataModelDictionary.set(eDataModelId.DATABASE_RR, 'assets/data-definitions/database_rr.json');
    this.dataModelDictionary.set(eDataModelId.DATABASE_BW, 'assets/data-definitions/database_bw.json');
    this.dataModelDictionary.set(eDataModelId.PORTAL, 'assets/data-definitions/portal.json');

    console.log('loaded data models: ', this.dataModelDictionary);
  }

  public async setDataModel(type: eDataModelId): Promise<DataModel> {
    const url = this.dataModelDictionary.get(type);
    this.dataModel = await this.httpClient.get<DataModel>(url).toPromise();

    return this.dataModel;
  }

  getDataModel(): DataModel {
    return this.dataModel;
  }
}
