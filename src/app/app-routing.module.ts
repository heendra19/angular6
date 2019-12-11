import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssetComponent } from './asset/asset.component';
import { HomeComponent } from './home/home.component';
import { UploadComponent } from './upload/upload.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'asset', component: AssetComponent },
  { path: 'upload', component: UploadComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
