import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ScreenOrientation } from '@awesome-cordova-plugins/screen-orientation/ngx';
import { Platform } from '@ionic/angular';
import { SmartAudio } from '../providers/smart-audio.service';

@Component({
  selector: 'app-home-ran',
  templateUrl: './home-ran.page.html',
  styleUrls: ['./home-ran.page.scss'],
})
export class HomeRanPage implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private screenOrientation: ScreenOrientation, public platform: Platform, public smartAudio: SmartAudio) {
    this.startVoice()
  }

  ionViewWillLeave() {
    this.startVoice()
  }

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


  startVoice() {
    this.platform.ready().then(() => {
      console.log("ready")
      this.smartAudio.preload('backsound', 'assets/mp3/backsound.mp3');
      this.smartAudio.play('backsound');
      this.smartAudio.loop('backsound');
      this.smartAudio.volume('backsound');
    });
  }

}
