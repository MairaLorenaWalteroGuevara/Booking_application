import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalendarPageRoutingModule } from './calendar-routing.module';
import { NgCalendarModule } from 'ionic2-calendar';
import { RouterModule } from '@angular/router';
import { CalendarPage } from './calendar.page';
import { DatePickerModule } from 'ionic4-date-picker';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalendarPageRoutingModule,
    DatePickerModule,
    RouterModule.forChild([
      {
        path:'',
        component:CalendarPage
      }
    ]),
    
    NgCalendarModule
  ],
  declarations: [CalendarPage]

})
export class CalendarPageModule {}
