import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { empty } from 'rxjs';
import { Product } from '../product';
import { ProductService } from '../product.service';


@Injectable({
  providedIn: 'root'
})
export class Res implements Resolve<Product> {

  constructor(private productService: ProductService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const id = route.params["id"];

    if(id) {
      return this.productService.listById(id);
    }
    return empty()
  }
}
