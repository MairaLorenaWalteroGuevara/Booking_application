import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowclientPage } from './showclient.page';

const routes: Routes = [
  {
    path: '',
    component: ShowclientPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowclientPageRoutingModule {}
