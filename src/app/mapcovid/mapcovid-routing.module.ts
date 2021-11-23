import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapcovidPage } from './mapcovid.page';

const routes: Routes = [
  {
    path: '',
    component: MapcovidPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapcovidPageRoutingModule {}
