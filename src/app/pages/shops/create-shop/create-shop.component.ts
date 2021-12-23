import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, Validators} from "@angular/forms";
import {ShopService} from '@/services/shop.service';
import {ImageUploadService} from "@/services/image-upload.service";
import {NgxSpinnerService} from "ngx-spinner";

@Component({
  selector: 'app-create-shop',
  templateUrl: './create-shop.component.html',
  styleUrls: ['./create-shop.component.scss']
})
export class CreateShopComponent implements OnInit {

  createShopForm = this.fb.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    address: ['', Validators.required],
    telephone: ['', Validators.required],
  });

  images: File[] = [];

  constructor(private fb: FormBuilder, private router: Router, private shopService: ShopService,
              private imageUpdateService: ImageUploadService, private spinner: NgxSpinnerService) {
  }

  ngOnInit(): void {
  }

  createShop () {
    if (this.createShopForm.valid && this.images !== null) {
      const newShop: Shop = {
        name: this.createShopForm.get('name')?.value,
        description: this.createShopForm.get('description')?.value,
        address: this.createShopForm.get('address')?.value,
        telephone: this.createShopForm.get('telephone')?.value
      };

      this.spinner.show();
      this.shopService.createShop(newShop).subscribe(success => {
        if (success.id) {
          this.imageUpdateService.uploadShopImage(this.images, success.id)
            .subscribe(res => {
              this.spinner.hide();
              console.log('upload response', res);
              this.router.navigateByUrl('shop/manage');
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
