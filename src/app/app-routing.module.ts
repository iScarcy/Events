import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from './components/main-content/main-content.component';

const routes: Routes = [
  {path:":eventType", component: MainContentComponent},
  {path:"", component: MainContentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
