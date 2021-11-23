import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapcovidPageRoutingModule } from './mapcovid-routing.module';

import { MapcovidPage } from './mapcovid.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapcovidPageRoutingModule
  ],
  declarations: [MapcovidPage]
})
export class MapcovidPageModule {}
