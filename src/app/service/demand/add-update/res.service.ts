import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { empty } from 'rxjs';
import { Demand } from '../demand';
import { DemandService } from '../demand.service';


@Injectable({
  providedIn: 'root'
})
export class DemandResolverService implements Resolve<Demand> {

  constructor(private demandService: DemandService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const id = route.params["id"];

    if(id) {
      return this.demandService.listById(id);
    }
    return empty();
  }
}
