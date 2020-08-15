import { Component, AfterViewInit, OnInit, Input, ViewChild } from '@angular/core';
import { CalendarModule, CalendarModalOptions, CalendarResult, CalendarComponent } from 'ion2-calendar';
import { AlertController, NavController, ModalController, NavParams, ToastController, Platform } from '@ionic/angular';
import * as moment from 'moment';

import { formatDate } from '@angular/common';
import { EventModalPage } from '../event-modal/event-modal.page';
import { PostProvider } from 'src/providers/post-provider';
import { ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/Storage';








// Base calendars forms: 
//1. https://devdactic.com/ionic-calendar-app/
// 2. https://devdactic.com/ionic-4-calendar-app/
//2. https://blog.jamibot.com/ionic-4-custom-calendar
//  solution to get the date from the angular calendar and create and event 
// 3. https://www.youtube.com/watch?v=UVOV2hTkkvE
// 4. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toDateString  ( set and get variables from the calendar)
// 5. https://ionicframework.com/docs/v3/api/util/Events/ 


@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
})
export class BookingPage implements OnInit, AfterViewInit {
  [x: string]: any;



  // **************    Event variables 
  found: boolean = false;
  anchore: any;
  bookings: any = [];
  produce = [];
  // eventSource=[]; 
  //1. 
  //selectedDate = new Date();

  // 2. Array of option of the hour to choose// 
  optionhour = [];
  hours: any = [
    moment('0900', 'hmm').format('HH:mm:ss'),
    moment('1000', 'hmm').format('HH:mm:ss'),
    moment('1100', 'hmm').format('HH:mm:ss'),
    moment('1200', 'hmm').format('HH:mm:ss')
  ];

  // 3. variable of the input choosen 
  // selectedhour: any;

  options: any = [
    'website',
    'app',
    'networking',
    'other'];

  // selectedoption:string='';



  //??????????????????????????????????????????? variables for examples 

  day: any;
  hour: any;
  checkingday: null;


  //??????????????????????????????????????????????????????????????/

  event = {
    client: '',
    clientid: '',
    bookingdate: null,
    bookinghour: '',
    bookingoption: '',
    comment: '',
    status: 'new',
    allDay: true

  };


  // ***************** calendar variables

  eventSource = [];
  disabledays = [];

  isToday: boolean;

  calendar = {
    mode: 'month',
    currentDate: new Date()
  };



  @ViewChild(CalendarComponent) myCal: CalendarComponent;

  // show the name of  month of the calendar 
  viewTitle: any;

  // ***************** more variables 
  // this funtion is going to help in the movile view follow this video
  // https://www.youtube.com/watch?v=_hVdPEmbwA0

  modalReady = false;

  // solution how to get information from the other page inside of the ionic modal 
  // https://forum.ionicframework.com/t/how-to-pass-data-to-modal-ionic-2/82323/10
  // https://ionicframework.com/docs/api/modal
  // https://forum.ionicframework.com/t/ionic-4-passing-a-ts-variable-to-a-html-page/164417/5

  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    private PostPvdr: PostProvider,
    public toastCtrl: ToastController,
    private storage: Storage,
    public params: NavParams,
    private modalCtrl: ModalController) {
    this.event.client = this.params.get('fullname');
    this.event.clientid = this.params.get('clientid');

    //this.loadBookings();
    this.find_duplicate_in_array();

    this.loaddisabledays();
    
  }

  // life cycle ionic events to run the methods 
  ngOnInit() {
    this.loadBookings();
    this.find_duplicate_in_array();
    this.loaddisabledays();

  }

  ionViewDidEnter() {
    this.loadBookings();
    this.find_duplicate_in_array();
    this.loaddisabledays();

  }

  

  // disable sundays and the days before today
  markDisabled = (date: Date) => {
    var current = new Date();
    current.setHours(0, 0, 0);
    return (date < this.calendar.currentDate || date.getDay() === 0);
  }

  // this is a lifecycle funtion, this is using when the component is animitating into view
  // in this case our title is month of the calendar
  onViewTitleChanged(title) {
    this.viewTitle = title;
  }
  // change and mark the current date 
  // ----------------ORIGINAL-----------------
  //  onCurrentDateChanged(event:Date){
  //   var today = new Date();

  //  today.setHours(0, 0, 0, 0);
  //  event.setHours(0, 0, 0, 0);
  //  this.isToday = today.getTime() === event.getTime();
  //  console.log(today);
  // console.log(this.isToday);
  //  } 
  //------------------------------------------------------



  // CONECTION OF THE SMALL PAGE 
  // funtion to open the window 

  ngAfterViewInit() {
    setTimeout(() => {
      this.modalReady = true;
    }, 0);
  }


  // button to close the small window 
  close() {
    this.modalCtrl.dismiss();
  }


  // Create the event 

  // 1. select the date in the calendar to create the Event 
  //  How to change the date into a ISO date to sent the correct date format to database https://momentjs.com/docs/#/parsing/date/
  //--------------------- ORIGINAL --------------------
  //   onTimeSelected(ev){

  //   //  this.event.bookingdate = new Date(ev.selectedTime);

  //     var day = new Date(ev.selectedTime);
  //   //  console.log(day);
  //     this.event.bookingdate = moment(day , 'YYYY-MM -DD');
  //    console.log(this.event.bookingdate);
  // }
  // ------------------------------------------------------------

  onTimeSelected(ev) {

    //  this.event.bookingdate = new Date(ev.selectedTime);
    var disabledays = this.eventSource;
    console.log(disabledays);

    var day = ev.selectedTime;

    this.checkingday = day.toLocaleDateString();

    // var checkingday = checkingday1; 
    console.log(this.checkingday);



    for (var i = 0; i < disabledays.length; i++) {

      var disableday = disabledays[i].startTime;
      //  var disableday= disabledays[i].toLocaleDateString();
      var disableday1 = disableday.toLocaleDateString();
      console.log(disableday1);
      if (this.checkingday === disableday1) {
        alert('this day is not avalible');
      } else {
        //  var day1 = new Date(ev.selectedTime);

        this.event.bookingdate = moment(day, 'YYYY-MM -DD');
        console.log(day);
        console.log(this.event.bookingdate);
      }
    }
  }

