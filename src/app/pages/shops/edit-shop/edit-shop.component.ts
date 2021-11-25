import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ShopService} from "@/services/shop.service";

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

  image: any = null;

  constructor(private fb: FormBuilder, private router: Router, private shopService: ShopService, private route: ActivatedRoute) {
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
      this.shopService.updateShop(editedShop, +id).subscribe(success => {
        console.log(success);
        this.router.navigateByUrl('shop/list');
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
