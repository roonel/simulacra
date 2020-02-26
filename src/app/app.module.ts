import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {AncestryModule} from './ancestry/ancestry.module';
import {CreatureModule} from './creature/creature.module';
import {DataCreatorModule} from './data-creator/data-creator.module';
import {ItemModule} from './item/item.module';
import {PathModule} from './path/path.module';
import {SpellModule} from './spell/spell.module';
import {SharedModule} from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AncestryModule,
    CreatureModule,
    DataCreatorModule,
    ItemModule,
    PathModule,
    SpellModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
