import {BaseAnalyzer} from './base-analyzer.model';
import {ResultItem} from '../../file-definition/result.item.model';
import {DownloadItem} from '../../../../models/DownloadItem';

export class PortalDataAnalyzer extends BaseAnalyzer {

  protected onAnalyzeItem(item: any): ResultItem {

    if (!item[this.currentModel.folder]) {
      return null;
    }

    const filename = `${item[this.currentModel.folder]}_${item[this.currentModel.danceTeam.familyname_female]}_${item[this.currentModel.danceTeam.familyname_male]}_${item[this.currentModel.danceTeam.name_team]}_`;

    const resultItem = new ResultItem();
    resultItem.numberOfSongs = 0;
    resultItem.numberOfTeams = 1;

    this.parseItem(item, filename, resultItem, this.currentModel.portalMusic.footwork, 'ER_FT');
    this.parseItem(item, filename, resultItem, this.currentModel.portalMusic.acrobatic, 'ER_Akro');
    this.parseItem(item, filename, resultItem, this.currentModel.portalMusic.setup_short, 'Stellprobe_kurz');
    this.parseItem(item, filename, resultItem, this.currentModel.portalMusic.show_short, 'Tanzmusik_kurz');
    this.parseItem(item, filename, resultItem, this.currentModel.portalMusic.reserve_short, 'Ersatzmusik_kurz');
    this.parseItem(item, filename, resultItem, this.currentModel.portalMusic.setup_long, 'Stellprobe_lang');
    this.parseItem(item, filename, resultItem, this.currentModel.portalMusic.show_long, 'Tanzmusik_lang');
    this.parseItem(item, filename, resultItem, this.currentModel.portalMusic.reserve_long, 'Ersatzmusik_lang');

    return resultItem;
  }

  private parseItem(item: any, filename: string, resultItem, type: string, folder: string) {
    if (item[type] !== '') {

      const downloadItem = new DownloadItem();
      const fileId = item[type].split('=', 2)[1];

      downloadItem.filename = filename + fileId;
      downloadItem.foldername = `${item[this.currentModel.folder]}/${folder}/`;
      downloadItem.url = item[type];

      resultItem.downloadItems.push(downloadItem);
      resultItem.numberOfSongs += 1;

      return resultItem;
    }
  }
}
