import { Component } from '@angular/core';
import { Categoria } from '../models/categorias.model';
import { CategoriaService } from '../services/categorias.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {

  categoria: Categoria = new Categoria();
  submitted = false;

  constructor(private categoriaService: CategoriaService) { }  
  
  saveCategory(): void {
    this.categoriaService.create(this.categoria).then(() => {
      console.log('Created new item successfully!');
      this.submitted = true;
    });
  }

  newCategory(): void {
    this.submitted = false;
    this.categoria = new Categoria();
  }
}
