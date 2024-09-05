import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ConfirmComponent } from '../confirm/confirm.component';
import { provideMomentDateAdapter } from '@angular/material-moment-adapter';
import { MAT_DATE_LOCALE } from '@angular/material/core';

@Component({
  selector: 'app-events',
  providers: [
    // The locale would typically be provided on the root module of your application. We do it at
    // the component level here, due to limitations of our example generation script.
   // { provide: DatePipe },
    { provide: MAT_DATE_LOCALE, useValue: 'it-IT' },

    // Moment can be provided globally to your app by adding `provideMomentDateAdapter`
    // to your app config. We provide it at the component level here, due to limitations
    // of our example generation script.
    provideMomentDateAdapter(undefined, {useUtc: true}),
  ], 
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent {
  
  constructor(private dialog: MatDialog){

  }

  FC_eventDescr = new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(40),
  ]);

  FC_data = new FormControl('',[
      Validators.required
  ])

  save(){
    console.log("nuovo eventone");
    this.dialog.closeAll();
  }

  getErrorMessage(): string {
    if (this.FC_eventDescr.hasError('required')) {
      return 'La descrizione è obbligatoria';
    }

    if (this.FC_eventDescr.hasError('minlength')) {
      return 'La descrizione deve avere almeno 10 caratteri';
    }
    if (this.FC_eventDescr.hasError('maxlength')) {
      return 'La descrizione può avere al massimo 400 caratteri';
    }

    return '';
  }

  getErrorDataMessage(): string {
    if (this.FC_data.hasError('required')) {
      return 'La data è obbligatoria';
    }
 
    return '';
  }

  openConfirmDialog(): void {
    
    let config: MatDialogConfig = {
      panelClass: "dialog-responsive",
      disableClose: true,
      data: {message: "Confermi la creazione di un nuovo evento ?", callback: () => this.save()}    
    }
  
    if(this.FC_eventDescr.valid && this.FC_data.valid){
      let dialogRef = this.dialog.open(ConfirmComponent, config);
    }
          
  }

}
