import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { empty } from 'rxjs';
import { LegalPerson } from '../legal-person';
import { LegalPersonService } from '../legal-person.service';

@Injectable({
  providedIn: 'root'
})
export class Res implements Resolve<LegalPerson> {

  constructor(private legalService: LegalPersonService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const id = route.params["id"];

    if(id) {
      return this.legalService.listById(id);
    }
    return empty()
  }
}
