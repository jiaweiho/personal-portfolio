import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  infoPersonal: any[];
  infoDemo: any[];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.infoPersonal = this.dataService.getPersonalProjects();
    this.infoPersonal.filter(item => (item['img'])).forEach((item) => {
      item['img'] = `assets/images/${item['img']}`;
    });
    
    this.infoDemo = this.dataService.getDemoProjects();
    this.infoDemo.filter(item => (item['img'])).forEach((item) => {
      item['img'] = `assets/images/${item['img']}`;
    });
  }

}
