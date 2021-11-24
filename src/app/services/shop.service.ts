import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "@/environments/environment";
import {catchError} from "rxjs/operators";
import {ErrorService} from "@/services/error.service";
import {Observable} from "rxjs";
import {AuthService} from "../auth/services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(private http: HttpClient, private errorService: ErrorService, private authService: AuthService) { }

  createShop(shop: Shop): Observable<Shop> {
    console.log('post', shop);
    return this.http.post<Shop>(`${environment.apiUrl}/shops`, shop, {headers: {Authorization: `bearer ${this.authService.getToken()}`}})
      .pipe(
        catchError(this.errorService.handleError<Shop>('createShop', shop))
      );
  }

  getShops(): Observable<Shop[]> {
    return this.http.get<Shop[]>(`${environment.apiUrl}/shops`)
      .pipe(
      catchError(this.errorService.handleError<Shop[]>('getShops'))
    );
  }

  getUsersShops(): Observable<Shop[]> {
    return this.http.get<Shop[]>(`${environment.apiUrl}/shops/me`, {headers: {Authorization: `bearer ${this.authService.getToken()}`}})
      .pipe(
        catchError(this.errorService.handleError<Shop[]>('getShops'))
      );
  }

  getShopById(id: number): Observable<Shop> {
    return this.http.get<Shop>(`${environment.apiUrl}/shops/${id}`)
      .pipe(
        catchError(this.errorService.handleError<Shop>('getShopById'))
      );
  }

  updateShop(shop: Shop, id: number): Observable<Shop>{
    return this.http.put<Shop>(`${environment.apiUrl}/shops/${id}`, shop, {headers: {Authorization: `bearer ${this.authService.getToken()}`}})
      .pipe(
        catchError(this.errorService.handleError<Shop>('updateShop', shop))
      );
  }

  deleteShop(id: number): Observable<Shop>{
    return this.http.delete<Shop>(`${environment.apiUrl}/shops/${id}`, {headers: {Authorization: `bearer ${this.authService.getToken()}`}})
      .pipe(
        catchError(this.errorService.handleError<Shop>('deleteShop'))
      );
  }
}
