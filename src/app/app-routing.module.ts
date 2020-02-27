import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SpellListComponent} from './spell/spell-list/spell-list.component';
import {DataCreatorComponent} from './data-creator/data-creator.component';
import {CreatureListComponent} from './creature/creature-list/creature-list.component';
import {AncestryListComponent} from './ancestry/ancestry-list/ancestry-list.component';
import {PathListComponent} from './path/path-list/path-list.component';
import {ContentHandlerComponent} from './content-handler/content-handler.component';
import {ItemListComponent} from './item/item-list/item-list.component';
import {RelicListComponent} from './relic/relic-list/relic-list.component';
import {TraditionListComponent} from './tradition/tradition-list/tradition-list.component';

const routes: Routes = [
  {path: 'spell-list/:id', component: SpellListComponent},
  {path: 'spell-list', component: SpellListComponent},
  {path: 'creature-list', component: CreatureListComponent},
  {path: 'ancestry-list', component: AncestryListComponent},
  {path: 'path-list', component: PathListComponent},
  {path: 'item-list', component: ItemListComponent},
  {path: 'relic-list', component: RelicListComponent},
  {path: 'tradition-list', component: TraditionListComponent},
  {path: 'data-creator', component: DataCreatorComponent},
  {path: 'contents', component: ContentHandlerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
