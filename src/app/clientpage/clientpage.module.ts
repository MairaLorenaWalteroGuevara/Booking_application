import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientpagePageRoutingModule } from './clientpage-routing.module';

import { ClientpagePage } from './clientpage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientpagePageRoutingModule
  ],
  declarations: [ClientpagePage]
})
export class ClientpagePageModule {}
