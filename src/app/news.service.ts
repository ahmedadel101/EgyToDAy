import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {observable,Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(public _HttpClient:HttpClient) { }


  getNews():Observable<any>
  {
    return this._HttpClient.get("https://newsapi.org/v2/everything?domains=wsj.com&apiKey=1552a14364ca40bfac7b0c9ced61feeb")
  }
}
