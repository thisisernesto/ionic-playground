import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  /* Declares an array of places that will use the data model declared in place.model */
  public places: Place[] = [
    // This is just dummy informations to populate the array with some real data.
    new Place('p1', 
    'Manhattan Mansion', 
    'In the hearth of New York City', 
    'https://cdn.vox-cdn.com/thumbor/DuVKpe4qW-Sd35WWCDZEN8Mq4vY=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/18406728/shutterstock_682562731.jpg', 
    149.99),
    
    new Place('p2', 
    'Some Place on Italy', 
    'In the hearth of Italy',
    'https://cdn.vox-cdn.com/thumbor/DuVKpe4qW-Sd35WWCDZEN8Mq4vY=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/18406728/shutterstock_682562731.jpg', 
    189.99),

    new Place('p3', 
    'The Foggy Palace', 
    'Not your average city trip',
    'https://cdn.vox-cdn.com/thumbor/DuVKpe4qW-Sd35WWCDZEN8Mq4vY=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/18406728/shutterstock_682562731.jpg', 
    189.99)
  ]

  /* Gets a copy of the private places so we don't risk editing the array */
  getPlaces() {
    return [...this.places]
  }

  constructor() { }
}
