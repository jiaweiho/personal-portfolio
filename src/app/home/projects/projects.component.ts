import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  infoText: any[];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.infoText = this.dataService.getWorkProjects();
    this.infoText = this.dataService.getSideProjects();
  }

}
