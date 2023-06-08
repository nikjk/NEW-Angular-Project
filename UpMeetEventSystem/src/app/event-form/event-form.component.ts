import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Events } from '../events';
import { Observable } from 'rxjs';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css']
})
export class FormComponent 
{
   Form: FormGroup;


 

   constructor(private formBuilder: FormBuilder, private apiService: ApiService){
     this.Form = this.formBuilder.group({
       eventName: ['', Validators.required],
       eventDescription: ['', Validators.required],
       createdBy: ['', Validators.required],
       createdDate: ['', Validators.required],
       eventStartDate: ['', Validators.required],
       eventEndDate: ['', Validators.required],
       eventType: ['', Validators.required],
       eventLocation: ['', Validators.required],
       price: ['', Validators.required]
     });

   }

   onSubmit(){
     if (this.Form.valid) {
        const event: Events = this.Form.value;
        console.log(event);

        // handle your user data here..

         this.apiService.createEvent(event)
      .subscribe(
        () => {
          console.log('Event created successfully');
          console.error('Error creating event:', Error);
        },
      );

    this.Form.reset();
  }
}
 
  }



/*
   ngOnInit(): void{

    this.createEvent()
    
   }
   createEvent(){
     const testEvent: Events = {
      EventName: 'New Event',
      EventDescription: 'Event Description',
      CreatedBy: 'Created By',
      CreatedDate: new Date(2023, 0, 1),
      EventStartDate: new Date(2023, 4, 1),
      EventEndDate: new Date(2023, 6, 1),
      EventType: 'Event Type',
      EventLocation: 'Event',
      Price: 9.99
     }
    
    
          this.apiService.createEvent(testEvent)
        .subscribe( result => { 
          console.log("form component", result);
        } );
   }
*/




