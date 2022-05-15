import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Apa itu RAN?', url: '/ran', icon: 'mail' },
    { title: 'Petunjuk', url: '/petunjuk', icon: 'paper-plane' },
    { title: 'Latihan', url: '/intro', icon: 'heart' },
    { title: 'Permainan', url: '/intro', icon: 'archive' }
  ];

  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
