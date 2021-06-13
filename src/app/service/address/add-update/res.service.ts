import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { empty } from 'rxjs';
import { Address } from '../address';
import { AddressService } from '../address.service';


@Injectable({
  providedIn: 'root'
})
export class Res implements Resolve<Address> {

  constructor(private addressService: AddressService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const id = route.params["id"];
    console.log(route)
    if(id) {
      return this.addressService.listById(id);
    }
    return empty();
  }
}
