import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClothesService } from './clothes.service';
import { CartService } from '../../cart/cart.service';
import { clothes } from './clothes.model';

@Component({
  selector: 'app-clothes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clothes.html',
  styleUrl: './clothes.css',
})
export class Clothes implements OnInit {
  clothes: clothes[] = [];
  isLoading = signal<boolean>(true);

  constructor(
    private clothesService: ClothesService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.clothesService.getClothes().subscribe({
      next: (data) => {
        this.clothes = data;
        this.isLoading.set(false);
      },
      error: () => {
        this.isLoading.set(false);
      }
    });
  }

  onAddToCart(item: any): void {
    this.cartService.addToCart(item);
  }
}