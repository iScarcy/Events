import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppStateModel } from 'src/app/shared/store/Global/AppState.model';
import { loadsaints } from 'src/app/shared/store/Saints/saints.actions';
import { ISaintsModel } from 'src/app/shared/store/Saints/saints.model';
import { SaintDialogComponent } from '../dialog/saint/saint.component';

@Component({
  selector: 'app-saints',
  templateUrl: './saints.component.html',
  styleUrls: ['./saints.component.scss']
})
export class SaintsComponent implements OnInit {
  
  saints$ = new Observable<ISaintsModel>();

  constructor(private store: Store<AppStateModel>, private dialog: MatDialog){

  }

  ngOnInit(): void {
    this.store.dispatch(loadsaints());

    this.saints$ = this.store.select("saints");
  }

  openSaintDialog(): void {
     
    let config: MatDialogConfig = {
      panelClass: "dialog-responsive",
      disableClose: true        
    }
    let dialogRef = this.dialog.open(SaintDialogComponent, config);
  
  }
}
