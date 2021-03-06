import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ContactsRoutingModule} from './contacts-routing.module';
import {ManageComponent} from "./manage/manage.component";
import {ComponentsModule} from "@/components/components.module";
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';
import { MaterialModule } from "@/material/material.module";


@NgModule({
  declarations: [
    ManageComponent,
    CreateComponent,
    EditComponent,
    ViewComponent
  ],
  imports: [
    CommonModule,
    ContactsRoutingModule,
    ComponentsModule,
    MaterialModule
  ]
})
export class ContactsModule {
}
