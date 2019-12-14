import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./table-page/table-page.module').then(m => m.TablePageModule)    
  },
  {
    path: 'parent',
    loadChildren: () => import('./parent-child/parent-child.module').then(m => m.ParentChildModule)    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
