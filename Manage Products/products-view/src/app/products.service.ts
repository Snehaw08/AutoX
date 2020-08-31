import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  // . . . Get all the Products . . . <Product>
  getProducts() {
    return this.http.get('http://localhost:3000/api/products');
  }
  addProduct(newProduct) {
    return this.http.post('http://localhost:3000/api/product', newProduct);
  }
  // . . . delete method . . .
  deleteProduct(id) {
    return this.http.delete('http://localhost:3000/api/product/' + id);
  }
  // . . . update method . . .
  updateProduct(id, product) {
    return this.http.put('http://localhost:3000/api/product/' + id, product);
  }
}
