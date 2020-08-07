import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

import { Place } from '../../place.model';
import { PlacesService } from '../../places.service';


@Component({
  selector: 'app-offer-bookings',
  templateUrl: './offer-bookings.page.html',
  styleUrls: ['./offer-bookings.page.scss'],
})
export class OfferBookingsPage implements OnInit {
  /* Imported "place" model, using the same data structure from the
  "Discover" page, since it is the exact same model. */
  place: Place;
  
  constructor(
    /* Getting acess to the dynamic parts in our URL using the
    Activated Route from Angular Router */
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private placesService: PlacesService,
  ) {}

  ngOnInit() {
    /* A map that provides access to the required and optional parameters 
    specific to a route. The map supports retrieving a single value with 
    get() or multiple values with getAll(). */
    
    this.route.paramMap.subscribe(paramMap => {
      
      /* Checks if we dont't have the placeId for some reason, navigating away
      if that is indeed the case */
      if (!paramMap.has('placeId')) {
        this.navCtrl.navigateBack('/places/tabs/offers'); // Navigates back to this
        return; // Makes sure no other code gets executed here
      }
      /* Calls the getPlace method created in the places.service */
      this.place = this.placesService.getPlace(paramMap.get('placeId'));
    });
  }

}
