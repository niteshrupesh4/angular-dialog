import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./parent-child/parent-child.module').then(m => m.ParentChildModule) 
  },
  // {
  //   path: 'parent',
  //   loadChildren: () => import('./parent-child/parent-child.module').then(m => m.ParentChildModule)    
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