// request to get the booking from the database 

  loadBookings() {
    return new Promise(resolve => {
      let body = {
        aksi: 'getbookings',
      };

      this.PostPvdr.postData(body, 'proses-api.php').subscribe(data => {
        console.log(data);
        for (let booking of data.result) {

          var date = booking.booking_date;
          console.log(date);
          var hour = booking.booking_hour;
          console.log(hour);
          this.bookings.push(booking);

          if (date === this.bookings.booking_date && hour === this.booking.booking_hour) {
            console.log(date);
            console.log(hour);

          }
        }
        resolve(true);

      });
    });

  }

  // close the modal and send the event to the client page 
  addNewEvent() {

    this.modalCtrl.dismiss({ event: this.event });
  }


  // this method get the days that have 4  bookings and change into the correct format and save into the eventsource to be display on the calendar 

  loaddisabledays() {
    var events1 = [];
    var disabledays = this.disabledays;

    for (var i = 0; i < disabledays.length; i++) {
      var bookedday = disabledays[i];
      let startday = new Date(bookedday);
      console.log(bookedday);
      console.log(startday);
      // if(temp.indexOf(bookings[i].booking_date) == -1){
      //     temp.push(bookings[i].booking_date);
      let startTime = new Date(Date.UTC(
        startday.getUTCFullYear(),
        startday.getUTCMonth(),
        startday.getUTCDate()
      )
      );
      let endTime = new Date(Date.UTC(
        startday.getUTCFullYear(),
        startday.getUTCMonth(),
        startday.getUTCDate() + 1
      )
      );
      events1.push({
        startTime: startTime,
        endTime: endTime,
        allDay: true,
      });
    }
    this.eventSource = events1;
    // this.myCal.loadEvents();
    console.log(this.eventSource);
  }

  // this method process the bookings and in the end return an array with the days that have been repeated 4 times 
  //https://www.w3resource.com/javascript-exercises/javascript-array-exercise-20.php
  // https://stackoverflow.com/questions/38858488/how-to-get-the-count-of-duplicate-value-assigned-to-same-key-in-json-array-jav

  find_duplicate_in_array() {
    var bookings = this.bookings;
    console.log(bookings);

    var temp = [];
    //var produce = [];



    for (var i = 0; i < bookings.length; i++) {
      if (temp.indexOf(bookings[i].booking_date) == -1) {
        temp.push(bookings[i].booking_date);
        console.log(temp);
        var _data = {
          name: null,
          count: null
        };
        _data.name = bookings[i].booking_date;
        _data.count = 1;

        this.produce.push(_data);
        console.log(this.produce);
      } else {
        for (var j = 0; j < this.produce.length; j++) {
          if (this.produce[j].name === this.bookings[i].booking_date) {
            var _x = parseInt(this.produce[j].count) + 1;
            this.produce[j].count = _x;
          }
        }
      }

    }
    for (var j = 0; j < this.produce.length; j++) {
      if (this.produce[j].count >= 4) {
        this.disabledays.push(this.produce[j].name);
        console.log(this.disabledays);
      }
    }
    return this.disabledays;
  }


  // ___________________________FINISH CODE - START POSIBLE CODES____
  // houroptions(){

  //     var checkingday = this.checkingday;


  //     // var dateData = checkingday1.split('/');
  //     //   var day = dateData [0];
  //     //   var month = dateData [1];
  //     //   var year = dateData [2];
  //     //   var dateFormated = year + "-" + month + "-" + day;

  // //    var checkingday = moment(checkingday1,'YYYY-MM -DD'); 

  //     var bookings = this.bookings; 
  //     console.log(bookings);
  //     console.log(checkingday);



  //     for( let i = 0 ; i < bookings.length ;  i++ ){

  //      var bookday= bookings[i].booking_date;
  //     //  var disableday= disabledays[i].toLocaleDateString();
  //       var disableday1= new Date(bookday).toLocaleDateString();
  //       console.log (disableday1);
  //       var bookhour1 = bookings[i].booking_hour;
  //      // var bookhour1= moment( bookhour, 'hmm').format('HH:mm:ss')
  //       console.log(bookhour1);
  //       if(this.checkingday === disableday1){
  //     //    alert('this day has an opions invalides ');
  //         for( let i = 0 ; i < this.hours.length ;  i++ ){
  //           var hour = this.hours[i];
  //           console.log(hour);
  //           if (hour === bookhour1){
  //             this.optionhour.push(hour);
  //             console.log(this.optionhour);
  //           }
  //         }
  //       }else{
  //     //    alert('all options are avalible  ');
  //       }
  //     }
  //     alert('finish to check');
  //     return this.optionhour;
  //   }




}




