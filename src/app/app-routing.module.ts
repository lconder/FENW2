import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DummyComponent} from "./dummy/dummy.component";

const routes: Routes = [
  { path: 'home', component: DummyComponent},
  { path: 'preferences', component: DummyComponent},
  { path: 'records', component: DummyComponent},
  { path: 'game', component: DummyComponent},
  { path: 'login', component: DummyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
