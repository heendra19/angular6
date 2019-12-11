import { Component, OnInit } from '@angular/core';

import { ASSET }    from '../model/mock-asset';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})

export class UploadComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  assets = ASSET;
  uploadModel = { asset : null, file : null };
  get diagnostic() {
  return JSON.stringify(this.uploadModel);
  }

}
