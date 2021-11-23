import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DenguePage } from './dengue.page';

const routes: Routes = [
  {
    path: '',
    component: DenguePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DenguePageRoutingModule {}
