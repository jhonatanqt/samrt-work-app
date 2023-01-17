import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrabajoPageRoutingModule } from './trabajo-routing.module';

import { TrabajoPage } from './trabajo.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    TrabajoPageRoutingModule
  ],
  declarations: [TrabajoPage]
})
export class TrabajoPageModule {}
