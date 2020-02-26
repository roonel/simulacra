import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DataCreatorComponent} from './data-creator.component';
import {SpellEditComponent} from './spell-edit/spell-edit.component';
import {CreatureEditComponent} from './creature-edit/creature-edit.component';
import {AncestryEditComponent} from './ancestry-edit/ancestry-edit.component';
import {PathEditComponent} from './path-edit/path-edit.component';
import {TableEditComponent} from './table-edit/table-edit.component';
import {RowInputComponent} from './table-edit/row-input/row-input.component';
import {PathLevelInputComponent} from './path-edit/path-level-input/path-level-input.component';
import {StringListInputComponent} from './string-list-input/string-list-input.component';
import {AbilityListInputComponent} from './ability-list-input/ability-list-input.component';
import {SharedModule} from '../shared/shared.module';
import {CreatureMagicInputComponent} from './creature-edit/creature-magic-input/creature-magic-input.component';
import { ItemEditComponent } from './item-edit/item-edit.component';

@NgModule({
  declarations: [
    DataCreatorComponent,
    SpellEditComponent,
    CreatureEditComponent,
    AncestryEditComponent,
    PathEditComponent,
    TableEditComponent,
    RowInputComponent,
    PathLevelInputComponent,
    StringListInputComponent,
    AbilityListInputComponent,
    CreatureMagicInputComponent,
    ItemEditComponent
  ],
  exports:[
    DataCreatorComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class DataCreatorModule {
}
