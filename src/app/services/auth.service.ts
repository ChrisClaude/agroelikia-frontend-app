import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment as env } from '@/environments/environment';
import { catchError, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Params } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  getUser(): {} | null {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }

  getToken(): string | null {
    const token = localStorage.getItem('token');
    return token ? token : null;
  }

  private loginToStrapi(
    providerName: string,
    queryParams: Params
  ): Observable<any> {
    const url = `${env.apiUrl}/auth/${providerName}/callback`;

    return this.http
      .get<any>(url, {
        params: queryParams,
      })
      .pipe(
        tap((_) => this.log('login to strapi')),
        catchError(this.handleError<any>('Login to strapi failed'))
      );
  }

  /**
   * This method returns true if the login is successful else it returns false.
   *
   *  @param Params - query paramaters after redirect of successful login
   **/
  loginWithAuth0(queryParams: Params): Observable<any> {
    return this.loginToStrapi('auth0', queryParams);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log(message);
  }
}
