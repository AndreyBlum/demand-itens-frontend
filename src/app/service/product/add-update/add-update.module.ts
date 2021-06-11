import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { AddUpdateRoutingModule } from './add-update-routing.module';
import { ProductAddUpdateComponent } from './add-update-product/add-update-product.component';

@NgModule({
  declarations: [ProductAddUpdateComponent],
  imports: [
    CommonModule,
    AddUpdateRoutingModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule
  ]
})
export class AddUpdateModule { }
