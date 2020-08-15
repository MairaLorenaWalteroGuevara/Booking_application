import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowclientPageRoutingModule } from './showclient-routing.module';

import { ShowclientPage } from './showclient.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowclientPageRoutingModule
  ],
  declarations: [ShowclientPage]
})
export class ShowclientPageModule {}
