import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./header/header";
import { HeroBanner } from "./hero-banner/hero-banner";
import { Categories } from './categories/categories';
import { Clothes } from "./categories/clothes/clothes";
import { Cart } from "./cart/cart";
import { signup } from './signup/signup';
import { signin } from './signin/signin';
import { Footer } from "./footer/footer";

@Component({
  selector: 'app-root',
  imports: [Header, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true,
})

export class App {
  protected readonly title = signal('eShop');
}
