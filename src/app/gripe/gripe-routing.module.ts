import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GripePage } from './gripe.page';

const routes: Routes = [
  {
    path: '',
    component: GripePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GripePageRoutingModule {}
