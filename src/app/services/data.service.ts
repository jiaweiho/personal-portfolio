import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private profile = new BehaviorSubject({});
  profileData = this.profile.asObservable();
  
  url: string;

  constructor(private http: HttpClient) {
    this.url = 'not-yet-implemented';
  }

  getResumeFilePath() {
    return '/assets/Binder1.pdf';
  }

  getProfileInfo() {
    return `Hello! I'm Jia Wei Ho, a software engineer based in Malmö, Sweden. Having gotten that exciting and ancient spark
    from BASIC language and HTML/CSS development early on it set me on a path to enjoy not only a Master degree in Computer Science, but also
    the sweat and tears of software engineering. I've had backend development, Android/Cross platform development and Frontend development. 
    I am in constant pursuit of getting more knowledge about languages, frameworks, software design and cloud deployments. `
    /* return this.http.get(this.url).pipe(
      retry(1),
      catchError(this.handleError)
    ) */
  }

  getHighlightProjects() {
    return [
      {
        title: 'Personal Portfolio', 
        subtitle: 'Showcase my experience',
        description: `Building a portfolio that uses angular which I've been accustomed with from work. The project gives me opportunity for exploring simple front-end things 
          e.g. sass because of its flexibility to customize bulma variables, webpack and github pages for making it practically efficient and simple.
          In collaboration with a UX designer for the overall look of the website`,
        year: 2021,
        techstack: 'Angular, SASS, Bulma, AWS, FontAwesome, Amplify',
        img: 'homepage_screen.png',
        link: 'https://github.com/jiaweiho/personal-portfolio'
      },
      {
        title: 'FAA Importer', 
        subtitle: 'Created from scratch for Web Manuals International AB',
        description: `I led and created a project for importing several FAA Compliance libraries for the company. 
          As of latest note it imports and keeps 21 of these libraries regularly updated. Deployed and working in AWS deployed environment with Fargate, Lambda and Cloudwatch`,
        techstack: 'Node.js, Express, AWS, Java',
        year: 2017,
        img: 'wm.png'
      },
      {
        title: 'Proposal App', 
        subtitle: 'Used for my proposal',
        description: `App developed with the purpose of proposing to my wife. An interesting small project with Ionic framework. I wanted an app quick and as pretty as 
          possible and it worked surprisingly well looking at how little setup time to finish it was for me.`,
        year: 2017,
        techstack: 'Ionic, Photoshop',
        img: 'proposal_screen.png'
      },
      {
        title: 'Salama App', 
        subtitle: 'Connect and help refugees and locals',
        description: `I participated in a team of two other developers to create an app born from an idea from scratch. 
          I also participated with one other developer in Hackathon in Helsinki with this idea. The project was a challenge because
          of the remote located co-workers including UI/UX designers and founder from Finland. `,
        year: 2015,
        techstack: 'Android, React Native, Redux, Firebase, InVision',
        img: 'salama_screen.png'
      },
      {
        title: 'Sales App', 
        subtitle: 'Further development of Android app for Verisure Innovation AB',
        description: `I was assigned to take over development and maintanence of a sales app. The initial journey allowed me to 
          develop it further e.g. showing sales material.`,
        year: 2013,
        techstack: 'Android, TabletUI, File IO, Picasso',
        img: 'verisure_screen.png'
      },
      {
        title: 'Taxi App',
        subtitle: 'Assist the company TaxiCaller as an intern',
        description: `After graduating I got the honor to help out with further development of the company startup app.`,
        year: 2011,
        techstack: 'Android, GPS, Maps, Facebook API'
      }
    ]
    /* return this.http.get(this.url).pipe(
      retry(1),
      catchError(this.handleError)
    ) */
  }

  getDemoProjects() {
    return [
      {
        title: 'Fullstack demo', 
        subtitle: 'To experiment with e-commerce as a website',
        description: 'Project idea to with login and account and eventually e-commerce',
        year: 2021,
        techstack: 'React, Redux, Node.js, PostGres, Bulma, SASS',
        img: 'lifestyle_screen.png',
        link: 'https://github.com/jiaweiho/lifestyle-store-application'
      },
      {
        title: 'Social app idea', 
        description: 'Social app idea that only allowed me to look at Flutter at a short glance.',
        year: 2019,
        techstack: 'Flutter'
      },
      {
        title: 'Note taking app', 
        description: `Hobby project that approches note taking differently. This project involved image handling, social features and evernote integration.`,
        year: 2016,
        techstack: 'Android, File IO, Evernote API, MySQLite'
      }
    ]
    /* return this.http.get(this.url).pipe(
      retry(1),
      catchError(this.handleError)
    ) */
  }

  // TODO: Error handling
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
