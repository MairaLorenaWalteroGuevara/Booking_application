import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { SignupPageRoutingModule } from './signup-routing.module';

import { SignupPage } from './signup.page';
import { RouterModule } from '@angular/router';
import {NgCalendarModule} from 'ionic2-calendar';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgCalendarModule,
    IonicModule,
    ExploreContainerComponentModule,
    SignupPageRoutingModule
  ],
  declarations: [SignupPage]
})
export class SignupPageModule {}
