import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { INamedayData } from 'src/app/models/interfaces/INamedayData';
import { AndressbookService } from 'src/app/services/andressbook.service';
import { SaintsService } from 'src/app/services/saints.service';
import { ConfirmComponent } from '../confirm/confirm.component';
import { RecurringEventsService } from 'src/app/services/recurring-events.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-namedays',

  templateUrl: './namedays.component.html',
  styleUrls: ['./namedays.component.scss']
})
export class NamedaysComponent implements OnInit {
 
  namedayData:INamedayData = {saints:[], people:[]}
 
 
  constructor(private dialog: MatDialog,
    private saintsService: SaintsService, 
    private peopleService: AndressbookService,
    private eventsService: RecurringEventsService
  ){

  }

  FC_saint = new FormControl('',[
    Validators.required
  ])
  
  FC_person = new FormControl('',[
    Validators.required
  ])
  

  getErrorMessage(): string {
    if (this.FC_saint.hasError('required')) {
      return 'Il nome del santo è obbligatorio';
    }

    if (this.FC_person.hasError('required')) {
      return 'Il nome della persona è obbligatoria';
    }

     
    return '';
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
    
    if(this.FC_saint.valid && this.FC_person.valid){
      let dialogRef = this.dialog.open(ConfirmComponent, config);
    }
         
  }

  save(){
    this.eventsService.addNameDay({objID: this.FC_person.value!, idSaint: Number.parseInt(this.FC_saint.value!)}).subscribe({
      complete:()=>{this.dialog.closeAll();}
    })
    
    
  }
}
