import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZikaPageRoutingModule } from './zika-routing.module';

import { ZikaPage } from './zika.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZikaPageRoutingModule
  ],
  declarations: [ZikaPage]
})
export class ZikaPageModule {}
