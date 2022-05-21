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
    { title: 'RAN OBJEK', url: '/intro/intro1', icon: 'heart' },
    { title: 'RAN WARNA', url: '/intro/warna', icon: 'heart' },
    { title: 'RAN ANGKA', url: '/intro/angka', icon: 'heart' },
    { title: 'RAN HURUF', url: '/intro/huruf', icon: 'heart' },
    { title: 'Permainan', url: '/permainan', icon: 'archive' }
  ];

  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
