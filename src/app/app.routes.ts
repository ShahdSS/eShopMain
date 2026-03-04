import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { signin } from './features/signin/signin';
import { signup } from './features/signup/signup';
import { Clothes } from './features/categories/clothes/clothes';
import { Cart } from './features/cart/cart';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'signup', component: signup },
  { path: 'signin', component: signin },
  { path: 'clothes', component: Clothes },
  { path: 'cart', component: Cart }
];
