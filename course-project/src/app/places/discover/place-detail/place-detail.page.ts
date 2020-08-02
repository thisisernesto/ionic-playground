import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

  constructor(
    /* NavController ensures that when the "Book" button is clicked, 
    the user gets back to the last page on the stack, instead of using
    Angular's own routing solution. */

    // private router: Router
    private navCtrl: NavController) {}

  ngOnInit() {
  }

  onBookPlace() {
    // this.router.navigateByUrl('/places/tabs/discover')
    this.navCtrl.navigateBack('places/tabs/discover')
    this.navCtrl.pop()
    /* We could also use the pop method, but it's unreliable if you can't garantee
    the existence of the page it should be pointing to in that context. */
  }

}
