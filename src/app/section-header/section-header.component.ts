import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-header',
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.scss']
})
export class SectionHeaderComponent implements OnInit {

  @Input("title") title = "";
  @Input("subtitle") subtitle = "";
  showProfileImage: boolean;

  constructor() { }

  ngOnInit(): void {
    this.showProfileImage = this.title === "Jia Wei Ho";
  }

}
