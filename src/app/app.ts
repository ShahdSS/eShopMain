import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './layout/header/header';
import { HeroBanner } from './layout/hero-banner/hero-banner';
import { Footer } from './layout/footer/footer';
import { Categories } from './features/categories/categories';
import { Clothes } from './features/categories/clothes/clothes';
import { Cart } from "./features/cart/cart";
import { signup } from './features/signup/signup';
import { signin } from './features/signin/signin';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true,
})

export class App {
  protected readonly title = signal('eShop');
}
