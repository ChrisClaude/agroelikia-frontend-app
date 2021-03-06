import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ContactService } from "@/services/contact.service";
import { MatDialog } from "@angular/material/dialog";
import { DeleteShopDialogComponent } from "@/components/delete-shop-dialog/delete-shop-dialog.component";
import { Observable, of } from "rxjs";

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageComponent implements OnInit {

  contacts: Contact[] = [];

  constructor(private router: Router, private contactService: ContactService, public dialog: MatDialog) { }

  displayedColumns: string[] = ['name', 'organization', 'typeOfActivity', 'productDescription', 'address', 'telephone', 'email', 'action'];

  ngOnInit(): void {
    this.contactService.getUsersContacts().subscribe(contacts => {
      if (contacts) {
        // this.contacts = contacts;
        this.contacts = [];
      }
    });
  }

  onEdit(contact: Contact) {
    this.router.navigate(['contact/edit', contact.id]);
  }

  openDialog(contact: Contact): void {
    const dialogRef = this.dialog.open(DeleteShopDialogComponent, {
      width: '400px',
      data: {id: contact.id, name: contact.name},
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && contact.id !== undefined) {
        this.contactService.deleteContact(contact.id).subscribe(success => {
          this.contactService.getUsersContacts().subscribe(contacts => {
            this.contacts = contacts;
          });
        });
      }
    });
  }

  navigateToContact(contact: Contact) {
    this.router.navigate(['contacts/view', contact.id]);
  }
}
