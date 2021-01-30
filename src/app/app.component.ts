import { Component, Inject } from '@angular/core';
import { APP_BASE_HREF } from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'personal-portfolio';
  constructor(@Inject(APP_BASE_HREF) private baseHref: string) {
    console.log(`APP_BASE_HREF is ${this.baseHref}`);
  }

  ngOnInit(): void {
    
  }
}
