import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductAddUpdateComponent } from './add-update-product/add-update-product.component';
import { Res } from './res.service';

const routes: Routes = [
  {
    path: "",
    component: ProductAddUpdateComponent,
    resolve: {
      product: Res
    }
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddUpdateRoutingModule { }
