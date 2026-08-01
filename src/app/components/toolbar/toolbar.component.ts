import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
 
import { EventsComponent } from '../dialog/events/events.component';
 
import { saintManagment } from 'src/app/app.constant';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit{

    @Output() toogleSidenav = new EventEmitter<void>();

    constructor(private dialog: MatDialog){}

    saintManagmentUrl: string = saintManagment; 

    ngOnInit(): void {
      
    }


    
   

    openEventsDialog(): void {
     
      let config: MatDialogConfig = {
        panelClass: "dialog-responsive",
        disableClose: true        
      }
      let dialogRef = this.dialog.open(EventsComponent, config);
    
    }
}
