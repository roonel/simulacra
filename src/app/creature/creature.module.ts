import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CreatureListComponent} from './creature-list/creature-list.component';
import {CreatureFilterComponent} from './creature-filter/creature-filter.component';
import {CreatureDetailsComponent} from './creature-details/creature-details.component';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [CreatureListComponent,
    CreatureFilterComponent,
    CreatureDetailsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [CreatureListComponent,
    CreatureFilterComponent,
    CreatureDetailsComponent]
})
export class CreatureModule {
}
