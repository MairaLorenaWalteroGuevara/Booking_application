import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientpagePage } from './clientpage.page';

const routes: Routes = [
  {
    path: '',
    component: ClientpagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientpagePageRoutingModule {}
