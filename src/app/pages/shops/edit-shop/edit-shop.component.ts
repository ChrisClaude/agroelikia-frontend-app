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
}
