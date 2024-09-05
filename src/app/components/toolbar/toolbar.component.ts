import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SaintComponent } from '../dialog/saint/saint.component';

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

    openSaintDialog(): void {
     
      let config: MatDialogConfig = {
        panelClass: "dialog-responsive",
        disableClose: true        
      }

      let dialogRef = this.dialog.open(SaintComponent, config)
      .afterClosed().subscribe(
        {complete:() => console.log("chiuso")}
      )
      
    
    }
}
