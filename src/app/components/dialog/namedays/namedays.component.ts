import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { INamedayData } from 'src/app/models/interfaces/INamedayData';
import { AndressbookService } from 'src/app/services/andressbook.service';
import { SaintsService } from 'src/app/services/saints.service';

@Component({
  selector: 'app-namedays',

  templateUrl: './namedays.component.html',
  styleUrls: ['./namedays.component.scss']
})
export class NamedaysComponent implements OnInit {
 
  namedayData:INamedayData = {saints:[], people:[]}
  selectedSaint:  string = "";
  selectedPerson: string = "";;
  constructor(private saintsService: SaintsService, private peopleService: AndressbookService){

  }

  ngOnInit(): void {
    this.saintsService.getSaints().subscribe({
      next:(data)=>{this.namedayData.saints = data}
    });
    
    this.peopleService.getAdressBook().subscribe({
      next:(data) => {this.namedayData.people = data}
    });
  }

  

}
