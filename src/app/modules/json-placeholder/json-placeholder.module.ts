import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JsonPlaceholderRoutingModule } from './json-placeholder-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { PostsComponent } from './pages/posts/posts.component';



@NgModule({
  declarations: [
    PostsComponent,
    HomeComponent
  ],
  imports: [ 
    CommonModule,
    JsonPlaceholderRoutingModule
  ]
})

export class JsonPlaceholderModule { }
 