import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ErrorService } from "@/services/error.service";
import { AuthService } from "@/auth/services/auth.service";
import { environment } from "@/environments/environment";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ImageUploadService {

  constructor(private http: HttpClient, private errorService: ErrorService, private authService: AuthService) { }

  uploadProductImage(image: File[], productId: number) {
    return this.uploadImage(image, productId, 'product');
  }

  uploadShopImage(image: File[], shopId: number) {
    return this.uploadImage(image, shopId, 'shop');
  }

  private uploadImage(image: File[], id: number, ref: string) {
    const imageFormData = new FormData();

    image.forEach((image) => imageFormData.append('files', image));
    imageFormData.append('ref', ref);
    imageFormData.append('refId', id.toString());
    imageFormData.append('field', 'images');

    return this.http.post(`${environment.apiUrl}/upload`, imageFormData, {headers: {Authorization: `bearer ${this.authService.getToken()}`}})
      .pipe(
        catchError(this.errorService.handleError(`upload ${ref} image`, imageFormData))
      );
  }
}
