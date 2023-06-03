import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../core/interface/housinglocation.interface';
import { RouterModule, Routes } from '@angular/router';
@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [
    CommonModule, 
    HousingLocationComponent,
    RouterModule
  ],
  template: `
      <section class="listing">
    <img class="listing-photo" [src]="housingLocation.photo" alt="Exterior photo of {{housingLocation.name}}">
    <h2 class="listing-heading">{{ housingLocation.name }}</h2>
    <p class="listing-location">{{ housingLocation.city}}, {{housingLocation.state }}</p>
    <a [routerLink]="['/details', housingLocation.id]">Learn More</a>
  </section>
  `,
  styleUrls: ['./housing-location.component.css']
})
export class HousingLocationComponent implements OnInit {
  @Input() housingLocation !: HousingLocation;
  // route: ActivatedRoute = inject(ActivatedRoute);
  // housingLocationId = -1;
  // constructor() {
  //     this.housingLocationId = Number(this.route.snapshot.params['id']);
  // }

  ngOnInit(): void {
  }

}
