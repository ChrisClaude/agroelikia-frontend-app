import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "@/services/product.service";
import {ShopService} from "@/services/shop.service";
import {ImageUploadService} from "@/services/image-upload.service";
import {NgxSpinnerService} from "ngx-spinner";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  editProductForm = this.fb.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    price: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
    shop: ['', Validators.required],
    isAvailable: [true, Validators.required],
  });

  productImages: Image [] = [];

  images: File[] = [];

  shops: Shop[] = [];

  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute, private productService: ProductService, private shopService: ShopService, private imageUpdateService: ImageUploadService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.shopService.getUsersShops().subscribe(shops => this.shops = shops);

    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.productService.getProductById(+id).subscribe(product => {
          this.editProductForm.patchValue( {
            name: product.name,
            description: product.description,
            price: product.price,
            shop: (product.shop as Shop).name,
            isAvailable: product.isAvailable,
          });

          this.productImages = product.images as Image[];
      });
    }
  }

  updateProduct () {
    if (this.editProductForm.valid && this.images !== null) {
      const newProduct: Product = {
        name: this.editProductForm.get('name')?.value,
        description: this.editProductForm.get('description')?.value,
        price: this.editProductForm.get('price')?.value,
        shop: this.editProductForm.get('shop')?.value,
        isAvailable: this.editProductForm.get('isAvailable')?.value
      };

      this.spinner.show();
      this.productService.createProduct(newProduct).subscribe(product => {
        if (product.id) {
          this.imageUpdateService.uploadProductImage(this.images, product.id)
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
