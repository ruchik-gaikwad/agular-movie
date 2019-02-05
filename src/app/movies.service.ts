import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  getMovies() {
    return this.http.get("https://api.themoviedb.org/3/movie/now_playing?api_key=46cb0826bc9d924445bc90903e183ebf")
  }
}
