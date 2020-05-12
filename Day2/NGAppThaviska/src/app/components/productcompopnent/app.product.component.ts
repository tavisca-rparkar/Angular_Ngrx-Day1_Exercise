import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/app.product';
import { Logic } from '../../models/app.logic';
import { Categories } from '../../models/app.constants';
import { StringArrayOperations } from '../../../../../../Day1/Exercise1/stringArrayOperations';
@Component({
  selector: 'app-product-component',
  templateUrl: './product.view.html',
  styleUrls:[
    './product.view.css'
  ]
})
export class ProductComponent implements OnInit {
  product: Product;
  products: Array<Product>;
  private logic: Logic;
  cats = Categories;
  headers: Array<string>;
  sortAndReverse: StringArrayOperations;
  constructor() {
      this.product = new Product(0, '', 0, '');
      this.products = new Array<Product>();
      this.logic = new Logic();
      this.headers  =new Array<string>();
      this.sortAndReverse = new StringArrayOperations();
  }

  // inoked after the ctor
  // write a performance internsicive code
  // whihc we cannot write in ctor
  ngOnInit(): void {
     this.products = this.logic.getProducts();
     // read product Scehma from Product class
     for(let p in this.product) {
       this.headers.push(p);
     }
  }
  clear(): void {
    this.product = new Product(0, '', 0, '');
  }
  save(): void {
    this.products = this.logic.saveProducts(this.product);
    console.log(JSON.stringify(this.products));
  }
  getSelectedProduct(p: Product): void {
      this.product = Object.assign({}, p);
  }
  deleteRow(prd: Product): void {
    let index = this.products.findIndex(x => x.ProductId == prd.ProductId);
    this.products.splice(index, 1);
  }
  sortByProductNames(): void {
    this.products = this.sortAndReverse.sortNamesByLength(this.products);
  }
  reverseByProductNames(): void {
    this.products = this.sortAndReverse.reverseNames(this.products);
  }
}
