import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SinginAdminPage } from './singin-admin.page';

const routes: Routes = [
  {
    path: '',
    component: SinginAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SinginAdminPageRoutingModule {}
