import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SpellListComponent} from './spell/spell-list/spell-list.component';
import {CreatureListComponent} from './creature/creature-list/creature-list.component';
import {AncestryListComponent} from './ancestry/ancestry-list/ancestry-list.component';
import {PathListComponent} from './path/path-list/path-list.component';
import {ContentHandlerComponent} from './content-handler/content-handler.component';
import {ItemListComponent} from './item/item-list/item-list.component';
import {RelicListComponent} from './relic/relic-list/relic-list.component';
import {TraditionListComponent} from './tradition/tradition-list/tradition-list.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {LicenseComponent} from './license/license.component';
import {ReferenceListComponent} from './reference/reference-list/reference-list.component';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'spell-list/:id', component: SpellListComponent},
  {path: 'spell-list', component: SpellListComponent},
  {path: 'creature-list/:id', component: CreatureListComponent},
  {path: 'creature-list', component: CreatureListComponent},
  {path: 'ancestry-list/:id', component: AncestryListComponent},
  {path: 'ancestry-list', component: AncestryListComponent},
  {path: 'path-list/:id', component: PathListComponent},
  {path: 'path-list', component: PathListComponent},
  {path: 'item-list/:id', component: ItemListComponent},
  {path: 'item-list', component: ItemListComponent},
  {path: 'relic-list/:id', component: RelicListComponent},
  {path: 'relic-list', component: RelicListComponent},
  {path: 'tradition-list/:id', component: TraditionListComponent},
  {path: 'tradition-list', component: TraditionListComponent},
  {path: 'reference-list/:id', component: ReferenceListComponent},
  {path: 'reference-list', component: ReferenceListComponent},
  {path: 'license', component: LicenseComponent},
  {path: 'contents', component: ContentHandlerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
