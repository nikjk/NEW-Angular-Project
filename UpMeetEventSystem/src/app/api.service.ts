import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Favorites } from './favorites';
import { Observable } from 'rxjs';
import { Events } from './events';
import { Users } from './users';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  // define the API URL

  private readonly url = 'https://localhost:7073/api';

  // write methods to connect to the API: GetAllUsers, GetAllEvents, GetAllFavorites AddUser, AddFavorites

//USER API'S

   getAllUsers(){
    return this.http.get(this.url + "/Users/GetAllUsers");
  }

//EVENT API'S

   getEvents(): Observable<Events[]> {
    return this.http.get<Events[]>(this.url + "/Events/Events");
  }
  
  getEvent(id: number): Observable<Events> {
    return this.http.get<Events>(`${this.url}/Events/GetEvent/${id}`);
  }

  createEvent(event: Events): Observable<Events> {
    return this.http.post<Events>(`${this.url}/Events/CreateEvent`, event);
  }

  deleteEvent(id: number): Observable<any> {
    return this.http.delete<any>(`${this.url}/Events/DeleteEvent/${id}`);
  }

//FAVORITE API'S

  updateFavorite(favorite: Favorites): Observable<any> {
    return this.http.delete(this.url + '/Favorites/DeleteFavorite/' + favorite.favoriteId);
  }

  getAllFavorites(id: number): Observable<Favorites>  {    
    return this.http.get<Favorites>(this.url + "/Favorites/" +  id);
  }

  addFavorite(favorite: Favorites): Observable<Favorites> {
    const url = `${this.url}/Favorites/AddFavorite`;
    return this.http.post<Favorites>(url, favorite);
  }

}
