import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ShopService} from "@/services/shop.service";
import {ImageUploadService} from "@/services/image-upload.service";
import {ProductService} from "@/services/product.service";

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {

  createProductForm = this.fb.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    shop: ['', Validators.required],
    isAvailable: [true, Validators.required],
  });

  images: File[] = [];

  shops: Shop[] = [];

  constructor(private fb: FormBuilder, private router: Router, private productService: ProductService, private shopService: ShopService, private imageUpdateService: ImageUploadService) { }

  ngOnInit(): void {
    this.shopService.getUsersShops().subscribe(shops => this.shops = shops);
  }

  createProduct () {
    if (this.createProductForm.valid && this.images !== null) {
      const newProduct: Product = {
        name: this.createProductForm.get('name')?.value,
        description: this.createProductForm.get('description')?.value,
        shop: this.createProductForm.get('shop')?.value,
        isAvailable: this.createProductForm.get('isAvailable')?.value
      };
      this.productService.createProduct(newProduct).subscribe(product => {
        if (product.id) {
          this.imageUpdateService.uploadProductImage(this.images, product.id)
            .subscribe(res => {
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
