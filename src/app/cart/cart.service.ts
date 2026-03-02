import { Injectable, signal, computed } from '@angular/core';
import { CartItem } from './cart.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems = signal<CartItem[]>([]);
  items = this.cartItems.asReadonly();

  totalItems = computed(() =>
    this.cartItems().reduce((total, item) => total + item.quantity, 0)
  );

  totalPrice = computed(() =>
    this.cartItems().reduce((total, item) => total + item.price * item.quantity, 0)
  );

  addToCart(product: any) {
    const items = this.cartItems();
    const index = items.findIndex(item => item.id === product.id);

    if (index > -1) {
      items[index].quantity += 1;
      this.cartItems.set([...items]);
    } else {
      this.cartItems.set([
        ...items,
        {
          id: product.id,
          title: product.title,
          price: product.price,
          quantity: 1,
          image: product.images[0],
        },
      ]);
    }
  }

  removeFromCart(id: number) {
    this.cartItems.set(this.cartItems().filter(item => item.id !== id));
  }

  cleanCart() {
    this.cartItems.set([]);
  }
}