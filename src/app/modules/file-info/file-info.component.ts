import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {UploadService} from '../../services/upload/upload.service';
import {WorkerService} from '../../services/worker/worker.service';
import {SongFileInfo} from '../../models/SongFileInfo';
import {MatDialog, MatSelectionList} from '@angular/material';
import {CustomInfoDialogComponent} from '../custom-dialog/custom-info-dialog/custom-info-dialog.component';
import {DialogInfoData} from '../custom-dialog/models/dialog-info-data.model';
import {Constants} from '../custom-dialog/models/constants.model';
import {ConfirmDialogData} from '../custom-dialog/models/confirm-dialog-data.model';
import {DefaultConfirmDialogComponent} from '../custom-dialog/default-confirm-dialog/default-confirm-dialog.component';
import {FileDownloadService} from '../download/file-download/file-download.service';
import {DownloadItem} from '../../models/DownloadItem';

@Component({
  selector: 'app-file-info',
  templateUrl: './file-info.component.html',
  styles: []
})
export class FileInfoComponent implements OnInit {
  @ViewChild('selectionList', { static: true }) selectionList: MatSelectionList;

  constructor(private fb: FormBuilder,
              private uploadService: UploadService,
              private workerService: WorkerService,
              public dialog: MatDialog,
              private fileDownloadService: FileDownloadService) {
  }

  ngOnInit() {
  }

  public addFile(event) {
    if (!(event.target.files && event.target.files.length)) {
      return;
    }

    const [file] = event.target.files;

    const success = this.uploadService.upload(file);

    if (!success) {
      // todo: move to uploadService
      const infoData: DialogInfoData = {
        title: 'Fehler',
        message: 'Dieser Dateityp wird nicht unterstützt. Bitte wählen Sie eine andere Datei aus.'
      };

      this.dialog.open(CustomInfoDialogComponent, {width: Constants.CUSTOM_DIALOG_WIDTH, data: infoData});
    }
  }

  public getFiles(): Set<File> {
    return this.uploadService.getUploadedFiles();
  }

  public removeFile(file: File) {
    this.uploadService.removeFile(file);
  }

  public getNumberOfSongs(file: File) {
    const fileInfo: SongFileInfo = this.getFileInfo(file);

    return fileInfo ? fileInfo.numberOfSongs : 0;
  }

  public getNumberOfTeams(file: File) {
    const fileInfo: SongFileInfo = this.getFileInfo(file);

    return fileInfo ? fileInfo.numberOfTeams : 0;
  }

  private getFileInfo(file: File): SongFileInfo {
    return this.workerService.getFileInfo(file);
  }

  public getCompetionNumber(file: File) {
    const fileInfo: SongFileInfo = this.getFileInfo(file);

    return fileInfo ? fileInfo.competionNumber : 0;
  }

  public getCompetion(file: File) {
    const competionNumber = this.getCompetionNumber(file);

    return (competionNumber === 0 || isNaN(competionNumber)) ? file.name : 'Turnier ' + competionNumber;
  }

  public deleteSelectedItems() {
    this.dialog.open(DefaultConfirmDialogComponent, {
      width: Constants.CUSTOM_DIALOG_WIDTH,
      data: {
        title: 'Ausgewählte Dateien löschen?',
        message: '',
        okButtonColor: 'warn',
        okIcon: 'delete',
        okText: 'Löschen',
        disableCancelColor: true
      } as ConfirmDialogData
    }).afterClosed().subscribe(value => {
      if (value) {
        this.selectionList.selectedOptions.selected.forEach(item => this.uploadService.removeFile(item.value));
      }
    });
  }

  public downloadSelectedItems() {
    this.selectionList.selectedOptions.selected.forEach(item => {
      console.log('it: ', item.value.name, this.getFileInfo(item.value).items);

      const downloadItems: DownloadItem[] =  this.getFileInfo(item.value).items;

      downloadItems.forEach((downloadItem: DownloadItem) => {
        this.fileDownloadService.downloadFile(downloadItem);
      });
    });
  }

  public disableDownloadButton() {
    return !this.selectionList.selectedOptions.hasValue();
  }

  public disableDeleteButton() {
    return !this.selectionList.selectedOptions.hasValue();
  }
}
