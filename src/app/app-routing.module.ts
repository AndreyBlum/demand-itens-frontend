import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: "home", loadChildren: () => import('./features/home/home.component').then(module => module.HomeComponent)
  },
  {
    path: "physicals", loadChildren: () => import('./service/physical-person/list/list.module').then(module => module.ListModule)
  },
 {
    path: "physicals/add", loadChildren: () => import('./service/physical-person/add-update/add-update.module').then(module => module.AddUpdateModule)
  },
  {
    path: "physicals/update/:id", loadChildren: () => import('./service/physical-person/add-update/add-update.module').then(module => module.AddUpdateModule)
  },
  {
    path: "legals", loadChildren: () => import('./service/legal-person/list/list.module').then(module => module.ListModule)
  },
 {
    path: "legals/add", loadChildren: () => import('./service/legal-person/add-update/add-update.module').then(module => module.AddUpdateModule)
  },
  {
    path: "legals/update/:id", loadChildren: () => import('./service/legal-person/add-update/add-update.module').then(module => module.AddUpdateModule)
  },
  {
    path: "products", loadChildren: () => import('./service/product/list/list.module').then(module => module.ListModule)
  },
  {
    path: "products/add", loadChildren: () => import('./service/product/add-update/add-update.module').then(module => module.AddUpdateModule)
  },
  {
    path: "products/update/:id", loadChildren: () => import('./service/product/add-update/add-update.module').then(module => module.AddUpdateModule)
  },
  {
    path: "demands", loadChildren: () => import('./service/demand/list/list.module').then(module => module.DemandListModule)
  },
  {
    path: "demands/add", loadChildren: () => import('./service/demand/add-update/add-update.module').then(module => module.AddUpdateDemandModule)
  },
  {
    path: "demands/update/:id", loadChildren: () => import('./service/demand/add-update/add-update.module').then(module => module.AddUpdateDemandModule)
  },
  {
    path: "address", loadChildren: () => import('./service/address/list/list.module').then(module => module.AddressListModule)
  },
  {
    path: "address/add", loadChildren: () => import('./service/address/add-update/add-update.module').then(module => module.AddUpdateModule)
  },
  {
    path: "address/update/:id", loadChildren: () => import('./service/address/add-update/add-update.module').then(module => module.AddUpdateModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
