import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemandListComponent } from './list-demand/list-demand.component';


const routes: Routes = [
  {path: "", component: DemandListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemandListRoutingModule { }
