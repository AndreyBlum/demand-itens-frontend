import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { empty } from 'rxjs';
import { PhysicalPerson } from '../physical-person';
import { PhysicalPersonService } from '../physical-person.service';


@Injectable({
  providedIn: 'root'
})
export class Res implements Resolve<PhysicalPerson> {

  constructor(private physicalService: PhysicalPersonService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const id = route.params["id"];

    if(id) {
      return this.physicalService.listById(id);
    }
    return empty()
  }
}
