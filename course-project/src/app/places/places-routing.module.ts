import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlacesPage } from './places.page';


const routes: Routes = [
  {
    /* This is the root of the navigation that will define how tabs will work. In the route 
    /places, the tab discover will sit in places/discover.
    In that same tab, a dynamic sub-route from the discover tab will also be generated, and that refers to the place-detail component we will be dynamically generating based on some data. */
    path: 'tabs',
    component: PlacesPage,
    children: [
      { 
        path: 'discover', 
        children: [
          {
            path: '',
            loadChildren: () => import('./discover/discover.module').then( m => m.DiscoverPageModule),
          },
          {
            path: ':placeId',
            loadChildren: () => import('./discover/place-detail/place-detail.module').then( m => m.PlaceDetailPageModule),
          }
        ]
      },
      /* Offers is a sibling route to /discover with called /offers its own subset of routes, like creating a new offer, editing an existing offer, and showing avaible offers.
      Note that in this context, the order matters: hardcode paths (edit/:placeId) have to be declared before the ones with the dynamic segments. */
      {
        path: 'offers',
        children: [
          {
            path: '',
            loadChildren: () => import('./offers/offers.module').then( m => m.OffersPageModule),
          },
          {
            path: 'new',
            loadChildren: () => import('./offers/new-offer/new-offer.module').then( m => m.NewOfferPageModule),
          },
          {
            path: 'edit/:placeId', 
            loadChildren: () => import('./offers/edit-offer/edit-offer.module').then( m => m.EditOfferPageModule),
          },
          {
            path: ':placeId',
            loadChildren: () => import('./offers/offer-bookings/offer-bookings.module').then( m => m.OfferBookingsPageModule),
          }
        ]
      },
      {
        path: '',
        redirectTo: '/places/tabs/discover',
        pathMatch: 'full'
      },
    ]
  },
  /* Since we are using lazy-loading on all of our tab-routes, ommiting the next lines will be deadly. They will be responsible for defaulting one of the tabs to be the one that opens when we navigate to /places. */ 
  {
    path: '',
    redirectTo: '/places/tabs/discover',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlacesPageRoutingModule {}
