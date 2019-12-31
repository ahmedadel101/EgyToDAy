import { Component, OnInit } from '@angular/core';
import {NewsService} from '../news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  usersContainers:any[]

  constructor(_NewsService:NewsService) { 

    _NewsService.getNews().subscribe( data => {

      this.usersContainers = data.articles ;
    })
  }

  ngOnInit() {
  }

}
