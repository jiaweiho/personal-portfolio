import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('about', { read: ElementRef, static: true }) about: ElementRef;
  @ViewChild('skills', { read: ElementRef, static: true }) projects: ElementRef;
  @ViewChild('timeline', { read: ElementRef, static: true }) timeline: ElementRef;

  scrollToSection(section: String) {

    let elmRef: any;
    switch (section) {
      case 'about':
        elmRef = this.about;
        break;
      case 'projects':
        elmRef = this.projects;
        break;
      case 'timeline':
        elmRef = this.timeline;
        break;
      default:
        console.log("Unknown section");
    }
    elmRef.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  constructor() { }

  ngOnInit(): void {
  }


}
