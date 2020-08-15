import { Component, AfterViewInit, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';




@Component({
  selector: 'app-event-modal',
  templateUrl: './event-modal.page.html',
})
export class EventModalPage  {


  calendar = {
    mode: 'month',
    currentDate: new Date()
  };
  viewTitle: string;
  
  event = {
    title: '',
    desc: '',
    startTime: null,
    endTime: '',
    allDay: true
  };
  



  constructor(private modalCtrl: ModalController) {
   }


  


}
