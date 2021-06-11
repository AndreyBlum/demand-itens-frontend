import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhysicalAddUpdateComponent } from './add-update-physical/add-update-physical.component';
import { Res } from './res.service';

const routes: Routes = [
  {
    path: "",
    component: PhysicalAddUpdateComponent,
    resolve: {
      physical: Res
    }
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddUpdateRoutingModule { }
