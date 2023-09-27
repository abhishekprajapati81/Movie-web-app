import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class MovieapiserviceService {
  constructor(private http: HttpClient) {}

  baseurlapi = 'https://api.themoviedb.org/3';
  apikey = '08cc33bd5ae3a747598ce2ad84376e66';

  // bannerapidatakay

  bannerapidata(): Observable<any> {
    return this.http.get(`${this.baseurlapi}/trending/all/week?api_key=${this.apikey}`);
  }

  // trendingdatakey
  trendingmovie(): Observable<any> {
    return this.http.get(
      `${this.baseurlapi}/trending/movie/day?api_key=${this.apikey}`
    );
  }

  // serchmovie
  serchMovie(data: any): Observable<any> {
    console.log(data, 'movie#');

    return this.http.get(
      `${this.baseurlapi}/search/movie?api_key=${this.apikey}&query=${data.movieName}`
    );
  }

  // moviedetails

  getmoviedetails(data: any): Observable<any> {
    return this.http.get(
      `${this.baseurlapi}/movie/${data}?api_key=${this.apikey}`
    );
  }

  // getmovievideo

  getmovievideo(data: any): Observable<any> {
    return this.http.get(
      `${this.baseurlapi}/movie/${data}/videos?api_key=${this.apikey}`
    );
  }

  // getmoviecast

  getmoviecast(data: any): Observable<any> {
    return this.http.get(
      `${this.baseurlapi}/movie/${data}/credits?api_key=${this.apikey}`
    );
  }

  // getactionmovie
  getactionmovie(): Observable<any> {
    return this.http.get(
      `${this.baseurlapi}/discover/movie?api_key=${this.apikey}&with_genres=28`
    );
  }

  // adventuremovies

  getadventuremovie(): Observable<any> {
    return this.http.get(
      `${this.baseurlapi}/discover/movie?api_key=${this.apikey}&with_genres=12`
    );
  }

  // getanimationmovie

  getanimationmovie(): Observable<any> {
    return this.http.get(
      `${this.baseurlapi}/discover/movie?api_key=${this.apikey}&with_genres=16`
    );
  }

  // getcomedymovie
  getcomedymovie(): Observable<any> {
    return this.http.get(
      `${this.baseurlapi}/discover/movie?api_key=${this.apikey}&with_genres=35`
    );
  }

  // getdocumentery

  getdocumentery(): Observable<any> {
    return this.http.get(
      `${this.baseurlapi}/discover/movie?api_key=${this.apikey}&with_genres=99`
    );
  }

  // gtescience-fictionmovie

  getsciencefictionmovie(): Observable<any> {
    return this.http.get(
      `${this.baseurlapi}/discover/movie?api_key=${this.apikey}&with_genres=878`
    );
  }

  // getthrillermovie
  getthrillermovie(): Observable<any> {
    return this.http.get(
      `${this.baseurlapi}/discover/movie?api_key=${this.apikey}&with_genres=53`
    );
  }
}
