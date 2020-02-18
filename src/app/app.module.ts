import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MaterialModule} from './material.module';
import {SpellListComponent} from './spell/spell-list/spell-list.component';
import {SpellDetailsComponent} from './spell/spell-details/spell-details.component';
import {FormsModule} from '@angular/forms';
import {SpellFilterComponent} from './spell/spell-filter/spell-filter.component';
import {DataCreatorComponent} from './data-creator/data-creator.component';
import {ProcessedTextComponent} from './processed-text/processed-text.component';
import {StringListInputComponent} from './string-list-input/string-list-input.component';
import {AbilityListInputComponent} from './ability-list-input/ability-list-input.component';
import { CreatureListComponent } from './creature/creature-list/creature-list.component';
import { CreatureFilterComponent } from './creature/creature-filter/creature-filter.component';
import { CreatureDetailsComponent } from './creature/creature-details/creature-details.component';
import { CreatureMagicInputComponent } from './creature-magic-input/creature-magic-input.component';

@NgModule({
  declarations: [
    AppComponent,
    SpellListComponent,
    SpellDetailsComponent,
    SpellFilterComponent,
    DataCreatorComponent,
    ProcessedTextComponent,
    StringListInputComponent,
    AbilityListInputComponent,
    CreatureListComponent,
    CreatureFilterComponent,
    CreatureDetailsComponent,
    CreatureMagicInputComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
