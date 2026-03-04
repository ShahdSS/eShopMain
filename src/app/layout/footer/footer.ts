import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { FooterNavigation } from '../../models/footer-navigation.model';
import { quickLinks, customerServices } from '../../models/footer-navigation.model';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrls: ['./footer.scss'],
})
export class Footer {
  quickLinks = quickLinks;
  customerServices = customerServices
}
//   quickLinks = [
//     { 
//       name: 'Home', 
//       url: '/' 
//     },
//     { 
//       name: 'About Us', 
//       url: '/about' 
//     },
//     { 
//       name: 'Services', 
//       url: '/services' 
//     },
//     { 
//       name: 'Contact', 
//       url: '/contact' 
//     },
//     { 
//       name: 'Privacy', 
//       url: '/privacy' 
//     },
//     {
//       name: 'Policy',
//       url: '/policy'
//     }
//   ];

//   customerServices = [
//   { 
//     name: 'Contact us', 
//     url: '/contact-us' 
//   },
//   { 
//     name: 'Order Tracking', 
//     url: '/order-tracking' 
//   },
//   { 
//     name: 'FAQ', 
//     url: '/faq' 
//   },
//   { 
//     name: 'Shipping & Delivery', 
//     url: '/shipping-delivery'
//   },
//   { 
//     name: 'Size Guide', 
//     url: '/size-guide' 
//   },
//   { 
//     name: 'Returns & Exchanges', 
//     url: '/returns-exchanges' 
//   },
//   { 
//     name: 'Terms & Conditions', 
//     url: '/terms-conditions' 
//   },
//   { 
//     name: 'Support', 
//     url: '/support' 
//   }
// ];
