import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './default/default.component';
import { AddComponent } from './add/add.component';
import { ShowComponent } from './show/show.component';
import { EditComponent } from './edit/edit.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: 'add', component: AddComponent },
  { path: 'contact/:id', component: ShowComponent },
  { path: 'edit/:id', component: EditComponent },
  { path: '', component: DefaultComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
