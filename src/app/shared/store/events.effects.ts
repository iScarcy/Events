import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { RecurringEventsService } from 'src/app/services/recurring-events.service';
import {
  CHANGE_EVENT_DATE,
  changeDateEventSuccess,
  LOAD_EVENTS,
  LOAD_EVENTS_BY_DAYS,
  loadeventssuccess
} from './events.actions';
import { catchError, exhaustMap, map, Observable, of } from 'rxjs';
import {
  IChangeEventDateRequestModel,
  IDaysEventStoreRequestModel,
  IEventTypeRequestModel,
  IEventTypeStoreRequestModel,
} from './events.model';
import { EventActionResult } from 'src/app/models/enums/eventActionResult';
import { AndressbookService } from 'src/app/services/andressbook.service';
import { ISaint } from 'src/app/models/interfaces/ISaint';
import { SaintsService } from 'src/app/services/saints.service';


@Injectable()
export class EventEffects {
  effects$ = createEffect(() =>
    this.action$.pipe(
      ofType(LOAD_EVENTS),
      exhaustMap((action: IEventTypeStoreRequestModel) => {
        return this.eventService.getEvents(action.data.eventType).pipe(
          map((data) => {
            return loadeventssuccess({ events: data });
          })
        );
      })
    )
  );

  eventsByDays$ = createEffect(() =>
    this.action$.pipe(
      ofType(LOAD_EVENTS_BY_DAYS),
      exhaustMap((action: IDaysEventStoreRequestModel) => {
        return this.eventService
          .getEventsByDays({ from: action.data.from, to: action.data.to })
          .pipe(
            map((data) => {
              return loadeventssuccess({ events: data });
            })
          );
      })
    )
  );
   
 
  changeDateEvent$ = createEffect(() =>
    this.action$.pipe(
      ofType(CHANGE_EVENT_DATE),
      exhaustMap((action: IChangeEventDateRequestModel) => {
        if (action.data.typeEvent == 0) {
          return this.addressbookService
            .changeEventDate({
              codEvent: action.data.codEvent,
              dateEvent: action.data.dateEvent,
              typeEvent: action.data.typeEvent,
            })
            .pipe(
              catchError((error) => of(`Bad Promise ok ok ok: ${error}`)),
              map((data) => {
                return changeDateEventSuccess({
                  event: {
                    codEvent: action.data.codEvent,
                    type: action.data.typeEvent,
                    date: action.data.dateEvent,
                    description: 'string',
                    eventActionResult:
                      data == null
                        ? EventActionResult.Success
                        : EventActionResult.Error,
                  },
                });
              })
            );
        } else {
          return this.eventService
            .changeEventDate({
              codEvent: action.data.codEvent,
              dateEvent: action.data.dateEvent,
              typeEvent: action.data.typeEvent,
            })
            .pipe(
              catchError((error) => of(`Bad Promise ok ok ok: ${error}`)),
              map((data) => {
                return changeDateEventSuccess({
                  event: {
                    codEvent: action.data.codEvent,
                    type: action.data.typeEvent,
                    date: action.data.dateEvent,
                    description: 'string',
                    eventActionResult:
                      data == null
                        ? EventActionResult.Success
                        : EventActionResult.Error,
                  },
                });
              })
            );
        }
      })
    )
  );

  constructor(
    private action$: Actions,
    private eventService: RecurringEventsService,
    private addressbookService: AndressbookService   
  ) {}
}
