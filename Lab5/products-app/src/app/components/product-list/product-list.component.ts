import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnChanges {
  @Input() selectedCategory: string = 'Смартфоны'; // Получаем категорию от родителя
  products: any[] = [];

  constructor(private productService: ProductService) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['selectedCategory']) {
      this.loadProducts();
    }
  }

  loadProducts() {
    this.products = this.productService.getProducts(this.selectedCategory);
    console.log(`Загружены товары для категории: ${this.selectedCategory}`, this.products);
  }
}
