import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ErrorService } from "@/services/error.service";
import { AuthService } from "@/auth/services/auth.service";
import { map, mergeMap, Observable, of, shareReplay, switchMap, timer } from "rxjs";
import { environment } from "@/environments/environment";
import { catchError } from "rxjs/operators";

const CACHE_SIZE = 1;
const REFRESH_INTERVAL = 3 * 60000; // 3 minutes

@Injectable({
  providedIn: "root"
})
export class ProductService {

  private cache$: Observable<Array<Product>> | undefined = undefined;

  constructor(private http: HttpClient, private errorService: ErrorService, private authService: AuthService) {
  }

  get products() {
    if (!this.cache$) {
      const timer$ = timer(0, REFRESH_INTERVAL);

      this.cache$ = timer$.pipe(
        switchMap(_ => this.requestProducts()),
        shareReplay(CACHE_SIZE),
        catchError(this.errorService.handleError<Array<Product>>("getProducts"))
      );
    }
    return this.cache$;
  }

  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`${environment.apiUrl}/products`, product, { headers: { Authorization: `bearer ${this.authService.getToken()}` } })
      .pipe(
        catchError(this.errorService.handleError<Product>("createProduct", product))
      );
  }

  getProductsByShopId(shopId: number): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.apiUrl}/shops/${shopId}/products`, { headers: { Authorization: `bearer ${this.authService.getToken()}` } })
      .pipe(
        catchError(this.errorService.handleError<Product[]>("getUsersProducts"))
      );
  }

  getProductById(id: number): Observable<Product> {
    return this.products.pipe(
      map(products => products.find(p => p.id === id)),
      mergeMap(product => {
        if (product) {
          return of(product);
        } else {
          return this.requestProductById(id);
        }
      }),
      catchError(this.errorService.handleError<Product>("GetProductById " + id))
    );
  }

  updateProduct(product: Product, id: number): Observable<Product> {
    return this.http.put<Product>(`${environment.apiUrl}/products/${id}`, product, { headers: { Authorization: `bearer ${this.authService.getToken()}` } })
      .pipe(
        catchError(this.errorService.handleError<Product>("updateProduct", product))
      );
  }

  private requestProducts() {
    return this.http.get<Array<Product>>(`${environment.apiUrl}/products`);
  }

  private requestProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${environment.apiUrl}/products/${id}`)
      .pipe(
        catchError(this.errorService.handleError<Product>("getProductById"))
      );
  }

  deleteProduct(id: number): Observable<Product>{
    return this.http.delete<Product>(`${environment.apiUrl}/products/${id}`, {headers: {Authorization: `bearer ${this.authService.getToken()}`}})
      .pipe(
        catchError(this.errorService.handleError<Product>('deleteProduct'))
      );
  }
}
