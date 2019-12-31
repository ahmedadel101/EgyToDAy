import { Injectable } from '@angular/core';
import {HttpClient, } from '@angular/common/http';
import {observable, Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(public _HttpClient:HttpClient) { }


  getMovies(pageNumber):Observable<any>
  {
    return this._HttpClient.get("https://api.themoviedb.org/3/trending/all/day?api_key=4b05e918265c42cafc238779a22ee119&page="+pageNumber)
  }

}
