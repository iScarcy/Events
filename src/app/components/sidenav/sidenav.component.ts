import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { MatDrawer } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'], 

})
export class SidenavComponent implements OnInit{
  
 
  
  constructor(private router:Router){}

  @ViewChild(MatDrawer)
  drawer!: MatDrawer;


  ngOnInit(): void {
    
     this.router.events.subscribe(() =>{
          this.drawer.close();
     });

  }




}
 
 
 