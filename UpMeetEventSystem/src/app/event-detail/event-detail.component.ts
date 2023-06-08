import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Events } from '../events';
import { HttpResponse } from '@angular/common/http';
import { EventsComponent } from '../events/events.component';
import { Favorites } from '../favorites';


@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {
  events: any[] = [];
  constructor(private apiService: ApiService){}

  ngOnInit() {
    const eventId = this.getEventIdFromRoute();
    if (eventId) {
      this.getEvent(eventId);
    }
  }

  getEventIdFromRoute(): number | null {
    const eventIdParam = window.location.pathname.split('/').pop();
    return eventIdParam ? +eventIdParam : null;
  }

  getEvent(id: number) {
    this.apiService.getEvent(id)
    .subscribe(
      (result) => {
      this.events.push(result);
      console.log(result);
      },
    );
  }

  updateFavoriteStatus(userId: number, eventId: number) {
  const newFavorite: Favorites = {
    userid: userId,
    eventid: eventId,
    favoriteId: 0,
    isFavorite: true
  };

  // Update the favorite in the database
  this.apiService.addFavorite(newFavorite).subscribe(
    (response: any) => {
      console.log('Favorite updated:', newFavorite);
    }
  );
  }
}
