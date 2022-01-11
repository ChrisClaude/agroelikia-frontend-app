import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ContactsRoutingModule} from './contacts-routing.module';
import {ManageComponent} from "./manage/manage.component";
import {ComponentsModule} from "@/components/components.module";


@NgModule({
  declarations: [
    ManageComponent
  ],
  imports: [
    CommonModule,
    ContactsRoutingModule,
    ComponentsModule
  ]
})
export class ContactsModule {
}
