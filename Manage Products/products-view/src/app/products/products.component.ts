import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styles: [],
})
export class ProductsComponent implements OnInit {
  // products: Product[];
  products: any;
  product: Product;
  prodId: String;
  prodName: String;
  price: String;
  arr: any[];
  op = true;
  index: number;
  _id: any;

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((products) => {
      console.log('Product Component -> ngOnInit -> products', products);

      this.products = products;
    });
  }

  addProduct() {
    const newProduct = {
      prodId: this.prodId,
      prodName: this.prodName,
      price: this.price,
    };
    this.productsService.addProduct(newProduct).subscribe((product) => {
      console.log('productsComponent -> addProduct -> product', product);
      this.products.push(product);
      this.productsService
        .getProducts()
        .subscribe((products) => (this.products = products));
    });
    this.prodId = '';
    this.prodName = '';
    this.price = '';
  }
  deleteProduct(product) {
    // var products = this.products;
    this.productsService.deleteProduct(product._id).subscribe((data) => {
      console.log(' data', data);
      console.log('_id : ' + product._id);
      var index = this.products.indexOf(product);

      console.log('deleteProduct -> index  =', index);

      this.products.splice(index, 1);
    });
  }

  editProduct(product) {
    this.op = false;
    this.index = this.products.indexOf(product);
    this._id = product._id;
    this.prodId = product.prodId;
    this.prodName = product.prodName;
    this.price = product.price;
  }

  updateProduct() {
    this.op = true;
    console.log(' index : ', this.index);

    const newProduct = {
      prodId: this.prodId,
      prodName: this.prodName,
      price: this.price,
    };
    console.log('newProduct', newProduct);
    console.log('this._id ', this._id);

    this.productsService
      .updateProduct(this._id, newProduct)
      .subscribe((product) => {
        console.log(' putProduct -> product : ', product);
        this.products.splice(this.index, 1, product);
      });

    this.prodId = '';
    this.prodName = '';
    this.price = '';
  }
}
