import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ParentChildRoutingModule } from "./parent-child-routing.module";
import { ParentChildComponent } from "./parent-child.component";
import { ParentComponent } from "./parent/parent.component";
import { Child1Component } from "./child1/child1.component";
import { Child2Component } from "./child2/child2.component";
import { ParentDialogComponent } from "./parent-dialog/parent-dialog.component";
import { ChildDialogComponent } from "./child-dialog/child-dialog.component";
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ParentChildComponent,
    ParentComponent,
    Child1Component,
    Child2Component,
    ParentDialogComponent,
    ChildDialogComponent
  ],
  imports: [
    CommonModule, 
    ParentChildRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    Child1Component,
    Child2Component,
    ChildDialogComponent
  ]
})
export class ParentChildModule {}
