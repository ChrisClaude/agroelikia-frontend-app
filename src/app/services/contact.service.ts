import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ErrorService } from "@/services/error.service";
import { AuthService } from "@/auth/services/auth.service";
import { Observable } from "rxjs";
import { environment } from "@/environments/environment";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient, private errorService: ErrorService, private authService: AuthService) { }

  createContact(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(`${environment.apiUrl}/contacts`, contact, {headers: {Authorization: `bearer ${this.authService.getToken()}`}})
      .pipe(
        catchError(this.errorService.handleError<Contact>('createContact', contact))
      );
  }

  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(`${environment.apiUrl}/contacts`)
      .pipe(
        catchError(this.errorService.handleError<Contact[]>('getContacts'))
      );
  }

  getUsersContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(`${environment.apiUrl}/contacts/me`, {headers: {Authorization: `bearer ${this.authService.getToken()}`}})
      .pipe(
        catchError(this.errorService.handleError<Contact[]>('getContacts'))
      );
  }

  getContactById(id: number): Observable<Contact> {
    return this.http.get<Contact>(`${environment.apiUrl}/contacts/${id}`, {headers: {Authorization: `bearer ${this.authService.getToken()}`}})
      .pipe(
        catchError(this.errorService.handleError<Contact>('getContactById'))
      );
  }

  updateContact(contact: Contact, id: number): Observable<Contact>{
    return this.http.put<Contact>(`${environment.apiUrl}/contacts/${id}`, contact, {headers: {Authorization: `bearer ${this.authService.getToken()}`}})
      .pipe(
        catchError(this.errorService.handleError<Contact>('updateContact', contact))
      );
  }

  deleteContact(id: number): Observable<Contact>{
    return this.http.delete<Contact>(`${environment.apiUrl}/contacts/${id}`, {headers: {Authorization: `bearer ${this.authService.getToken()}`}})
      .pipe(
        catchError(this.errorService.handleError<Contact>('deleteContact'))
      );
  }
}
