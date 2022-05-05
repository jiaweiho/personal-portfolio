import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  highlightProjects: any[];
  demoProjects: any[];
  
  icons: Record<string,FontIcon> = {
    "android": { name: "fa-android", class: "fab" },
    "amplify": { name: "fa-aws", class: "fab" },
    "angular": { name: "fa-angular", class: "fab" },
    "aws": { name: "fa-aws", class: "fab" },
    "bulma": { name: "fa-css3-alt", class: "fab" },
    "evernote api": { name: "fa-code", class: "fas" },
    "express": { name: "fa-code", class: "fas" },
    "facebook api": { name: "fa-facebook", class: "fab" },
    "file io": { name: "fa-code", class: "fas" },
    "firebase": { name: "fa-database", class: "fas" },
    "flutter": { name: "fa-mobile", class: "fas" },
    "fontawesome": { name: "fa-fort-awesome-alt", class: "fab" },
    "gps": { name: "fa-map-marker-alt", class: "fas" },
    "invision": { name: "fa-invision", class: "fab" },
    "ionic": { name: "fa-mobile", class: "fas" },
    "java": { name: "fa-java", class: "fab" },
    "maps": { name: "fa-google", class: "fab" },
    "mysqlite": { name: "fa-database", class: "fas" },
    "node.js": { name: "fa-node", class: "fab" },
    "picasso": { name: "fa-code", class: "fas" },
    "photoshop": { name: "fa-image", class: "far" },
    "postgres": { name: "fa-database", class: "fas" },
    "react native": { name: "fa-react", class: "fab" },
    "react": { name: "fa-react", class: "fab" },
    "redux": { name: "fa-code", class: "fas" },
    "sass": { name: "fa-css3-alt", class: "fab" },
    "tabletui": { name: "fa-tablet-alt", class: "fas" },
    "rest": { name: "fa-code", class: "fas" },
    "spring": { name: "fa-code", class: "fas" },
    "kafka": { name: "fa-code-branch", class: "fas" },
    "google cloud": { name: "fa-google", class: "fab"},
    "postgresql": { name: "fa-database", class: "fas"},
    "flyway migration": { name: "fa-database", class: "fas"},
    "redis": { name: "fa-database", class: "fas"},
    "next.js": { name: "fa-code", class: "fas"},
  };

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.highlightProjects = this.dataService.getHighlightProjects();
    this.highlightProjects.filter(item => (item['img'])).forEach((item) => {
      item['img'] = `assets/images/${item['img']}`;
    });
    this.createTechStackInfo(this.highlightProjects);
    
    this.demoProjects = this.dataService.getDemoProjects();
    this.demoProjects.filter(item => (item['img'])).forEach((item) => {
      item['img'] = `assets/images/${item['img']}`;
    });
    
    this.createTechStackInfo(this.demoProjects);
  }


  private createTechStackInfo(list: any[]) {
    list.forEach(item => {
      item['techstack'] = item['techstack'].split(',').map(elem => {
        const techName = elem.toLowerCase().trim();
        let newElem = { name: elem.trim(), icon: this.icons[techName]?.name, iconstyle: this.icons[techName]?.class };
        return newElem;
      });
    });
  }
}
interface FontIcon {
  name: string;
  class: string;
}