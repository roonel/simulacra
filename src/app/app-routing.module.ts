import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SpellsComponent } from "./spells/spells.component";
import { DataCreatorComponent } from "./data-creator/data-creator.component";

const routes: Routes = [
  { path: "spells", component: SpellsComponent },
  { path: "data-creator", component: DataCreatorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
