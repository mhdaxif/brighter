import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/gaurds/auth.guard';

const routes: Routes = [

  { path: '', redirectTo: 'mock-data', pathMatch: 'full' },
  
  {
    path: 'mock-data', 
    loadChildren: () => import('./modules/json-placeholder/json-placeholder.module').then(
      (m) => m.JsonPlaceholderModule
    ),
  }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
