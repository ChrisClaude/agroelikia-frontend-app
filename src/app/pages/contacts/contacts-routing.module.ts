import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EditComponent } from "./edit/edit.component";
import { ManageComponent } from "./manage/manage.component";
import { CreateComponent } from "@/pages/contacts/create/create.component";
import { ViewComponent } from "@/pages/contacts/view/view.component";

const routes: Routes = [
  { path: "", component: ManageComponent },
  { path: "create", component: CreateComponent },
  { path: "view/:id", component: ViewComponent },
  { path: "edit/:id", component: EditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule { }
