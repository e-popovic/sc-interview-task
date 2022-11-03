import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'smartcode-app';
  public sizeBig = true;

  ngOnInit() {
    this.sizeBig = window.innerWidth >= 720;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.sizeBig = window.innerWidth >= 720;
  }
}
