import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentChildComponent } from './parent-child.component';
import { ParentComponent } from './parent/parent.component';
import { ParentDialogComponent } from './parent-dialog/parent-dialog.component';


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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParentChildRoutingModule { }
