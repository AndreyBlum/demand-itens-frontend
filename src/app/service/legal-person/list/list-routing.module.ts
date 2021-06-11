import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListLegalComponent } from './list-legal/list-legal.component';

const routes: Routes = [
  {path: "", component: ListLegalComponent}
];

@NgModule({
  imports: [RouterModule
    .forChild(routes)],

  exports: [RouterModule]

})

export class ListRoutingModule { }
