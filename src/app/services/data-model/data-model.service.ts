import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DataModel} from '../../models/DataModel';

export enum eDataModelId {
  DATABASE = 1,
  PORTAL   = 2
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
    this.dataModelDictionary.set(eDataModelId.DATABASE, 'assets/data-definitions/database.json');
    this.dataModelDictionary.set(eDataModelId.PORTAL, 'assets/data-definitions/portal.json');

    console.log('loaded data models: ', this.dataModelDictionary);
  }

  setDataModel(type: eDataModelId): Promise<DataModel> {
    const url = this.dataModelDictionary.get(type);
    const subject = this.httpClient.get<DataModel>(url).toPromise();


    subject.then(data => {
      this.dataModel = data;
    });

    return subject;
  }

  getDataModel(): DataModel {
    return this.dataModel;
  }
}
