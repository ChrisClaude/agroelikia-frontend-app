import { ContactService } from '@/services/contact.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  // @ts-ignore
  $contact: Observable<Contact>;

  constructor(private contactService: ContactService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.$contact = this.contactService.getContactById(this.activatedRoute.snapshot.params["id"]);
  }

}
