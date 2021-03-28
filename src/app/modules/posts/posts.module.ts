import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPostComponent } from './add-post/add-post.component';
import { DeletePostComponent } from './delete-post/delete-post.component';
import { PostsComponent } from './posts/posts.component';
import { FormsModule } from '@angular/forms';
import { PostRoutingModule } from './posts-routing.module';




@NgModule({
  declarations: [
    AddPostComponent,
    DeletePostComponent,
    PostsComponent
  ],
  imports: [ 
    CommonModule,
    FormsModule,
    PostRoutingModule
  ]
})

export class PostModule { }
 