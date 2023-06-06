import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  // define the API URL

  private readonly url = 'https://localhost:7073/api/';

  // write methods to connect to the API: GetAllUsers, GetAllEvents, GetAllFavorites AddUser, AddFavorites

   getAllUsers(){

    return this.http.get(this.url + "Users");
   }



}
