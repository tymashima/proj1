import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DenguePageRoutingModule } from './dengue-routing.module';

import { DenguePage } from './dengue.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DenguePageRoutingModule
  ],
  declarations: [DenguePage]
})
export class DenguePageModule {}
