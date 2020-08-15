
import { CalendarComponent } from 'ion2-calendar';
import { Component, ViewChild, OnInit, } from '@angular/core';
import { AlertController, NavController, } from '@ionic/angular';
import { PostProvider } from 'src/providers/post-provider';


// Base calendars forms:
// 1. https://devdactic.com/ionic-calendar-app/
// 2. https://devdactic.com/ionic-4-calendar-app/
// 2. https://blog.jamibot.com/ionic-4-custom-calendar
//  solution to get the date from the angular calendar and create and event
// 3. https://www.youtube.com/watch?v=UVOV2hTkkvE
// 4. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toDateString  ( set and get variables from the calendar)
// 5. https://ionicframework.com/docs/v3/api/util/Events/





@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {
  

  // *******************Variables for calendar****////
  isToday: boolean;

  calendar = {
    mode: 'month',
    currentDate: new Date()
  };

  viewTitle: any;
  // ******************************************* /

  // ******************* Event variables********//

  appoinments: any = [];
  eventSource: any = [];




  // Date 
  selectedDate = new Date();


  @ViewChild(CalendarComponent) myCal: CalendarComponent;

  constructor(private postPvdr: PostProvider, public navCtrl: NavController, public alertCtrl: AlertController
  ) {

  }

  // lige cycle methods to run the methods 
  ngOnInit() {
    this.loadBookings();
    this.loadappoinments();
    // this.myCal.loadEvents(); 
  }

  ionViewDidEnter() {

    this.loadBookings();
    this.loadappoinments();

  }

  // this method take the day selected 
  onTimeSelected(ev) {

    this.selectedDate = ev.selectedTime;
  }

  // This is the code to set time
  onCurrentDateChanged(event: Date) {
    let today = new Date();
    today.setHours(0, 0, 0, 0);
    event.setHours(0, 0, 0, 0);
    this.isToday = today.getTime() === event.getTime();
    //   }
  }


  // this method change the title to display the name of the month
  onViewTitleChanged(title) {
    this.viewTitle = title;

  }

  // this funtion disable the sundays and the days before today 
  markDisabled = (date: Date) => {
    let current = new Date();
    current.setHours(0, 0, 0);
    return (date < current || date.getDay() == 0);
  }


  // this method is a request to get the bookings from the data base 
  loadBookings() {
    return new Promise(resolve => {
      const body = {
        aksi: 'getbookings',
      };

      this.postPvdr.postData(body, 'proses-api.php').subscribe(data => {
        console.log(data);
        for (const booking of data.result) {

          let date = booking.booking_date;
          console.log(date);
          let hour = booking.booking_hour;
          console.log(hour);
          this.appoinments.push(booking);

        }
        resolve(true);

      });
    });

  }

  // this method get the perfect format for date and hour to print the event in the calendar and the calendar label. 
  loadappoinments() {
    let events = [];
    let appoinments = this.appoinments;

    for (let i = 0; i < appoinments.length; i++) {
      let bookedday = appoinments[i].booking_date;
      const startday = new Date(bookedday);
      const startMinute = parseInt(appoinments[i].booking_hour) - 1;
      const endMinute = parseInt(appoinments[i].booking_hour);
      console.log(bookedday);
      console.log(startday);
      console.log(startMinute);
      startMinute
      // if(temp.indexOf(bookings[i].booking_date) == -1){
      //     temp.push(bookings[i].booking_date);
      const startTime = new Date(Date.UTC(
        startday.getUTCFullYear(),
        startday.getUTCMonth(),
        startday.getUTCDate(),
        startday.getUTCHours() + startMinute
      )
      );
      console.log(startTime);
      const endTime = new Date(Date.UTC(
        startday.getUTCFullYear(),
        startday.getUTCMonth(),
        startday.getUTCDate(),
        startday.getUTCHours() + endMinute,
      )
      );

      events.push({
        client: appoinments[i].project_id,
        clientid: appoinments[i].client_id,
        title: appoinments[i].client_fullname + ' | Cl_id:' + appoinments[i].client_id + ' | P_id:' + appoinments[i].project_id,
        startTime: startTime,
        endTime: endTime,
        bookinghour: appoinments[i].booking_hour,
        bookingoption: appoinments[i].booking_option,
        comment: appoinments[i].comment,
        status: appoinments[i].status,
        allDay: false,
      });
    }

    this.eventSource = [];
    setTimeout(() => {
      this.eventSource = events;
    });
    // this.eventSource= events;

    console.log(this.eventSource);
    //this.myCal.loadEvents();
  }



}
