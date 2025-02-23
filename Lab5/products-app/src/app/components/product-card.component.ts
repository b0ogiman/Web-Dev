import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product: any;
  likes: number = 0; // Начальное значение лайков

  ngOnInit() {
    this.likes = this.product.likes || 0; // Инициализация лайков
  }

  increaseLikes() {
    this.likes += 1;
  }

  getWhatsAppShareLink(link: string): string {
    return `https://api.whatsapp.com/send?text=Посмотри этот товар: ${encodeURIComponent(link)}`;
  }

  getTelegramShareLink(link: string): string {
    return `https://t.me/share/url?url=${encodeURIComponent(link)}&text=Посмотри этот товар!`;
  }
}

