import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ScreenOrientation } from '@awesome-cordova-plugins/screen-orientation/ngx';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;

  constructor(private activatedRoute: ActivatedRoute, private screenOrientation: ScreenOrientation) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
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
