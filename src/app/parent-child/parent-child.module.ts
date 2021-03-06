import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ParentChildComponent } from "./parent-child.component";

import { ParentChildRoutingModule } from "./parent-child-routing.module";
import { ParentComponent } from "./parent/parent.component";
import { MaterialModule } from "../material/material.module";
import { Child1Component } from "./child1/child1.component";
import { Child2Component } from "./child2/child2.component";
import { ParentDialogComponent } from "./parent-dialog/parent-dialog.component";
import { ChildDialogComponent } from "./child-dialog/child-dialog.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { MultiselectDropdownComponent } from "./multiselect-dropdown/multiselect-dropdown.component";
import { NgMultiSelectDropDownModule } from "ng-multiselect-dropdown";
import { PaymentComponent } from './payment/payment.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ParentComponent,
    ParentChildComponent,
    Child1Component,
    Child2Component,
    ParentDialogComponent,
    ChildDialogComponent,
    MultiselectDropdownComponent,
    PaymentComponent
  ],
  imports: [
    CommonModule,
    ParentChildRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule.forRoot(),
    FormsModule,
    HttpClientModule
  ],
  entryComponents: [Child1Component, Child2Component, ChildDialogComponent]
})
export class ParentChildModule {}
