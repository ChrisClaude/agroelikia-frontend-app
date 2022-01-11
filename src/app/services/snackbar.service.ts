import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private _snackBar: MatSnackBar) {
  }

  public showSnackbar(message: string, action: string, duration?: number) {
    this._snackBar.open(message, action, {
      duration: duration,
    });
  }
}
