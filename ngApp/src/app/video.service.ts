import { Injectable } from '@angular/core';
import {Http, Headers, Response, RequestOptions} from '@angular/http';
import {map} from 'rxjs/operators';
import { Video } from './video';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  private _getUrl = "/api/videos";
  private _postUrl = "/api/video";
  private _putUrl = "/api/video/";
  private _deleteUrl = "/api/video/";


  constructor(private http: Http) { }

  getVideos(){
    let headers =  new Headers({'Content-type': 'application/json'});

    return this.http.get(this._getUrl,{headers:headers})
          .pipe(map((res:Response) => res.json()));
  }

  addVideo(video: Video){
    let headers =  new Headers({'Content-type': 'application/json'});
    let options =  new RequestOptions({headers:headers});

    return this.http.post(this._postUrl, JSON.stringify(video), options)
          .pipe(map((res:Response)=> res.json()));

  }
  
  updateVideo(video: Video){
    let headers =  new Headers({'Content-type': 'application/json'});
    let options =  new RequestOptions({headers:headers});

    return this.http.put(this._putUrl+video._id, JSON.stringify(video), options)
          .pipe(map((res:Response)=> res.json()));

  }

  deleteVideo(video: Video){
    let headers =  new Headers({'Content-type': 'application/json'});
    let options =  new RequestOptions({headers:headers});

    return this.http.delete(this._deleteUrl+video._id, options)
          .pipe(map((res:Response)=> res.json()));

  }
  


}
