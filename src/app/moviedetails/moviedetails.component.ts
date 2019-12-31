import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MoviesService} from '../movies.service';
@Component({ 
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.css']
})
export class MoviedetailsComponent implements OnInit {

  myParam:number;
  movieDetails:any ={};
  constructor(private _ActivatedRoute: ActivatedRoute , public _MoviesService:MoviesService) { }

  ngOnInit() {
    this._ActivatedRoute.params.subscribe((params) => this.myParam = params['id']);
    this._MoviesService.getMovies(1).subscribe(data => {this.movieDetails = data.results[this.myParam]})
  }

}
