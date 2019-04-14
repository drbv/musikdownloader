import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {UploadService} from '../../services/upload/upload.service';
import {WorkerService} from '../../services/worker/worker.service';
import {SongFileInfo} from '../../models/SongFileInfo';
import {MatDialog} from '@angular/material';
import {CustomInfoDialogComponent} from '../custom-dialog/custom-info-dialog/custom-info-dialog.component';
import {DialogInfoData} from '../custom-dialog/custom-info-dialog/DialogInfoData';

@Component({
  selector: 'app-file-info',
  templateUrl: './file-info.component.html',
  styles: []
})
export class FileInfoComponent implements OnInit
{
  constructor(private fb: FormBuilder, private uploadService: UploadService, private workerService: WorkerService, public dialog: MatDialog)
  {
  }

  ngOnInit()
  {
  }

  public addFile(event)
  {
    if (!(event.target.files && event.target.files.length))
    {
      return;
    }

    const [file] = event.target.files;

    const success = this.uploadService.upload(file);

    if(!success)
    {
      // todo: move to uploadService
      const infoData: DialogInfoData = {
        title: 'Fehler',
        message: 'Dieser Dateityp wird nicht unterstützt. Bitte wählen Sie eine andere Datei aus.'
      };

      this.dialog.open(CustomInfoDialogComponent, {width: '250px', data: infoData});
    }
  }

  public getFiles()
  {
    return this.uploadService.getUploadedFiles();
  }

  public removeFile(file: File) {
    this.uploadService.removeFile(file);
  }

  public getNumberOfSongs(file: File)
  {
    const fileInfo: SongFileInfo = this.getFileInfo(file);

    return fileInfo ? fileInfo.numberOfSongs : 0;
  }

  public getNumberOfTeams(file: File)
  {
    const fileInfo: SongFileInfo = this.getFileInfo(file);

    return fileInfo ? fileInfo.numberOfTeams : 0;
  }

  private getFileInfo(file: File)
  {
    return this.workerService.getFileInfo(file);
  }

  getCompetionNumber(file: File)
  {
    const fileInfo: SongFileInfo = this.getFileInfo(file);

    return fileInfo ? fileInfo.competionNumber : 0;
  }

  getCompetion(file: File)
  {
    const competionNumber = this.getCompetionNumber(file);

    return 0 === competionNumber ? file.name : 'Turnier ' + competionNumber;
  }
}
