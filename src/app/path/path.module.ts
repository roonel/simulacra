import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PathListComponent} from './path-list/path-list.component';
import {SharedModule} from '../shared/shared.module';
import {PathFilterComponent} from './path-filter/path-filter.component';
import {PathEditComponent} from './path-edit/path-edit.component';
import {PathLevelInputComponent} from './path-edit/path-level-input/path-level-input.component';


@NgModule({
  declarations: [
    PathListComponent,
    PathFilterComponent,
    PathEditComponent,
    PathLevelInputComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    PathListComponent,
    PathEditComponent
  ], entryComponents: [
    PathEditComponent
  ]
})
export class PathModule {
}
