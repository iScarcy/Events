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
import { SaintDialogComponent } from './components/dialog/saint/saint.component';
 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmComponent } from './components/dialog/confirm/confirm.component';
import { EventsComponent } from './components/dialog/events/events.component';
import { NamedaysComponent } from './components/dialog/namedays/namedays.component';
import { AndressbookService } from './services/andressbook.service';
import { SaintsService } from './services/saints.service';
import { provideRouterStore, routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { CustomSerializer } from './shared/store/Router/CustomSerializer';
import { SaintsComponent } from './components/saints/saints.component';
import { saintsReducer } from './shared/store/Saints/saints.reducer';
import { SaintComponent } from './components/saints/saint/saint.component';
import { SaintEffects } from './shared/store/Saints/saints.effects';
import { AppState } from './shared/store/Global/App.state';


@NgModule({
  declarations: [
    AppComponent,
    MainContentComponent,
    SidenavComponent,
    ToolbarComponent,
    EventComponent,
    SaintDialogComponent,
    ConfirmComponent,
    EventsComponent,
    NamedaysComponent,
    SaintsComponent,
    SaintComponent
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
    EffectsModule.forRoot([EventEffects, SaintEffects]),
     StoreRouterConnectingModule.forRoot(
      {serializer: CustomSerializer}
    ) 
    
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
