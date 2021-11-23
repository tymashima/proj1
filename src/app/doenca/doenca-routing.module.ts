import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoencaPage } from './doenca.page';

const routes: Routes = [
  {
    path: '',
    component: DoencaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoencaPageRoutingModule {}
