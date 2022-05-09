import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ScreenOrientation } from '@awesome-cordova-plugins/screen-orientation/ngx';

@Component({
  selector: 'app-home-ran',
  templateUrl: './home-ran.page.html',
  styleUrls: ['./home-ran.page.scss'],
})
export class HomeRanPage implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private screenOrientation: ScreenOrientation) { }


  ngOnInit() {
    // get current
    console.log(this.screenOrientation.type); // logs the current orientation, example: 'landscape'

    // set to landscape
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);

    // allow user rotate
    this.screenOrientation.unlock();

    // detect orientation changes
    this.screenOrientation.onChange().subscribe(
      () => {
          console.log("Orientation Changed");
      }
    );
  }

}
