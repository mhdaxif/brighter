import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/gaurds/auth.guard';

const routes: Routes = [

  { path: '', redirectTo: 'mock-data', pathMatch: 'full' },
  
  {
    path: 'mock-data', 
    loadChildren: () => import('./modules/posts/posts.module').then(
      (m) => m.PostModule
    ),
  }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
