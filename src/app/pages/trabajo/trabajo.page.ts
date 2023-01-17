import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-trabajo',
  templateUrl: './trabajo.page.html',
  styleUrls: ['./trabajo.page.scss'],
})
export class TrabajoPage implements OnInit {
  
  formTrabajador = this.formBuilder.group({
    nombre: ['', [ Validators.required]],
    trabajo: ['', [Validators.required]],
    horario: ['', [Validators.required]],
  });

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
  }

}
