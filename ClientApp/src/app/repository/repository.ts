import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class Repository {
    product: Product;
        constructor(private http: HttpClient) {
            this.getProduct(1);
        }

        getProduct(id: number) {
            const test = this.http.get<Product>('/api/products/' + id)
            .subscribe(p => {this.product = p; console.log(this.product)});
            }
}
