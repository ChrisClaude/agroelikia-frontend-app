import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, Validators} from "@angular/forms";
import {ShopService} from '@/services/shop.service';
import {ImageUploadService} from "@/services/image-upload.service";

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

  image: File | null = null;

  constructor(private fb: FormBuilder, private router: Router, private shopService: ShopService, private imageUpdateService: ImageUploadService) {
  }

  ngOnInit(): void {
  }

  createShop () {
    if (this.createShopForm.valid && this.image !== null) {
      const newShop: Shop = {
        name: this.createShopForm.get('name')?.value,
        description: this.createShopForm.get('description')?.value,
        address: this.createShopForm.get('address')?.value,
        telephone: this.createShopForm.get('telephone')?.value
      };
      this.shopService.createShop(newShop).subscribe(success => {
        console.log(success);
        if (success.id) {
          this.imageUpdateService.uploadShopImage(this.image as File, success.id)
            .subscribe(res => {
              console.log('upload response', res);
              this.router.navigateByUrl('shop/list');
            });
        }
      });
    }
  }

  onFileSelected(event: Event) {
    if (typeof (FileReader) !== 'undefined') {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.image = ((event.target as HTMLInputElement).files as FileList)[0];
        console.log(((event.target as HTMLInputElement).files as FileList)[0]);
      };

      reader.readAsDataURL(((event.target as HTMLInputElement).files as FileList)[0]);
    }
  }

}
