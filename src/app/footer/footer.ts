import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
// import { CommonModule } from "@angular/common";
// import { NgFor } from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrls: ['./footer.css'],
})
export class Footer {
  quickLinks = [
    { 
      name: 'Home', 
      url: '/' 
    },
    { 
      name: 'About Us', 
      url: '/about' 
    },
    { 
      name: 'Services', 
      url: '/services' 
    },
    { 
      name: 'Contact', 
      url: '/contact' 
    },
    { 
      name: 'Privacy Policy', 
      url: '/privacy' 
    },
  ];

  customerServices=[
    'Contact us',
    'Order Tracking',
    'FAQ',
    'Shipping & Delivery',
    'Size Guide',
    'Returns & Exchanges',
    'Terms & Conditions',
    'Support'
  ]
}
