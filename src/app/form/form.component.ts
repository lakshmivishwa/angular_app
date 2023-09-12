import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  firstName: string = 'Lakshmi';

  setValue() {
    // You can now access the input value through this.firstName
    console.log(this.firstName);
  }

}
