import { Component } from '@angular/core';
import { Repository } from './repository/repository';
import { Product } from './models/product';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SportsStore';
  constructor(private repo: Repository) { }
  get product(): Product {
  return this.repo.product;
}
}
