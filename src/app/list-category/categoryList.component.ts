import { Component } from '@angular/core';
import { Categoria } from '../models/categorias.model';
import { CategoriaService } from '../services/categorias.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-categoryList',
  templateUrl: './categoryList.component.html',
  styleUrls: ['./categoryList.component.css']
})
export class CategoryListComponent {

  categorias?: Categoria[];
  currentCategoria?: Categoria;
  currentIndex = -1;
  title = '';

  //categoria: Categoria = new Categoria();
  //submitted = false;

  constructor(private categoriaService: CategoriaService) { }

  ngOnInit(): void {
    this.retrieveCategorias();
  }

  refreshList(): void {
    this.currentCategoria = undefined;
    this.currentIndex = -1;
    this.retrieveCategorias();
  }

  retrieveCategorias(): void {
    this.categoriaService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.categorias = data;
    });
  }

  setActiveCategoria(categoria: Categoria, index: number): void {
    this.currentCategoria = categoria;
    this.currentIndex = index;
  }
}
