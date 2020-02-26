import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {SpellListComponent} from './spell-list/spell-list.component';
import {SpellDetailsComponent} from './spell-details/spell-details.component';
import {SpellFilterComponent} from './spell-filter/spell-filter.component';

@NgModule({
  declarations: [
    SpellListComponent,
    SpellDetailsComponent,
    SpellFilterComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    SpellListComponent,
    SpellDetailsComponent
  ]
})
export class SpellModule {
}
