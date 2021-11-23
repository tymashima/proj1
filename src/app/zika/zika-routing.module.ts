import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZikaPage } from './zika.page';

const routes: Routes = [
  {
    path: '',
    component: ZikaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZikaPageRoutingModule {}
