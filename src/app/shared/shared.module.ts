import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProcessedTextComponent} from './processed-text/processed-text.component';
import {TableComponent} from './table/table.component';
import {FormsModule} from '@angular/forms';
import {MaterialModule} from '../material.module';
import {TraditionIconComponent} from './tradition-icon/tradition-icon.component';
import {HttpClientModule} from '@angular/common/http';
import {PricePipe} from './price.pipe';
import { CastingsPipe } from './castings.pipe';
import { InlineRenderComponent } from './inline-render/inline-render.component';
import {AbilityListInputComponent} from './ability-list-input/ability-list-input.component';
import { ConfirmationModalComponent } from './confirmation-modal/confirmation-modal.component';
import {TableEditComponent} from './table-edit/table-edit.component';
import {RowInputComponent} from './table-edit/row-input/row-input.component';
import {StringListInputComponent} from './string-list-input/string-list-input.component';


@NgModule({
  declarations: [
    ProcessedTextComponent,
    TableComponent,
    TraditionIconComponent,
    PricePipe,
    CastingsPipe,
    InlineRenderComponent,
    AbilityListInputComponent,
    ConfirmationModalComponent,
    TableEditComponent,
    RowInputComponent,
    StringListInputComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    HttpClientModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    ProcessedTextComponent,
    TableComponent,
    TraditionIconComponent,
    PricePipe,
    CastingsPipe,
    AbilityListInputComponent,
    TableEditComponent,
    RowInputComponent,
    StringListInputComponent,
  ],
  entryComponents: [
    ConfirmationModalComponent
  ]
})
export class SharedModule {
}
