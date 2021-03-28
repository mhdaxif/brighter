import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import { AddPostAction } from 'src/app/ngrx/actions/post.action';

import AppState from '../../../models/app-state.model';
import Post from '../../../models/post.model';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {

  post: Post = {
    id: null,
    userId: null,
    title: '',
    body: ''
  }

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void { 
  }

  createPost(){
    this.post.id = Math.floor(Math.random() * 10);
    this.post.userId =  Math.floor(Math.random() * 100);
    this.store.dispatch(new AddPostAction({...this.post}));
    this.post.title = '';
    this.post.body = '';
  }

}
