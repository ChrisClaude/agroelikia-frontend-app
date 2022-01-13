import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ShopService} from "@/services/shop.service";
import {NgxSpinnerService} from "ngx-spinner";
import {ImageUploadService} from "@/services/image-upload.service";

@Component({
  selector: 'app-edit-shop',
  templateUrl: './edit-shop.component.html',
  styleUrls: ['./edit-shop.component.scss']
})
export class EditShopComponent implements OnInit {

  editShopForm = this.fb.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    address: ['', Validators.required],
    telephone: ['', Validators.required],
  });

  shopImages: Image [] = [];

  images: File[] = [];

  constructor(private fb: FormBuilder, private router: Router, private shopService: ShopService, private route: ActivatedRoute,private imageUpdateService: ImageUploadService, private spinner: NgxSpinnerService) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.shopService.getShopById(+id).subscribe(
        shop => {
          this.editShopForm.patchValue({
            name: shop.name,
            description: shop.description,
            address: shop.address,
            telephone: shop.telephone,
          });

          this.shopImages = shop.images as Image[];
        }
      )
    }
  }

  updateShop () {
    const id = this.route.snapshot.paramMap.get('id');

    if (id !== null && this.editShopForm.valid) {
      const editedShop: Shop = {
        name: this.editShopForm.get('name')?.value,
        description: this.editShopForm.get('description')?.value,
        address: this.editShopForm.get('address')?.value,
        telephone: this.editShopForm.get('telephone')?.value
      };
      this.spinner.show();
      this.shopService.updateShop(editedShop, +id).subscribe(success => {
        if (success.id) {
          this.imageUpdateService.uploadShopImage(this.images, success.id)
            .subscribe(res => {
              this.spinner.hide();
              this.router.navigateByUrl('shops/manage');
            });
        }
      });
    }
  }

  onFileSelected(event: Event) {
    if (typeof (FileReader) !== 'undefined') {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        Array.from((event.target as HTMLInputElement).files as FileList).forEach(file => this.images.push(file));
      };

      reader.readAsDataURL(((event.target as HTMLInputElement).files as FileList)[0]);
    }
  }
}
