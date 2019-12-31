import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../movies.service'
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
 
  currentNumberPage:number = 1;


  constructor(public _MoviesService:MoviesService) { 

    _MoviesService.getMovies(this.currentNumberPage).subscribe( data => {

      this.allMovies = data.results;
    })
  }


  changePages(num)
  {
    this.currentNumberPage = num;

    this._MoviesService.getMovies(this.currentNumberPage).subscribe( data => {

      this.allMovies = data.results;
    })
  }

  pages:number[] = [1,2,3,4,5,6,7,8];
  allMovies:any[];
  imgUrl:string = "https://image.tmdb.org/t/p/w500";
  
  ngOnInit() {
  }

}
