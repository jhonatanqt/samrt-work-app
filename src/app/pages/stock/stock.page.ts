import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.page.html',
  styleUrls: ['./stock.page.scss'],
})
export class StockPage implements OnInit {

  
  formStock = this.formBuilder.group({
    producto: ['', [ Validators.required]],
    unidades: ['', [Validators.required]],
    preciounds: ['', [Validators.required]],
  });


  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
  }

}
