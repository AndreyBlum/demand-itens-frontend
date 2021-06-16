import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { AddUpdateDemandComponent } from './add-update-demand/add-update-demand.component';
import { AddUpdateRoutingModule } from './add-update-routing.module';
import { NgxMaskModule, IConfig } from 'ngx-mask';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;

@NgModule({
  declarations: [AddUpdateDemandComponent],
  imports: [
    NgxMaskModule.forRoot(),
    CommonModule,
    MatSelectModule,
    AddUpdateRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule
  ]
})
export class AddUpdateDemandModule { }
