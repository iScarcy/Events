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
import { RouterModule, RouterState, Routes } from '@angular/router';
import { RecurringEventsService } from './services/recurring-events.service';
import { HttpClientModule } from '@angular/common/http';
import { EventComponent } from './components/main-content/content/event/event.component';
import { provideStore, StoreModule } from '@ngrx/store';
import { eventsReducer } from './shared/store/events.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule, provideEffects } from '@ngrx/effects';
import { EventEffects } from './shared/store/events.effects'; 
 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmComponent } from './components/dialog/confirm/confirm.component';
import { EventsComponent } from './components/dialog/events/events.component'; 
import { AndressbookService } from './services/andressbook.service';
 
import { provideRouterStore, routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { CustomSerializer } from './shared/store/Router/CustomSerializer';
 
import { AppState } from './shared/store/Global/App.state';

import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';

import {
  MomentDateAdapter,
  MAT_MOMENT_DATE_FORMATS,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS
} from '@angular/material-moment-adapter';

@NgModule({
  declarations: [
    AppComponent,
    MainContentComponent,
    SidenavComponent,
    ToolbarComponent,
    EventComponent,
   
    ConfirmComponent,
    EventsComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule,
    ReactiveFormsModule, FormsModule,
    StoreModule.forRoot(AppState),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([EventEffects]),
     StoreRouterConnectingModule.forRoot(
      {serializer: CustomSerializer}
    ) 
    
  ],
  providers: [
     { provide: MAT_DATE_LOCALE, useValue: 'it-IT' },

  {
    provide: DateAdapter,
    useClass: MomentDateAdapter,
    deps: [MAT_DATE_LOCALE]
  },

  {
    provide: MAT_DATE_FORMATS,
    useValue: MAT_MOMENT_DATE_FORMATS
  },

  {
    provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS,
    useValue: { useUtc: true }
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
