import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUpdateAddressComponent } from './add-update-address/add-update-address.component';
import { Res } from './res.service';

const routes: Routes = [
  {
    path: "",
    component: AddUpdateAddressComponent,
    resolve: {
      address: Res
    }
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddUpdateRoutingModule { }
