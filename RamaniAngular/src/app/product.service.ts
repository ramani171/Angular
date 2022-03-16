import { Product } from './product';
import { Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  public getProducts() {
    let products: Product[];

    products = [
      new Product(1, 'Airpods', 2000),
      new Product(2, 'PowerBank', 2500),
      new Product(3, 'Smart Watch', 3000),
      new Product(4, 'Speakers', 8000),
      new Product(5, 'Mouse', 800),
      new Product(6, 'VRHeadsets', 31000),
      new Product(7, 'Keyboard', 3000),
      new Product(8, 'UPS', 6000),
      new Product(9, 'Vacuum cleaner', 20000),
      new Product(10, 'Coffee Beater', 2000),
    ];

    return products;
  }
  private subject = new Subject<any>();
  sendclickevent() {
    this.subject.next('');
  }
  getclickevent(): Observable<any> {
    return this.subject.asObservable();
  }
}
