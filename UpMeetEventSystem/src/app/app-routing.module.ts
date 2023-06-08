import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { FormComponent } from './event-form/event-form.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { EventDetailComponent } from './event-detail/event-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  { path: 'events', component: EventsComponent },
  { path: 'event-form', component: FormComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: 'event-detail', component: EventDetailComponent },
  { path: 'event-detail/:id', component: EventDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
