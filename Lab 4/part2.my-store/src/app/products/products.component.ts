import { Component } from '@angular/core';

@Component({
  selector: 'app-products', // ✅ Должно совпадать с <app-products> в HTML
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products = [
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/hda/86319874048030.jpg?format=gallery-medium',
      name: 'iPhone 15 Pro Max',
      description: 'Apple iPhone 15 Pro Max 256GB',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-seryi-113138420/?c=750000000'
    },

    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf4/h52/64509322919966.jpg?format=gallery-medium',
      name: 'MacBook Air M2',
      description: 'Apple MacBook Air 13 M2 256GB',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2022-13-6-8-gb-ssd-256-gb-macos-mlxw3-105933794/?c=750000000'
    },

    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
      name: 'iPhone 13',
      description: 'Apple iPhone 13 128Gb',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000'
    },
    
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hcf/h69/87295489343518.png?format=gallery-medium',
      name: 'iPhone 16 Pro Max',
      description: 'Apple iPhone 16 Pro Max 256Gb',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-chernyi-123787551/?c=750000000'
    },

    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h8d/h20/86300836954142.jpg?format=gallery-medium',
      name: 'iPhone 15 Pro',
      description: 'Apple iPhone 15 Pro 128Gb',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-128gb-seryi-113138184/?c=750000000'
    },
//5

    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p5b/p0a/1511235.png?format=gallery-medium',
      name: 'Apple Watch Series 10',
      description: 'Apple Watch Series 10 S/M 46 мм ',
      rating: 4.6,
      link: 'https://kaspi.kz/shop/p/apple-watch-series-10-s-m-46-mm-chernyi-128124978/?c=750000000'
    },

    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p3b/pc6/7817024.jpg?format=gallery-medium',
      name: 'Apple Watch SE GPS Gen.2',
      description: 'Apple Watch SE GPS Gen.2 2024 M/L 44 мм',
      rating: 4.3,
      link: 'https://kaspi.kz/shop/p/apple-watch-se-gps-gen-2-2024-m-l-44-mm-chernyi-129896011/?c=750000000'
    },

    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
      name: 'Samsung Galaxy S25 Ultra',
      description: 'Samsung Galaxy S25 Ultra 5G 12 ГБ/512 GB',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s25-ultra-5g-12-gb-512-gb-seryi-133434850/?c=7500000000'
    },
    
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h44/h1b/82762038771742.jpg?format=gallery-medium',
      name: 'Samsung Galaxy Z Fold5 ',
      description: 'Samsung Galaxy Z Fold5 5G 12 ГБ/512 ГБ ',
      rating: 4.1,
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-z-fold5-5g-12-gb-512-gb-bezhevyi-112480735/?c=750000000'
    },

    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf4/hcc/64145010163742.jpg?format=gallery-medium',
      name: 'Apple AirPods Max',
      description: 'Apple AirPods Max',
      rating: 4.3,
      link: 'https://kaspi.kz/shop/p/apple-airpods-max-chernyi-100950846/?c=750000000'
    },
  ];

  share(link: string) {
    const message = `Check out this product: ${link}`;
    window.open(`https://t.me/share/url?url=${link}&text=${message}`, '_blank');
  }
}

