import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapubsPage } from './mapubs.page';

const routes: Routes = [
  {
    path: '',
    component: MapubsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapubsPageRoutingModule {}
