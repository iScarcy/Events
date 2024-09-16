import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { INamedayData } from 'src/app/models/interfaces/INamedayData';
import { AndressbookService } from 'src/app/services/andressbook.service';
import { SaintsService } from 'src/app/services/saints.service';
import { ConfirmComponent } from '../confirm/confirm.component';
import { RecurringEventsService } from 'src/app/services/recurring-events.service';

@Component({
  selector: 'app-namedays',

  templateUrl: './namedays.component.html',
  styleUrls: ['./namedays.component.scss']
})
export class NamedaysComponent implements OnInit {
 
  namedayData:INamedayData = {saints:[], people:[]}
  selectedSaint:  string = "";
  selectedPerson: string = "";;
 
  constructor(private dialog: MatDialog,
    private saintsService: SaintsService, 
    private peopleService: AndressbookService,
    private eventsService: RecurringEventsService
  ){

  }


  

  ngOnInit(): void {
    this.saintsService.getSaints().subscribe({
      next:(data)=>{this.namedayData.saints = data}
    });
    
    this.peopleService.getAdressBook().subscribe({
      next:(data) => {this.namedayData.people = data}
    });
  }

  openConfirmDialog(): void {
    
    let config: MatDialogConfig = {
      panelClass: "dialog-responsive",
      disableClose: true,
      data: {message: "Confermi la creazione di un nuovo onomastico ?", callback: () => this.save()}    
    }
    this.dialog.open(ConfirmComponent, config);
   /* if(this.FC_nome.valid && this.FC_data.valid){
      let dialogRef = this.dialog.open(ConfirmComponent, config);
    }
     */     
  }

  save(){
    this.eventsService.addNameDay({objID: this.selectedPerson, idSaint: Number.parseInt(this.selectedSaint)}).subscribe({
      complete:()=>{this.dialog.closeAll();}
    })
    
    
  }
}
