import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GripePageRoutingModule } from './gripe-routing.module';

import { GripePage } from './gripe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GripePageRoutingModule
  ],
  declarations: [GripePage]
})
export class GripePageModule {}
