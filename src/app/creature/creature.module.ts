import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CreatureListComponent} from './creature-list/creature-list.component';
import {CreatureFilterComponent} from './creature-filter/creature-filter.component';
import {CreatureDetailsComponent} from './creature-details/creature-details.component';
import {SharedModule} from '../shared/shared.module';
import {CreatureEditComponent} from './creature-edit/creature-edit.component';
import {CreatureMagicInputComponent} from './creature-edit/creature-magic-input/creature-magic-input.component';


@NgModule({
  declarations: [
    CreatureListComponent,
    CreatureFilterComponent,
    CreatureDetailsComponent,
    CreatureEditComponent,
    CreatureMagicInputComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    CreatureListComponent,
    CreatureFilterComponent,
    CreatureDetailsComponent,
    CreatureEditComponent
  ],
  entryComponents: [
    CreatureEditComponent]
})
export class CreatureModule {
}
