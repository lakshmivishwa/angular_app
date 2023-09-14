import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  firstName: string = 'Lakshmi';
  lastName:string= '';
  setfValue() {
    console.log(this.firstName);
  }
  setlValue(value: string) {
    console.log(value);
  }
}
