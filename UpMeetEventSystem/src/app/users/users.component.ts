import { Component, OnInit } from '@angular/core';
import { Users } from '../users';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

   constructor(private apiService: ApiService){}

// Angular component Life Cycle Hook
ngOnInit(): void {
  this.getUsers();
}


   getUsers() {
    this.apiService.getAllUsers()
      .subscribe( result => {
          console.log(result);
      });
   }

}
