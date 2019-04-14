import { Component } from '@angular/core';
import {WorkerService} from './services/worker/worker.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
  constructor(private workerService: WorkerService)
  {
  }
}
