import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  template: `
  <p>details works! {{ housingLocationId }}</p>
  `,
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {

  housingLocationId = -1;
  constructor(private route: ActivatedRoute) {
    this.housingLocationId = Number(this.route.snapshot.params['id']);
  }

}
