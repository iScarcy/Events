import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
 
import { EventsComponent } from '../dialog/events/events.component';
import { NamedaysComponent } from '../dialog/namedays/namedays.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit{

    @Output() toogleSidenav = new EventEmitter<void>();

    constructor(private dialog: MatDialog){}

    ngOnInit(): void {
      
    }


    
    openNamedaysDialog(): void {
     
      let config: MatDialogConfig = {
        panelClass: "dialog-responsive",
        disableClose: true        
      }
      let dialogRef = this.dialog.open(NamedaysComponent, config);
    
    }

    openEventsDialog(): void {
     
      let config: MatDialogConfig = {
        panelClass: "dialog-responsive",
        disableClose: true        
      }
      let dialogRef = this.dialog.open(EventsComponent, config);
    
    }
}
