import { Component,OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Favorites } from '../favorites';


@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit{  
 
  userFavorites: any;
  
  constructor(private apiService: ApiService){
    
  }



  
  ngOnInit(): void {
    this.getAllFavorites();
    
  }
  
  
 
  getAllFavorites() {
    this.apiService.getAllFavorites(1)
      .subscribe(
        (response) => {
          this.userFavorites = response;
          
          console.log(this.userFavorites);
        }
        
      );
  }

  
  updateFavoriteStatus(favorite: Favorites) {
    favorite.isFavorite = !favorite.isFavorite; // Toggle the isFavorite property

    // Update the favorite in the database
    this.apiService.updateFavorite(favorite).subscribe(
      (response: any) => {
        console.log('Favorite updated:', favorite);
      }
    );
  }

  /* updateFavoriteStatus() {
    // Perform any necessary actions when the favorite status changes
    console.log('Favorite status updated:', this.favoriteEvent.IsFavorite); 
  } */

}
