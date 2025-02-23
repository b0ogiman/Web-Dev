import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private categories = [
      {
        name: 'Смартфоны',
        products: [
          {
            imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/hda/86319874048030.jpg?format=gallery-medium',
        name: 'iPhone 15 Pro Max',
        description: 'Apple iPhone 15 Pro Max 256GB',
        rating: 4.9,
        link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-seryi-113138420/?c=750000000',
        likes: 0
          },
          {
            imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
            name: 'iPhone 13',
            description: 'Apple iPhone 13 128Gb',
            rating: 4.9,
            link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000',
            likes: 0
          },
          {
            imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/hcf/h69/87295489343518.png?format=gallery-medium',
            name: 'iPhone 16 Pro Max',
            description: 'Apple iPhone 16 Pro Max 256Gb',
            rating: 4.9,
            likes: 0,
            link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-chernyi-123787551/?c=750000000'
          },
      
          {
            imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h8d/h20/86300836954142.jpg?format=gallery-medium',
            name: 'iPhone 15 Pro',
            description: 'Apple iPhone 15 Pro 128Gb',
            rating: 4.9,
            likes: 0,
            link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-128gb-seryi-113138184/?c=750000000'
          },
          {
            imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h44/h1b/82762038771742.jpg?format=gallery-medium',
            name: 'Samsung Galaxy S25 Ultra',
            description: 'Samsung Galaxy S25 Ultra 5G 12 ГБ/512 GB',
            rating: 4.9,
            likes: 0,
            link: 'https://kaspi.kz/shop/p/samsung-galaxy-s25-ultra-5g-12-gb-512-gb-seryi-133434850/?c=7500000000'
          },
        ]
      },
      {
        name: 'Ноутбуки',
        products: [
          {
        imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/hf4/h52/64509322919966.jpg?format=gallery-medium',
        name: 'MacBook Air M2',
        description: 'Apple MacBook Air 13 M2 256GB',
        rating: 4.8,
        likes: 0,
        link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2022-13-6-8-gb-ssd-256-gb-macos-mlxw3-105933794/?c=750000000'
          },
          {
            imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h58/h61/86274830073886.jpg?format=gallery-medium',
            name: 'ThundeRobot 911 X',
            description: 'Ноутбук ThundeRobot 911 X Wild Hunter G2 Pro 15.6" / 16 Гб / SSD 512 Гб / Win 11 Prob',
            rating: 4.2,
            likes: 0,
            link: 'https://resources.cdn-kaspi.kz/img/m/p/h58/h61/86274830073886.jpg?format=gallery-medium'
          },
          {
            imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h0d/hc8/84558388887582.jpg?format=gallery-medium',
            name: 'Acer Aspire 3',
            description: 'Acer Aspire 3 15.6" / 8 Гб / SSD 256',
            rating: 4.0,
            likes: 0,
            link: 'https://kaspi.kz/shop/p/acer-aspire-3-15-6-8-gb-ssd-256-gb-win-11-a315-35-nx-a9aex-00h-114792265/?c=750000000'
          },
      
          {
            imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h1e/h68/86642069504030.jpg?format=gallery-medium',
            name: 'Acer Gadget E10 ETBook',
            description: 'Acer Gadget E10 ETBook 14" / 16 Гб / SSD 512',
            rating: 4.9,
            likes: 0,
            link: 'https://kaspi.kz/shop/p/acer-gadget-e10-etbook-14-16-gb-ssd-512-gb-win-11-home-0167563995-121895857/?c=750000000'
          },
          {
            imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/hbe/h67/84375762599966.jpg?format=gallery-medium',
            name: 'ThundeRobot Zero G3 Ultra 16',
            description: 'hundeRobot Zero G3 Ultra 16" / 32 Гб / SSD 2048 Гб / Win 11 ',
            rating: 3.9,
            likes: 0,
            link: 'https://kaspi.kz/shop/p/thunderobot-zero-g3-ultra-16-32-gb-ssd-2048-gb-win-11--114123805/?c=750000000'
          },
      ]
      },
      {
        name: 'Часы',
        products: [
          {
            imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/p5b/p0a/1511235.png?format=gallery-medium',
        name: 'Apple Watch Series 10',
        description: 'Apple Watch Series 10 S/M 46 мм ',
        rating: 4.6,
        likes: 0,
        link: 'https://kaspi.kz/shop/p/apple-watch-series-10-s-m-46-mm-chernyi-128124978/?c=750000000'
          },
          {
            imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/p3b/pc6/7817024.jpg?format=gallery-medium',
            name: 'Apple Watch SE GPS Gen.2',
            description: 'Apple Watch SE GPS Gen.2 2024 M/L 44 мм',
            rating: 4.3,
            likes: 0,
            link: 'https://kaspi.kz/shop/p/apple-watch-se-gps-gen-2-2024-m-l-44-mm-chernyi-129896011/?c=750000000'
          },
          {
            imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h52/h7d/87248467787806.jpg?format=gallery-medium',
            name: 'Huawei Watch GT 5 Pro',
            description: 'Huawei Watch GT 5 Pro 46 мм черный-черный',
            rating: 4.9,
            likes: 0,
            link: 'https://kaspi.kz/shop/p/huawei-watch-gt-5-pro-46-mm-chernyi-chernyi-124097507/?c=750000000'
          },
      
          {
            imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/hdc/hce/86182020055070.jpg?format=gallery-medium',
            name: 'Garmin Forerunner 965',
            description: 'Garmin Forerunner 965 черный',
            rating: 4.9,
            likes: 0,
            link: 'https://kaspi.kz/shop/p/garmin-forerunner-965-chernyi-109351643/?c=750000000'
          },
          {
            imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h03/he3/86610193350686.jpg?format=gallery-medium',
            name: ' Samsung Galaxy Watch7',
            description: 'Samsung Galaxy Watch7 44 мм',
            rating: 4.9,
            likes: 0,
            link: 'https://kaspi.kz/shop/p/samsung-galaxy-watch7-44-mm-grafitovyi-zelenyi-121760416/?c=750000000'
          }
        ]
      },
      {
        name: 'Наушники',
        products: [
          {
            imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/hf4/hcc/64145010163742.jpg?format=gallery-medium',
            name: 'Apple AirPods Max',
            description: 'Apple AirPods Max',
            rating: 4.3,
            likes: 0,
            link: 'https://kaspi.kz/shop/p/apple-airpods-max-chernyi-100950846/?c=750000000'
          },
          {
            imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h31/hd7/64362668556318.jpg?format=gallery-medium',
            name: 'Apple AirPods 3',
            description: 'Apple AirPods 3 with Lightning Charging Case ',
            rating: 4.4,
            likes: 0,
            link: 'https://kaspi.kz/shop/p/apple-airpods-3-with-lightning-charging-case-belyi-106667987/?c=750000000'
          },
          {
            imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/p64/pde/11569142.jpg?format=gallery-medium',
            name: 'Sony WH-1000XM4',
            description: 'Sony WH-1000XM4 черный',
            rating: 4.9,
            likes: 0,
            link: 'https://kaspi.kz/shop/p/sony-wh-1000xm4-chernyi-100471997/?c=750000000'
          },
      
          {
            imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h1a/ha8/87357814013982.jpg?format=gallery-medium',
            name: 'Xiaomi Redmi Buds 6 Lite',
            description: 'Xiaomi Redmi Buds 6 Lite черный',
            rating: 4.5,
            likes: 0,
            link: 'https://kaspi.kz/shop/p/xiaomi-redmi-buds-6-lite-chernyi-123229664/?c=750000000'
          },
          {
            imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/he6/hff/84203825365022.jpg?format=gallery-medium',
            name: 'Sony WI-C100',
            description: 'Sony WI-C100 черный',
            rating: 4.0,
            likes: 0,
            link: 'https://kaspi.kz/shop/p/sony-wi-c100-chernyi-113925033/?c=750000000'
          }
        ]
      }
    ];
    getCategories() {
      return this.categories.map(category => category.name);
    }
  
    /** Получить товары по категории */
    getProducts(categoryName: string) {
      const category = this.categories.find(cat => cat.name === categoryName);
      return category ? category.products : [];
    }
  }
