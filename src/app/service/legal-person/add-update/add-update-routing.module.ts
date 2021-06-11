import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LegalAddUpdateComponent } from './add-update-legal/add-update-legal.component';
import { Res } from './res.service';

const routes: Routes = [
  {
    path: "",
    component: LegalAddUpdateComponent,
    resolve: {
      legal: Res
    }
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddUpdateRoutingModule { }
