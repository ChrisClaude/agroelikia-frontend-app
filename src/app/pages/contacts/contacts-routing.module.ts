import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EditComponent } from "./edit/edit.component";
import { ManageComponent } from "./manage/manage.component";
import { CreateComponent } from "@/pages/contacts/create/create.component";

const routes: Routes = [
  { path: "", component: ManageComponent },
  { path: "create", component: ManageComponent },
  { path: "view:id", component: CreateComponent },
  { path: "edit:id", component: EditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule { }
