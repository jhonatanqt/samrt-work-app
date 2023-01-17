import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProveedorPageRoutingModule } from './proveedor-routing.module';

import { ProveedorPage } from './proveedor.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    ProveedorPageRoutingModule
  ],
  declarations: [ProveedorPage]
})
export class ProveedorPageModule {}
