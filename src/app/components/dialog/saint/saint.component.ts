import { Component, OnInit } from '@angular/core';
import { provideMomentDateAdapter } from '@angular/material-moment-adapter';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ConfirmComponent } from '../confirm/confirm.component';
import { FormControl, Validators } from '@angular/forms';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { SaintsService } from 'src/app/services/saints.service';
 

@Component({
  selector: 'app-saint',
  providers: [
    // The locale would typically be provided on the root module of your application. We do it at
    // the component level here, due to limitations of our example generation script.
   // { provide: DatePipe },
    { provide: MAT_DATE_LOCALE, useValue: 'it-IT' },
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {floatLabel: 'always'}},
    // Moment can be provided globally to your app by adding `provideMomentDateAdapter`
    // to your app config. We provide it at the component level here, due to limitations
    // of our example generation script.
    provideMomentDateAdapter(undefined, {useUtc: true}),
  ],   
  templateUrl: './saint.component.html',
  styleUrls: ['./saint.component.scss']
})
export class SaintComponent implements OnInit{
  
  constructor(private dialog: MatDialog, private ss:SaintsService){

  }

  FC_nome = new FormControl('', [
    Validators.required,
    Validators.minLength(4),
    Validators.maxLength(50),
  ]);

  FC_data = new FormControl('',[
    Validators.required
  ])
  
  ngOnInit(): void {
   
  }

  save(){
    this.ss.addSaint({description: this.FC_nome.value!, date: new Date(this.FC_data.value!)}).subscribe({
      complete:()=>{this.dialog.closeAll();}
    })
    
  }
  
  getErrorMessage(): string {
    if (this.FC_nome.hasError('required')) {
      return 'Il nome è obbligatorio';
    }

    if (this.FC_nome.hasError('minlength')) {
      return 'Il nome deve avere almeno 4 caratteri';
    }
    if (this.FC_nome.hasError('maxlength')) {
      return 'Il nome può avere al massimo 15 caratteri';
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
      data: {message: "Confermi la creazione di un nuovo santo ?", callback: () => this.save()}    
    }
  
    if(this.FC_nome.valid && this.FC_data.valid){
      let dialogRef = this.dialog.open(ConfirmComponent, config);
    }
          
  }

}
