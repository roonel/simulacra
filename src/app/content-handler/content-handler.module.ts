import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentCategoryDisplayComponent } from './content-category-display/content-category-display.component';
import {ContentHandlerComponent} from './content-handler.component';
import {SharedModule} from '../shared/shared.module';
import { CreateGroupModalComponent } from './create-group-modal/create-group-modal.component';



@NgModule({
  declarations: [
    ContentHandlerComponent,
    ContentCategoryDisplayComponent,
    CreateGroupModalComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ContentHandlerComponent
  ],
  entryComponents: [
    CreateGroupModalComponent
  ]
})
export class ContentHandlerModule { }
