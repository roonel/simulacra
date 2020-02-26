import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProcessedTextComponent} from './processed-text/processed-text.component';
import {TableComponent} from './table/table.component';
import {FormsModule} from '@angular/forms';
import {MaterialModule} from '../material.module';


@NgModule({
  declarations: [
    ProcessedTextComponent,
    TableComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
  ],
  exports: [CommonModule,
    FormsModule,
    MaterialModule,
    ProcessedTextComponent,
    TableComponent,
  ],
})
export class SharedModule {
}
