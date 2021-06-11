import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { AddUpdateDemandComponent } from './add-update-demand/add-update-demand.component';
import { AddUpdateDemandRoutingModule } from './add-update-routing.module';

@NgModule({
  declarations: [AddUpdateDemandComponent],
  imports: [
    CommonModule,
    AddUpdateDemandRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule
  ]
})
export class AddUpdateDemandModule { }
