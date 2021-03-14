import { Component, Inject } from '@angular/core';
import { APP_BASE_HREF } from "@angular/common";
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'personal-portfolio';
  constructor(
    @Inject(APP_BASE_HREF) private baseHref: string,
    private matIconRegistry: MatIconRegistry,
    private domSatinizer: DomSanitizer
  ) {
    console.log(`APP_BASE_HREF is ${this.baseHref}`);
    
    this.matIconRegistry.addSvgIcon(
      'github_round',
      this.domSatinizer.bypassSecurityTrustResourceUrl('../assets/icons/github-round.svg')
    );
    this.matIconRegistry.addSvgIcon(
      `linkedin_round`,
      this.domSatinizer.bypassSecurityTrustResourceUrl('../assets/icons/linkedin-round.svg')
    );
    this.matIconRegistry.addSvgIcon(
      `mail_round`,
      this.domSatinizer.bypassSecurityTrustResourceUrl('../assets/icons/mail-round.svg')
    );
  }

  ngOnInit(): void {
    
  }
}
