import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapubsPageRoutingModule } from './mapubs-routing.module';

import { MapubsPage } from './mapubs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapubsPageRoutingModule
  ],
  declarations: [MapubsPage]
})
export class MapubsPageModule {}
