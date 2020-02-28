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
import { ContentHandlerComponent } from './content-handler/content-handler.component';
import {RelicModule} from './relic/relic.module';
import {TraditionModule} from './tradition/tradition.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentHandlerComponent,
    DashboardComponent,
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
    TraditionModule,
    RelicModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
