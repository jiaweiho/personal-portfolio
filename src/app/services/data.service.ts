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

  getProfileInfo() {
    return `Hello! I'm Jia Wei Ho, a software engineer based in Malmö, Sweden. Having gotten that exciting and ancient spark
    from BASIC language and HTML/CSS development early on it set me on a path to enjoy not only a Master degree in Computer Science, but also
    the sweat and tears of software engineering. I've had backend development, Android/Cross platform development and Frontend development. 
    I am in constant pursuit of getting more knowledge and that languages, frameworks, software design and cloud deployments. `
    /* return this.http.get(this.url).pipe(
      retry(1),
      catchError(this.handleError)
    ) */
  }

  getPersonalProjects() {
    return [
      {
        title: 'Personal Portfolio - Showcase my experience', 
        description: `Building a portfolio that uses angular which I've been accustomed with from work. The project gives me opportunity for exploring simple front-end things 
          e.g. sass because of its flexibility to customize bulma variables, webpack and github pages for making it practically efficient and simple.`,
        year: 2021,
        techstack: 'angular, sass, bulma, github-pages'
      },
      {
        title: 'Web Manuals International - FAA Importer', 
        description: `I led and created a project for importing several FAA Compliance libraries for the company. 
          As of latest note it imports and keeps 21 of these libraries regularly updated. Deployed and working in AWS deployed environment with Fargate, Lambda and Cloudwatch`,
        techstack: 'nodejs, xml-parsing, aws, rest',
        year: 2017,
        img: 'wm.png'
      },
      {
        title: 'Proposal App - Used for my proposal', 
        description: `App developed with the purpose of proposing to my wife. An interesting small project with Ionic framework. I wanted an app quick and as pretty as 
          possible and it worked surprisingly well looking at how little setup time to finish it was for me.`,
        year: 2017,
        techstack: 'ionic',
        img: 'proposalapp.png'
      },
      {
        title: 'Salama - Connect and help refugees and locals', 
        description: `I participated in a team of two other developers to create an app born from an idea from scratch. 
          I also participated with one other developer in Hackathon in Helsinki with this idea. The project was a challenge because
          of the remote located co-workers from Finland. `,
        year: 2015,
        techstack: 'android, react-native, redux, firebase, invision',
        img: 'salama.jpeg'
      },
      {
        title: 'Verisure - Further development of Android app', 
        description: `I was assigned to take over development and maintanence of a sales app. The initial journey allowed me to 
          develop it further e.g. showing sales material.`,
        year: 2014,
        techstack: 'android, tablet ui, file io, picasso',
        img: 'verisure.jpeg'
      },
      {
        title: 'TaxiCaller - Help as intern',
        description: `After graduating I got the honor to help out with further development of the company startup app.`,
        year: 2011,
        techstack: 'android, gps, maps, facebook api'
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
        title: 'Fullstack demo with React and Nodejs', 
        description: 'Played around with React, Redux, Nodejs and postgres',
        year: 2021,
        techstack: 'react, redux, nodejs, postgres, bulma, sass',
        img: 'lifestyle.png'
      },
      {
        title: 'Social app idea', 
        description: 'Social app idea that only allowed me to look at Flutter at a short glance.',
        year: 2019,
        techstack: 'flutter'
      },
      {
        title: 'Note taking app', 
        description: `Hobby project that approches note taking differently. This project involved image handling, social features and evernote integration.`,
        year: 2016,
        techstack: 'android, file io, evernote api, mysqlite'
      }
    ]
    /* return this.http.get(this.url).pipe(
      retry(1),
      catchError(this.handleError)
    ) */
  }

  // Error handling 
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
