import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SinginAdminPageRoutingModule } from './singin-admin-routing.module';

import { SinginAdminPage } from './singin-admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SinginAdminPageRoutingModule
  ],
  declarations: [SinginAdminPage]
})
export class SinginAdminPageModule {}
