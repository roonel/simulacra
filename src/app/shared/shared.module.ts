import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProcessedTextComponent} from './processed-text/processed-text.component';
import {TableComponent} from './table/table.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../material.module';
import {TraditionIconComponent} from './tradition-icon/tradition-icon.component';
import {HttpClientModule} from '@angular/common/http';
import {PricePipe} from './price.pipe';
import {CastingsPipe} from './castings.pipe';
import {InlineRenderComponent} from './inline-render/inline-render.component';
import {AbilityListInputComponent} from './ability-list-input/ability-list-input.component';
import {ConfirmationModalComponent} from './confirmation-modal/confirmation-modal.component';
import {TableEditComponent} from './table-edit/table-edit.component';
import {StringListInputComponent} from './string-list-input/string-list-input.component';
import {IdEditComponent} from './id-edit/id-edit.component';
import {ContentTooltipComponent} from './content-tooltip/content-tooltip.component';
import {SpellDetailsComponent} from './spell-details/spell-details.component';
import {CreatureDetailsComponent} from './creature-details/creature-details.component';
import {TooltipDialogComponent} from './tooltip-dialog/tooltip-dialog.component';
import {ItemDetailsComponent} from './item-details/item-details.component';
import {AncestryDetailsComponent} from './ancestry-details/ancestry-details.component';
import {PathDetailsComponent} from './path-details/path-details.component';
import {RelicDetailsComponent} from './relic-details/relic-details.component';
import {TraditionDetailsComponent} from './tradition-details/tradition-details.component';
import {TableListInputComponent} from './table-list-input/table-list-input.component';
import {PathLevelInputComponent} from './path-level-input/path-level-input.component';
import {MdInputComponent} from './md-input/md-input.component';
import {MdPreviewComponent} from './md-input/md-preview/md-preview.component';
import {SourceInputComponent} from './source-input/source-input.component';
import {ReferenceDetailsComponent} from './reference-details/reference-details.component';
import {VehicleDetailsComponent} from './vehicle-details/vehicle-details.component';
import { HighlightPipe } from './highlight.pipe';


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
    StringListInputComponent,
    IdEditComponent,
    ContentTooltipComponent,
    SpellDetailsComponent,
    AncestryDetailsComponent,
    CreatureDetailsComponent,
    ItemDetailsComponent,
    PathDetailsComponent,
    RelicDetailsComponent,
    TraditionDetailsComponent,
    TooltipDialogComponent,
    TableListInputComponent,
    PathLevelInputComponent,
    MdInputComponent,
    MdPreviewComponent,
    SourceInputComponent,
    ReferenceDetailsComponent,
    VehicleDetailsComponent,
    HighlightPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    ProcessedTextComponent,
    TableComponent,
    TraditionIconComponent,
    PricePipe,
    CastingsPipe,
    AbilityListInputComponent,
    TableEditComponent,
    StringListInputComponent,
    IdEditComponent,
    AncestryDetailsComponent,
    SpellDetailsComponent,
    CreatureDetailsComponent,
    ItemDetailsComponent,
    PathDetailsComponent,
    RelicDetailsComponent,
    TraditionDetailsComponent,
    TableListInputComponent,
    PathLevelInputComponent,
    MdInputComponent,
    SourceInputComponent,
    ReferenceDetailsComponent,
    VehicleDetailsComponent,
    HighlightPipe
  ],
  entryComponents: [
    ConfirmationModalComponent,
    TooltipDialogComponent,
    MdPreviewComponent
  ]
})
export class SharedModule {
}
