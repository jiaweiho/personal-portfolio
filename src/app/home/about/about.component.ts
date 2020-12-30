import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  infoText: string;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.infoText = this.dataService.getProfileInfo();
  }

}
