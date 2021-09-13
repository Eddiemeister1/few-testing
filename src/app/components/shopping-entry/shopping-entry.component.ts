import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-shopping-entry',
  templateUrl: './shopping-entry.component.html',
  styleUrls: ['./shopping-entry.component.css']
})
export class ShoppingEntryComponent {

  form = this.formBuilder.group({
    item: [],
    store: []
  })
  constructor(private formBuilder: FormBuilder) { }

  submit() {
    console.log(this.form?.value);
  }

}
