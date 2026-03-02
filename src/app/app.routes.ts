import { Routes } from '@angular/router';
import { Home } from './home/home';
import { signin } from './signin/signin';
import { signup } from './signup/signup';
import { Clothes } from './categories/clothes/clothes';
import { Cart } from './cart/cart';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'signup', component: signup },
  { path: 'signin', component: signin },
  { path: 'clothes', component: Clothes },
  { path: 'cart', component: Cart }
];
