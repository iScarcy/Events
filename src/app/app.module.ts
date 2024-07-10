import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/app/shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { RouterModule, Routes } from '@angular/router';
import { RecurringEventsService } from './services/recurring-events.service';
import { HttpClientModule } from '@angular/common/http';
import { EventComponent } from './components/main-content/content/event/event.component';
import { StoreModule } from '@ngrx/store';
import { eventsReducer } from './shared/store/events.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule, provideEffects } from '@ngrx/effects';
import { EvenetEffects } from './shared/store/events.effects';



@NgModule({
  declarations: [
    AppComponent,
    MainContentComponent,
    SidenavComponent,
    ToolbarComponent,
    EventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule,
    StoreModule.forRoot({events:eventsReducer}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([EvenetEffects])
  ],
  providers: [
     RecurringEventsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
