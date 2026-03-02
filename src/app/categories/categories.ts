import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './categories.html',
  styleUrls: ['./categories.css'],
})
export class Categories {
  categories = [
    { name: 'Clothes', image: 'clothes.webp' },
  ];
}