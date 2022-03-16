import { Component, OnInit, Input } from '@angular/core';

import { ProductService } from '../product.service';
import { Product } from '../product';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-componentA',
  templateUrl: './componentA.component.html',
  styleUrls: ['./componentA.component.css'],
})
export class componentAComponent implements OnInit {
  products: Product[];
  clickeventsubscription: Subscription;
  constructor(private productService: ProductService) {
    this.clickeventsubscription = this.productService
      .getclickevent()
      .subscribe(() => {
        this.increamentcount();
      });
    this.productService = new ProductService();
  }
  // just for testing
  // count:number = 0;
  // name:string;
  // list: string[] = ['bala','paraveen','raghul'];
  // list1:string[];
  increamentcount() {
    // this.list1 = this.list;
    // return this.list1;
    this.products = this.productService.getProducts();
    return this.products;
  }

  ngOnInit(): void {}
}
