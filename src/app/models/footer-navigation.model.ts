export interface FooterNavigation {
    name: string;
    url: string;
}

export const quickLinks: FooterNavigation[] = [
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

  export const customerServices: FooterNavigation[] = [
    { 
    name: 'Contact us', 
    url: '/contact-us' 
  },
  { 
    name: 'Order Tracking', 
    url: '/order-tracking' 
  },
  { 
    name: 'FAQ', 
    url: '/faq' 
  },
  { 
    name: 'Shipping & Delivery', 
    url: '/shipping-delivery'
  },
  { 
    name: 'Size Guide', 
    url: '/size-guide' 
  },
  { 
    name: 'Returns & Exchanges', 
    url: '/returns-exchanges' 
  },
  { 
    name: 'Terms & Conditions', 
    url: '/terms-conditions' 
  },
  { 
    name: 'Support', 
    url: '/support' 
  }
  ];