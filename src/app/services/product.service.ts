import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ErrorService } from "@/services/error.service";
import { AuthService } from "@/auth/services/auth.service";
import { Observable } from "rxjs";
import { environment } from "@/environments/environment";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class ProductService {

  constructor(private http: HttpClient, private errorService: ErrorService, private authService: AuthService) {
  }

  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`${environment.apiUrl}/products`, product, {headers: {Authorization: `bearer ${this.authService.getToken()}`}})
      .pipe(
        catchError(this.errorService.handleError<Product>('createProduct', product))
      );
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.apiUrl}/products`)
      .pipe(
        catchError(this.errorService.handleError<Product[]>('getProducts'))
      );
  }

  getProductsByShopId(shopId: number): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.apiUrl}/shops/${shopId}/products`, {headers: {Authorization: `bearer ${this.authService.getToken()}`}})
      .pipe(
        catchError(this.errorService.handleError<Product[]>('getUsersProducts'))
      );
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${environment.apiUrl}/products/${id}`)
      .pipe(
        catchError(this.errorService.handleError<Product>('getProductById'))
      );
  }

  updateProduct(product: Product, id: number): Observable<Product>{
    return this.http.put<Product>(`${environment.apiUrl}/products/${id}`, product, {headers: {Authorization: `bearer ${this.authService.getToken()}`}})
      .pipe(
        catchError(this.errorService.handleError<Product>('updateProduct', product))
      );
  }

  deleteProduct(id: number): Observable<Product>{
    return this.http.delete<Product>(`${environment.apiUrl}/products/${id}`, {headers: {Authorization: `bearer ${this.authService.getToken()}`}})
      .pipe(
        catchError(this.errorService.handleError<Product>('deleteProduct'))
      );
  }
}
