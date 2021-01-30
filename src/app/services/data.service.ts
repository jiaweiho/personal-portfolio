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
    return "Hello! I'm Jia Wei Ho, a software engineer based in Malmö, Sweden. I enjoy creating things."
    /* return this.http.get(this.url).pipe(
      retry(1),
      catchError(this.handleError)
    ) */
  }

  getProjects() {
    return [
      {title: 'Project1', description: 'lorum dsjflkdjfksdhf'},
      {title: 'Project2', description: 'lorum2 dsjflkdjfksdhf2'}
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
