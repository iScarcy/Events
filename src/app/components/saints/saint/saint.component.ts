import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { ISaint } from 'src/app/models/interfaces/ISaint';
 



@Component({
  selector: 'ele-saint',
  templateUrl: './saint.component.html',
  providers: [
    // The locale would typically be provided on the root module of your application. We do it at
    // the component level here, due to limitations of our example generation script.
    { provide: DatePipe },
    { provide: MAT_DATE_LOCALE, useValue: 'it-IT' },
 
  ],
  styleUrls: ['./saint.component.scss']
})
export class SaintComponent {

  @Input() saint:ISaint = {
    id: 0,
    description: '',
    date: new Date()
  }

  constructor(private _datepipe: DatePipe){}

}
