// JsonPlaceholderModule
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PostsComponent } from './pages/posts/posts.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'post', component: PostsComponent },
 
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class JsonPlaceholderRoutingModule {}
 