import {Component, Inject, OnInit} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  id: number;
  name: string;
}


@Component({
  selector: 'app-delete-shop-dialog',
  templateUrl: './delete-shop-dialog.component.html',
  styleUrls: ['./delete-shop-dialog.component.scss']
})
export class DeleteShopDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<DeleteShopDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
