import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {ReferenceListComponent} from './reference-list/reference-list.component';
import {ReferenceFilterComponent} from './reference-filter/reference-filter.component';
import {ReferenceEditComponent} from './reference-edit/reference-edit.component';

@NgModule({
  declarations: [
    ReferenceListComponent,
    ReferenceEditComponent,
    ReferenceFilterComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ReferenceListComponent,
    ReferenceEditComponent
  ],
  entryComponents: [
    ReferenceEditComponent
  ]
})
export class ReferenceModule {
}
