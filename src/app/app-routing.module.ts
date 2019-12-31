import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {MovieComponent} from './movie/movie.component';
import {NewsComponent} from './news/news.component';
import {MoviedetailsComponent} from './moviedetails/moviedetails.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'movie', component:MovieComponent},
  {path:'news', component:NewsComponent},
  {path:'moviedetails/:id', component:MoviedetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
