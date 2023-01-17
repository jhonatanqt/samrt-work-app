import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StockPageRoutingModule } from './stock-routing.module';

import { StockPage } from './stock.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    StockPageRoutingModule
  ],
  declarations: [StockPage]
})
export class StockPageModule {}
