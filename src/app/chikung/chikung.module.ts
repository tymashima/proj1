import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChikungPageRoutingModule } from './chikung-routing.module';

import { ChikungPage } from './chikung.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChikungPageRoutingModule
  ],
  declarations: [ChikungPage]
})
export class ChikungPageModule {}
