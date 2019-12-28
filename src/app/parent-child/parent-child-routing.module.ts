import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentChildComponent } from './parent-child.component';
import { ParentComponent } from './parent/parent.component';
import { ParentDialogComponent } from './parent-dialog/parent-dialog.component';
import { MultiselectDropdownComponent } from 
'./multiselect-dropdown/multiselect-dropdown.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  {
    path: '', component: ParentChildComponent,
    children: [
      {
        path: '',
        component: ParentComponent
      },
      {
        path: 'dialog',
        component: ParentDialogComponent
      },
      {
        path: 'dropdown',
        component: MultiselectDropdownComponent
      },
      {
        path: 'payment',
        component: PaymentComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParentChildRoutingModule { }
