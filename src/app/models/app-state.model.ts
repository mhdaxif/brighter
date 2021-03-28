import { PostState } from '../ngrx/reducers/posts.reducer';
import Post from './post.model';

export default interface AppState {
    post: PostState;
}
