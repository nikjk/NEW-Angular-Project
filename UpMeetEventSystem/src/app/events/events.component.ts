import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Events } from '../events';
import { HttpResponse } from '@angular/common/http';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  events: any[] = [];
  constructor(private apiService: ApiService){}

  ngOnInit() {
    this.getEvents();
  }

  getEvents(): void {
    this.apiService.getEvents()
      .subscribe(
        (result: any[]) => {
          this.events = result;
          console.log(result);
        },
      );
  }

  getEvent(id: number) {
    this.apiService.getEvent(id).subscribe(
      (result) => {
        console.log(result);
      },
    );
  }

  createEvent() {
    const newEvent: Events = {
      eventName: 'New Event',
      eventDescription: 'Event Description',
      createdBy: 'Created By',
      createdDate: new Date(),
      eventStartDate: new Date(),
      eventEndDate: new Date(),
      eventType: 'Event Type',
      eventLocation: 'Event Location',
      price: 0
      // Set other properties as needed
    };

    this.apiService.createEvent(newEvent).subscribe(
      (result) => {
        console.log(result);
        console.log(HttpResponse)
      },
    );
  }

  deleteEvent(id: number) {
    this.apiService.deleteEvent(id).subscribe(
      () => {
        console.log('Event deleted successfully.');
      },
    );
  }
}
