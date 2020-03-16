import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PathListComponent} from './path-list/path-list.component';
import {SharedModule} from '../shared/shared.module';
import {PathFilterComponent} from './path-filter/path-filter.component';
import {PathEditComponent} from './path-edit/path-edit.component';


@NgModule({
  declarations: [
    PathListComponent,
    PathFilterComponent,
    PathEditComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    PathListComponent,
    PathEditComponent,
  ], entryComponents: [
    PathEditComponent
  ]
})
export class PathModule {
}
