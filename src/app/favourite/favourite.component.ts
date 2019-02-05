import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {

  constructor() { }
  arrayOfMovies = [];

  ngOnInit() {
     this.arrayOfMovies = JSON.parse(localStorage.getItem('mrutanjay'))
     console.log(this.arrayOfMovies)
  }
  remove(movie) {
    let data = JSON.parse(localStorage.getItem('mrutanjay'))
    data = data.filter(e => e.id !== movie.id);
    this.arrayOfMovies =  data;
    let string = JSON.stringify(data);

    localStorage.setItem("mrutanjay", string)
  }

}
