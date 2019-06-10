import {Injectable} from '@angular/core';
import {DataModelService, eDataModelId} from './data-model.service';
import {RrDataAnalyzer} from './analyzers/rr-data-analyzer.model';
import {PortalDataAnalyzer} from './analyzers/portal-data-analyzer.model';
import {BwDataAnalyzer} from './analyzers/bw-data-analyzer.model';

@Injectable({
  providedIn: 'root'
})
export class AnalyzerFactoryService {

  constructor(private dataModelService: DataModelService) { }

  public getAnalyzer(id: eDataModelId) {

    switch (id) {
      case eDataModelId.DATABASE_BW:
        return new BwDataAnalyzer(this.dataModelService);

        case eDataModelId.DATABASE_RR:
          return new RrDataAnalyzer(this.dataModelService);

          case eDataModelId.PORTAL:
            return new PortalDataAnalyzer(this.dataModelService);

      default:
        return null;
    }
  }
}
