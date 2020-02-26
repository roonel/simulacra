import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PathListComponent} from './path-list/path-list.component';
import {PathDetailsComponent} from './path-details/path-details.component';
import {SharedModule} from '../shared/shared.module';
import { PathFilterComponent } from './path-filter/path-filter.component';


@NgModule({
  declarations: [
    PathListComponent,
    PathDetailsComponent,
    PathFilterComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    PathListComponent,
    PathDetailsComponent,]
})
export class PathModule {
}
