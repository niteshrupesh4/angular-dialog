import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablePageRoutingModule } from './table-page-routing.module';
import { TablePageComponent } from './table-page.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [TablePageComponent],
  imports: [
    CommonModule,
    TablePageRoutingModule,
    MaterialModule
  ]
})
export class TablePageModule { }
