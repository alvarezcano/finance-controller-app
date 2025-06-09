import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Categoria } from '../models/categorias.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  private dbPath = '/financeController/categorias';

  categoriasRef: AngularFireList<Categoria>;

  constructor(private db: AngularFireDatabase) {
    this.categoriasRef = db.list(this.dbPath);
  }

  getAll(): AngularFireList<Categoria> {
    return this.categoriasRef;
  }

  create(categorias: Categoria): any {
    return this.categoriasRef.push(categorias);
  }

  update(key: string, value: any): Promise<void> {
    return this.categoriasRef.update(key, value);
  }

  delete(key: string): Promise<void> {
    return this.categoriasRef.remove(key);
  }

  deleteAll(): Promise<void> {
    return this.categoriasRef.remove();
  }
}