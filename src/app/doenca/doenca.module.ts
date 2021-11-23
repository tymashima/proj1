import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoencaPageRoutingModule } from './doenca-routing.module';

import { DoencaPage } from './doenca.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoencaPageRoutingModule
  ],
  declarations: [DoencaPage]
})
export class DoencaPageModule {}
