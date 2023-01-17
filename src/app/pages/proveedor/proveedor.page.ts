import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.page.html',
  styleUrls: ['./proveedor.page.scss'],
})
export class ProveedorPage implements OnInit {

  formProveedor = this.formBuilder.group({
    nombre: ['', [ Validators.required,]],
    telefono: ['', [Validators.required,Validators.maxLength(9)]],
    articulo: ['', [Validators.required]],
  });

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
  }

  ingresarProveedor(){
    console.log(this.formProveedor);
  }

}
