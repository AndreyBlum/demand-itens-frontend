import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUpdateDemandComponent } from './add-update-demand/add-update-demand.component';
import { DemandResolverService } from './res.service';

const routes: Routes = [
  {
    path: "",
    component: AddUpdateDemandComponent,
    resolve: {
      demand: DemandResolverService
    }
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddUpdateDemandRoutingModule { }
