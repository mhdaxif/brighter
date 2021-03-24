import { Component, OnInit } from '@angular/core';
import { JsonPlaceholderService } from '../../json-placeholder.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  constructor(private jsonPlaceholderService: JsonPlaceholderService) { }
  posts: any = [];

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.jsonPlaceholderService.getPosts().subscribe(
      response => {
        this.posts = response;
      }
    )
  }
}
