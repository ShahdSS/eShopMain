import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
// import { CommonModule } from "@angular/common";
// import { NgFor } from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrls: ['./footer.scss'],
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
      name: 'Privacy', 
      url: '/privacy' 
    },
    {
      name: 'Policy',
      url: '/policy'
    }
  ];

  customerServices = [
  { display: 'Contact us', path: '/contact-us' },
  { display: 'Order Tracking', path: '/order-tracking' },
  { display: 'FAQ', path: '/faq' },
  { display: 'Shipping & Delivery', path: '/shipping-delivery' },
  { display: 'Size Guide', path: '/size-guide' },
  { display: 'Returns & Exchanges', path: '/returns-exchanges' },
  { display: 'Terms & Conditions', path: '/terms-conditions' },
  { display: 'Support', path: '/support' }
];
}
