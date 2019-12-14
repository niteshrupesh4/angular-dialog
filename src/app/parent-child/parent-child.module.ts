import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentChildComponent } from './parent-child.component';

import { ParentChildRoutingModule } from "./parent-child-routing.module";
import { ParentComponent } from './parent/parent.component';
@NgModule({
  imports: [
    CommonModule,
    ParentChildRoutingModule
  ],
  declarations: [
    ParentChildComponent, 
    ParentComponent
    ]
})
export class ParentChildModule { }