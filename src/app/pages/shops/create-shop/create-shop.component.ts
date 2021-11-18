import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, Validators} from "@angular/forms";
import {ShopService} from '@/services/shop.service';

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

  constructor(private fb: FormBuilder, private router: Router, private shopService: ShopService) {
  }

  ngOnInit(): void {
  }

  createShop () {
    if (this.createShopForm.valid) {
      console.log(this.createShopForm.value);
      const newShop: Shop = {
        name: this.createShopForm.get('name')?.value,
        description: this.createShopForm.get('description')?.value,
        address: this.createShopForm.get('address')?.value,
        telephone: this.createShopForm.get('telephone')?.value
      };
      this.shopService.createShop(newShop).subscribe(success => {
        console.log(success);
        this.router.navigateByUrl('shop/list');
      });
    }
  }

}
