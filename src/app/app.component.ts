import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedLink: string;
  title = 'Tour of Heroes';

  constructor() {
    this.selectedLink = '/dashboard';
  }

  onSelect(link: string): void {
    this.selectedLink = link;
  }
}
