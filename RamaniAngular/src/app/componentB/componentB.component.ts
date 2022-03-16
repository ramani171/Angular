import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
@Component({
  selector: 'app-componentB',
  templateUrl: './componentB.component.html',
  styleUrls: ['./componentB.component.css'],
})
export class componentBComponent implements OnInit {
  constructor(private productService: ProductService) {}
  ngOnInit(): void {}
  clickme() {
    this.productService.sendclickevent();
  }
}
