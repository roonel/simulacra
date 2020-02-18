import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SpellListComponent} from './spell/spell-list/spell-list.component';
import {DataCreatorComponent} from './data-creator/data-creator.component';
import {CreatureListComponent} from './creature/creature-list/creature-list.component';

const routes: Routes = [
  {path: 'spell-list', component: SpellListComponent},
  {path: 'creature-list', component: CreatureListComponent},
  {path: 'data-creator', component: DataCreatorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
