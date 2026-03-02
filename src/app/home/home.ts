import { Component } from '@angular/core';
import { HeroBanner } from "../hero-banner/hero-banner";
import { Categories } from '../categories/categories';
import { Footer } from '../footer/footer';
import { Clothes } from '../categories/clothes/clothes';

@Component({
  selector: 'app-home',
  imports: [HeroBanner, Categories, Footer],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
