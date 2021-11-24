import {ShopService} from '@/services/shop.service';
import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {DeleteShopDialogComponent} from "@/components/delete-shop-dialog/delete-shop-dialog.component";

@Component({
  selector: 'app-list-shops',
  templateUrl: './list-shops.component.html',
  styleUrls: ['./list-shops.component.scss']
})
export class ListShopsComponent implements OnInit {

  shops: Shop[] = [];

  constructor(private router: Router, private shopService: ShopService, public dialog: MatDialog) { }

  displayedColumns: string[] = ['name', 'description', 'address', 'telephone', 'action'];

  ngOnInit(): void {
    this.shopService.getUsersShops().subscribe(shops => this.shops = shops);
  }

  onEdit(shop: Shop) {
    this.router.navigate(['shop/edit', shop.id]);
  }

  openDialog(shop: Shop): void {
    const dialogRef = this.dialog.open(DeleteShopDialogComponent, {
      width: '400px',
      data: {id: shop.id, name: shop.name},
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && shop.id !== undefined) {
        this.shopService.deleteShop(shop.id).subscribe(success => {
          this.shopService.getUsersShops().subscribe(shops => this.shops = shops);
        });
      }
    });
  }
}
