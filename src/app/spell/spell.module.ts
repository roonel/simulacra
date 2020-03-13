import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {SpellListComponent} from './spell-list/spell-list.component';
import {SpellFilterComponent} from './spell-filter/spell-filter.component';
import {SpellEditComponent} from './spell-edit/spell-edit.component';

@NgModule({
  declarations: [
    SpellListComponent,
    SpellFilterComponent,
    SpellEditComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    SpellListComponent,
    SpellEditComponent
  ],
  entryComponents: [
    SpellEditComponent
  ]
})
export class SpellModule {
}
