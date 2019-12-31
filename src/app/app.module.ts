import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';
import { NewsComponent } from './news/news.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieComponent,
    NewsComponent,
    NavbarComponent,
    MoviedetailsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
