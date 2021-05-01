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
          e.g. sass because of its flexibility to customize bulma variables, webpack and AWS Amplify for making deploy practically efficient and simple.
          In collaboration with a UX designer for the overall look of the website.`,
        challenge: `Bulma allowed me to not think too much about layout. AWS Amplify made deployment a true joy.`,
        quotetitle: 'Highlights',
        year: 2021,
        techstack: 'Angular, SASS, Bulma, AWS, FontAwesome, Amplify',
        img: 'homepage_screen.png',
        link: 'https://github.com/jiaweiho/personal-portfolio'
      },
      {
        title: 'FAA Importer', 
        subtitle: 'Created from scratch for Web Manuals International AB',
        description: `I led and created a project for importing several FAA Compliance libraries for the company. 
          As of latest note it imports and keeps 21 of these libraries regularly updated. Deployed and working in AWS deployed environment with Fargate, Lambda and Cloudwatch.
          A challenge was to accomodate the small errors in the content fetched from so many different libraries e.g. identifiers a) baked into text which shouldn't be there because it 
          marks a new sub-requirement.`,
        challenge: `Another challenge has been learning how to structure the Node project into endpoints, parsers and services with many
        exception parsing logic around content and parsing different type of tags in the XML.`,
        quotetitle: 'Highlight',
        techstack: 'Node.js, Express, AWS, Java',
        year: 2017,
        img: 'wm.png'
      },
      {
        title: 'Proposal App', 
        subtitle: 'Used for my proposal',
        description: `App developed with the purpose of proposing to my wife. An interesting small project with Ionic framework. I wanted an app quick and as pretty as 
          possible. It worked surprisingly well looking at how much I could produce within my limited development time I had.`,
        challenge: `One of the things I had to appeal was in presentation and I managed to have a blend of images and text for content`,
        quotetitle: 'Presentation challenge',
        year: 2017,
        techstack: 'Ionic, Photoshop',
        img: 'proposal_screen.png'
      },
      {
        title: 'Salama App', 
        subtitle: 'Connect and help refugees and locals',
        description: `I participated in a team of two other developers to create an app born from an idea from scratch. 
          I also participated with one other developer in Hackathon in Helsinki with this idea. The project was a challenge because
          of the remote located co-workers including UI/UX designers and founder from Finland.`,
        challenge: `Other challenges included working with React and Redux first time.`,
        quotetitle: 'Huge learning joy',
        year: 2015,
        techstack: 'Android, React Native, Redux, Firebase, InVision',
        img: 'salama_screen.png'
      },
      {
        title: 'Sales App', 
        subtitle: 'Further development of Android app for Verisure Innovation AB',
        description: `I was assigned to take over development and maintanence of a sales app. The initial journey allowed me to 
          develop it further e.g. showing sales material. One of the challenges after taking over was to understand 
          and improve the code design and implementing a new part of the app where I had to handle images and caching of them.`,
        challenge: `It was a true teamwork with bugfixes verified by testers testing the solution and Product owner 
        giving the input from customers during deployment.`,
        quotetitle: 'True hardwork and patience',
        year: 2013,
        techstack: 'Android, TabletUI, File IO, Picasso',
        img: 'verisure_screen.png'
      },
      {
        title: 'Taxi App',
        subtitle: 'Assist developing a Taxi app for TaxiCaller Nordic AB as an intern',
        description: `After graduating I got the honor to help out with further development of the company startup app. Work involved
        understanding GPS API from Android framework as well as other Maps API features. I eventually only created an initial
        implementation of Facebook integration before leaving.`,
        challenge: `Sitting in a room with one of the founder of the company and remote with another founder and developing Android code with my Galaxy S phone is a precious memory`,
        quotetitle: 'Highlight',
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
