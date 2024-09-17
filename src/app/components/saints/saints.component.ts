import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppStateModel } from 'src/app/shared/store/Global/AppState.model';
import { loadsaints } from 'src/app/shared/store/Saints/saints.actions';
import { ISaintsModel } from 'src/app/shared/store/Saints/saints.model';

@Component({
  selector: 'app-saints',
  templateUrl: './saints.component.html',
  styleUrls: ['./saints.component.scss']
})
export class SaintsComponent implements OnInit {
  
  saints$ = new Observable<ISaintsModel>();

  constructor(private store: Store<AppStateModel>){

  }

  ngOnInit(): void {
    this.store.dispatch(loadsaints());

    this.saints$ = this.store.select("saints");
  }

}
