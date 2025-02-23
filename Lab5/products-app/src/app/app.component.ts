import { Component } from '@angular/core';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { ProductListComponent } from './components/product-list/product-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CategoryListComponent, ProductListComponent], // ✅ Теперь корректно!
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedCategory: string = 'Смартфоны';
  title: any;

  onCategorySelected(category: string) {
    this.selectedCategory = category;
  }
}
