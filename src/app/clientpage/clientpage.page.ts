import { Component, OnInit } from '@angular/core';
import { ToastController, NavController, ModalController, AlertController, Platform } from '@ionic/angular';
import { PostProvider } from '../../providers/post-provider';
import { Router } from '@angular/router';
import { Storage } from '@ionic/Storage';
import { BookingPage } from '../booking/booking.page';


// data inforamtion about how to change from ISO format to Date https://www.codegrepper.com/code-examples/lua/format+data+with+moment

@Component({
  selector: 'app-clientpage',
  templateUrl: './clientpage.page.html',
  styleUrls: ['./clientpage.page.scss'],
})
export class ClientpagePage implements OnInit {


// ********************* database connection *****/
  anchor: any;
  anchor1: any;
  username: string;
  fullname: string;
  id:any;

  clients: any = [];
  disableButton = false;



  //  *************** booking information */ 
  apoinmentday = null; 

  event = {
    client: this.fullname,
    id: this.id,
    bookingdate: null,
    bookinghour: '',
    bookingoption:'',
    comment:'',
    status:'',
    allDay: true
    
  };
  

  constructor(
    private router: Router,
  	private postPvdr: PostProvider,
    private storage: Storage,
    public toastCtrl: ToastController,public navCtrl: NavController, public alertCtrl: AlertController,  private modalCtrl: ModalController
  ) { 
   
    
  }

  ngOnInit() {
    this.loadClients();
    
  }

 
// life cycle event to run the methods 
  ionViewWillEnter(){
    this.storage.get('session_storage').then((res)=>{
      this.anchor = res;
      this.username = this.anchor.username;
      this.fullname = this.anchor.fullname;
      this.id = this.anchor.user_id; 
      console.log(res);
    });

   

  }


  ionViewDidEnter(){

    this.loadClients();
    
  }

 //-----------------------------------------------------------------


// this is a method to close the page and go back to the tab number 2 
// the toast is a funtion to show up like a pop up that the logout was succesful
  async prosesLogout(){
    this.storage.clear();
    this.router.navigate(['tabs/tab2']);
    const toast = await this.toastCtrl.create({
        message: 'logout succesful',
        duration: 3000
      });
    toast.present();
  }

  // ******************* BOOKING ***********************

  // this method open the booking in a small window base in: https://devdactic.com/ionic-5-calendar-modal/

  async openCalModal() {
    const modal = await this.modalCtrl.create({
      component: BookingPage,
     // cssClass: 'cal-modal',
     componentProps: {
      clientid: this.id,
      fullname: this.fullname
    },
      backdropDismiss: false
    });
    await modal.present();

    modal.onDidDismiss().then((result)=> {
      let event = result.data.event;
      if(event.allDay){
         let start = event.bookingdate.toDate(); 
         this.apoinmentday = start.toDateString();
        this.event.bookingdate = event.bookingdate;
        this.event.bookinghour = event.bookinghour;
        this.event.bookingoption = event.bookingoption;
        this.event.comment = event.comment; 
        this.event.status = event.status; 
      }
  //    this.eventSource.push(result.data.event);
      this.disableButton = true;
      this.prosesbooking();
    })
    
  }

  // ********************  Save the booking in DATABASE ********************

  async prosesbooking(){
    // validation done
  
      return new Promise(resolve =>{
        
        let body = {
        aksi: 'booking',
        client_id : this.id,
        client_fullname : this.fullname,
        booking_date : this.event.bookingdate,
        booking_hour : this.event.bookinghour,
        booking_option : this.event.bookingoption,
        comment : this.event.comment,
      };
  // name from the table: name of the variable 
  // let body have to be in order with the values in the table 
        this.postPvdr.postData(body, 'proses-api.php').subscribe(async data => {
        var alertpesan = data.msg;
        if(data.success){
          //  this.storage.set('session_storage', data.result);
           const toast = await this.toastCtrl.create({
                      message: 'Booking succesful',
                      duration: 3000
                    });
           toast.present();
                          }else{
                            const toast = await this.toastCtrl.create({
                              message: alertpesan,
                              duration: 3000
          });
                            toast.present();
        }
        });
      });
    }

// this method get the information from the DataBase 

 loadClients(){
  return new Promise(resolve => {
    let body = {
      client_id:  parseInt(this.id),
      aksi : 'getproject',
      
    };
    this.postPvdr.postData(body, 'proses-api.php').subscribe(data => {
     for(let client of data.result){
       this.event.bookingdate = client.booking_date;
       this.apoinmentday = client.booking_date;
        this.event.bookinghour = client.booking_hour;
        this.event.comment = client.comment;
        this.event.status = client.pro_status;
       this.clients.push(client);
       console.log(this.clients);

     } 
     resolve(true);
      // this.anchor1 = data; 
      // this.event.bookingdate = this.anchor1.booking_date;
      // this.event.bookinghour = this.anchor1.booking_hour;
      // this.event.comment = this.anchor1.comment;
      // this.event.status = this.anchor1.status;

     });
  //   this. ionViewWillEnter();
    });
    }
}


