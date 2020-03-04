import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RelicDetailsComponent} from './relic-details/relic-details.component';
import {RelicListComponent} from './relic-list/relic-list.component';
import {SharedModule} from '../shared/shared.module';
import {RelicEditComponent} from './relic-edit/relic-edit.component';
import { RelicFilterComponent } from './relic-filter/relic-filter.component';

@NgModule({
  declarations: [
    RelicDetailsComponent,
    RelicListComponent,
    RelicEditComponent,
    RelicFilterComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    RelicDetailsComponent,
    RelicListComponent,
    RelicEditComponent,
  ],
  entryComponents: [
    RelicEditComponent
  ]
})
export class RelicModule {
}
