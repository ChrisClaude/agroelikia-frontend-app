import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment, environment as env} from '@/environments/environment';
import { catchError, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Params } from '@angular/router';
import {ErrorService} from "@/services/error.service";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private errorService: ErrorService) {}

  // TODO: Update type in empty object
  getUser(): User | null {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }

  getToken(): string | null {
    const token = localStorage.getItem('token');
    return token ? token : null;
  }

  isAuthenticated(): boolean {
    return this.getToken() !== null;
  }

  logout () {
    console.log("log out");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  }

  login(user: {identifier: string, password: string}): Observable<any> {
    console.log(user);
    return this.http.post<{jwt: string, user: {id: number, username: string, email: string}}>(`${environment.apiUrl}/auth/local`, user).pipe(
      tap({
        next: data => {
          AuthService.storeToken('token', data.jwt);
          AuthService.storeToken('user', JSON.stringify(data.user));
        },
        error: err => {
          console.error(err);
        }
      }),
      catchError(this.errorService.handleError('login', user))
    );
  }

  /**
   * This method registers the new user. It also stores the the token returned from the backend
   * onto the client device to log in the user
   * @param newUser
   */
  registerUser(newUser: NewUser): Observable<RegisteredUser> {
    return this.http.post<RegisteredUser>(`${environment.apiUrl}/auth/local/register`, newUser).pipe(
      tap({
        next: data => {
          AuthService.storeToken('token', data.jwt);
          AuthService.storeToken('user', JSON.stringify(data.user));
        },
        error: err => {
          console.error(err);
        }
      }),
      catchError(this.errorService.handleError<RegisteredUser>('registerUser'))
    );
  }

  isShopOwner(): boolean {
    const user = this.getUser();
    return !!user && user.role.name.toLowerCase() === "shop owner";
  }

  private loginWithExternalProviders(
    providerName: string,
    queryParams: Params
  ): Observable<any> {
    const url = `${env.apiUrl}/auth/${providerName}/callback`;

    return this.http
      .get<any>(url, {
        params: queryParams,
      })
      .pipe(
        catchError(this.errorService.handleError<any>('Login to strapi failed'))
      );
  }

  private static storeToken(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  /**
   * This method returns true if the login is successful else it returns false.
   *
   * @param queryParams
   **/
  loginWithAuth0(queryParams: Params): Observable<any> {
    return this.loginWithExternalProviders('auth0', queryParams);
  }
}
