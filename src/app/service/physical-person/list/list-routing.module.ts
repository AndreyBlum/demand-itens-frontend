import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListPhysicalComponent } from './list-physical/list-physical.component';

const routes: Routes = [
  {path: "", component: ListPhysicalComponent}
];

@NgModule({
  imports: [RouterModule
    .forChild(routes)],

  exports: [RouterModule]

})

export class ListRoutingModule { }
