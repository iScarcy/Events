import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SaintsComponent } from './components/saints/saints.component';

const routes: Routes = [
  {path:"saints", component: SaintsComponent},
  {path:":eventType", component: MainContentComponent},
  {path:"", component: MainContentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
