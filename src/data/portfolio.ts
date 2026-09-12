// Portfolio galleries. Imported by the portfolio page and by the prerender
// step, which needs the title and description to build each page head.

export interface PortfolioCategory {
  title: string
  tag: string
  description: string
  images: string[]
}

export const categoryData: Record<string, PortfolioCategory> = {
  'logo-design': {
    title: 'Graphics and 3D',
    tag: 'GRAPHICS AND 3D',
    description: 'Explore TechReign\'s graphics and 3D design portfolio — logos, illustrations, and visual artwork crafted for brands worldwide.',
    images: ['/graphics/img1.jpeg', '/graphics/img2.jpeg', '/graphics/img3.jpeg' 
      , '/graphics/img4.jpeg', '/graphics/img15.jpg' , '/graphics/img6.jpeg',  
      '/graphics/img18.jpg', '/graphics/img10.jpg', '/graphics/img11.jpg', '/graphics/img12.jpg',
      '/graphics/img13.jpg', '/graphics/img9.jpeg', '/graphics/img19.png','/graphics/img20.png', '/graphics/img21.png', '/graphics/img21.webp', '/graphics/img22.webp',
      '/graphics/img23.webp', '/graphics/img24.webp', '/graphics/img25.jpg', '/graphics/img26.png', '/graphics/img27.webp'
    ], 
  },
  'web-development': {
    title: 'Web Development',
    tag: 'WEB DEVELOPMENT',
    description: 'Discover TechReign\'s web development projects — responsive, fast, and modern websites built for businesses worldwide.',
    images: ['/web/web1.webp','/web/1.jpg','/web/2.jpg','/web/3.jpg','/web/4.jpg','/web/5.jpg',
    '/web/6.jpg','/web/7.jpg','/web/8.jpg','/web/9.jpg','/web/10.jpg','/web/11.jpg','/web/12.jpg',
    '/web/13.jpg', '/web/14.jpg','/web/15.jpg', '/web/16.jpg', '/web/17.jpg', '/web/18.jpg', '/web/19.jpg',
    '/web/20.jpg', '/web/21.jpg', '/web/22.jpg', '/web/23.jpg', '/web/24.jpg', '/web/25.jpg'
    ], 
  },
  'branding': {
    title: 'Branding',
    tag: 'BRANDING',
    description: 'Explore TechReign\'s branding portfolio — complete brand identity systems and design excellence for leading companies.',
    images: ['/branding/img1.jpg','/branding/img2.jpg','/branding/img3.jpg',
      '/branding/img4.jpg','/branding/img5.jpg','/branding/img6.jpg', '/branding/img7.jpg', '/branding/img8.jpg',
    '/branding/img9.jpg' ,'/branding/img10.jpg' , '/branding/img11.jpg' , '/branding/img12.jpg', '/branding/img13.png'], 
  },
  'web3': {
    title: 'Web3',
    tag: 'WEB3',
    description: 'View TechReign\'s Web3 and blockchain design projects — innovative digital experiences for the decentralized web.',
    images: ['/web3/1.jpg', '/web3/2.webp', '/web3/3.webp', '/web3/4.webp', '/web3/5.webp', '/web3/6.webp', '/web3/7.webp', '/web3/8.webp', '/web3/9.webp'], 
  },
}
