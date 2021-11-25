import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ErrorService} from "@/services/error.service";
import {AuthService} from "../auth/services/auth.service";
import {environment} from "@/environments/environment";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ImageUploadService {

  constructor(private http: HttpClient, private errorService: ErrorService, private authService: AuthService) { }

  uploadShopImage(image: File, shopId: number) {
    console.log('image', image);
    console.log('shopId', shopId);

    const imageFormData = new FormData();
    imageFormData.append('files', image);
    imageFormData.append('ref', 'shop');
    imageFormData.append('refId', shopId.toString());
    imageFormData.append('field', 'images');

    console.log(imageFormData);

    return this.http.post(`${environment.apiUrl}/upload`, imageFormData, {headers: {Authorization: `bearer ${this.authService.getToken()}`}})
      .pipe(
        catchError(this.errorService.handleError('uploadShopImage', imageFormData))
      );
  }
}