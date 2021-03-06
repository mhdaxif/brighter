import { Component, OnInit, Input } from '@angular/core';
import {Store} from '@ngrx/store';
import { DeletePostAction } from 'src/app/ngrx/actions/post.action';
import AppState from '../../../models/app-state.model';

@Component({
  selector: 'app-delete-post',
  templateUrl: './delete-post.component.html',
  styleUrls: ['./delete-post.component.scss']  
})
export class DeletePostComponent implements OnInit {

  @Input()
  index: number;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  deletePost(){
    this.store.dispatch(new DeletePostAction(this.index));
  }

}
