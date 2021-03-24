import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/core/services/api.service';

@Injectable({
  providedIn: 'root'
}) 

export class JsonPlaceholderService { 
  constructor(private _apiService: ApiService) { }

  public getPosts(): Observable<any> {
    return this._apiService.get("posts");
  }

  public createPosts(post): Observable<any> {
    return this._apiService.post("posts", post);
  }

  public deletePosts(id): Observable<any> {
    return this._apiService.delete("posts/" + id);
  }
}
