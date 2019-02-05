import { Component, OnInit } from '@angular/core';
import { MoviesService } from "../movies.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private movie: MoviesService) { }

  arrayOfMovies = [];
  ngOnInit() {
    this.movie.getMovies().subscribe((data: any) => {
      console.log(data)
       data.results = data.results.map(e =>  { 
         e.poster_path ="https://image.tmdb.org/t/p/w500" + e.poster_path
          return e 
        })
        this.arrayOfMovies = data.results
    })
  }

  addToFavs(movie) {
    if (localStorage.getItem("mrutanjay") === null) {
      let stirng = JSON.stringify([movie]);
      localStorage.setItem("mrutanjay", stirng)
    }else {
      let local = JSON.parse(localStorage.getItem("mrutanjay"));
      local.push(movie);
      let stirng = JSON.stringify(local);
      localStorage.setItem("mrutanjay", stirng)
    }
  }

}
