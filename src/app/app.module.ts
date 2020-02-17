import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MaterialModule } from "./material.module";
import { SpellsComponent } from "./spells/spells.component";
import { SpellDetailsComponent } from "./spell-details/spell-details.component";
import { FormsModule } from "@angular/forms";
import { SpellFilterComponent } from "./spell-filter/spell-filter.component";
import { DataCreatorComponent } from "./data-creator/data-creator.component";
import { ProcessedTextComponent } from './processed-text/processed-text.component';

@NgModule({
  declarations: [
    AppComponent,
    SpellsComponent,
    SpellDetailsComponent,
    SpellFilterComponent,
    DataCreatorComponent,
    ProcessedTextComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
