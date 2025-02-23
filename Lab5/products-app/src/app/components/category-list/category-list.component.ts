import { Component, EventEmitter, Output } from '@angular/core';
import { NgFor, CommonModule } from '@angular/common'; // ✅ Импортируем CommonModule

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [CommonModule], // ✅ Добавляем в imports
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent {
  @Output() categorySelected = new EventEmitter<string>();
  
  categories: string[] = ['Смартфоны', 'Ноутбуки', 'Часы', 'Наушники'];


  selectCategory(category: string) {
    this.categorySelected.emit(category);
  }
}

