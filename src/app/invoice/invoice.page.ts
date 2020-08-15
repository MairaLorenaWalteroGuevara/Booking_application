//import { pdfMake } from '@types/pdfmakepdfmake/build/pdfmake';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PostProvider } from '../../providers/post-provider';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController, Platform, ToastController, AlertController, ModalController } from '@ionic/angular';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { File } from '@ionic-native/file/ngx';
//import pdfMake from 'pdfmake/build/pdfmake';
import * as pdfMake from 'pdfmake/build/pdfmake.js';
//import pdfFonts from 'pdfmake/build/vfs_fonts';
//pdfMake.vfs = pdfFonts.pdfMake ? pdfFonts.pdfMake.vfs : pdfMake.vfs;
import * as pdfFonts from 'pdfmake/build/vfs_fonts.js';
(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;
//pdfMake.vfs = pdfFonts.pdfMake.vfs;
import * as jsPDF from 'jspdf';
import * as html2pdf from 'html2pdf.js';
import * as moment from 'moment';
//import { CurrencyPipe } from '@angular/common';

// import * as html2canvas from 'html2canvas';
//  import { createPdf } from "pdfmake/build/pdfmake";
// import * as v from "pdfmake/build/vfs_fonts";
// import * as jspdf from 'jspdf';
//import { Item } from '../../../bower_components/ionic/core/src/components/item/item';


// AFTER VIEW INIT https://angular.io/api/core/AfterViewInit

// pdf tutorial https://www.youtube.com/watch?v=AdoPkp4KzFA ; https://www.youtube.com/watch?v=7LoWmGMB7e4

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.page.html',
  styleUrls: ['./invoice.page.scss'],
})
export class InvoicePage implements OnInit {

  //@ViewChild('htmlData') htmlData: ElementRef;
  // pdfMake = require('pdfmake/build/pdfmake.js');
  // pdfFonts = require('pdfmake/build/vfs_fonts.js');
  // pdfMake.vfs = pdfFonts.pdfMake.vfs; 


  // variables in the invoice// 
  ninvoice = '0001';
  today = new Date().toDateString();
  totay2 = this.today;
  today1 = moment(this.today, 'YYYY-MM -DD');


  status: '';
  options = [
    'PAID',
    'NO PAID'
  ];

  // client information
  client_fullname: '';
  client_id: number;
  project_id: number;

  companies: any = [];
  client: '';
  email: '';
  company: '';
  address: '';
  phone: '';
  // status: '';

  data: any;

  // company information 
  namephone: number;
  info = {
    name: '',
    name_company: '',
    name_address: '',
    name_phone: this.namephone,
    bookingdate: null,
    bookinghour: '',
    bookingoption: '',
    comment: '',
    status: '',
    allDay: true
  };


  // invoice information 
  items = [];

  item1: string;
  quantity1: number;
  price1: number;
  price2: '';
  itemtotal: any;
  subtotal: any;
  total: any;
  row: any;


  constructor(
    public toastCtrl: ToastController, public alertCtrl: AlertController, private modalCtrl: ModalController, private route: ActivatedRoute, private router: Router, private postPvdr: PostProvider, private actRoute: ActivatedRoute, public navCtrl: NavController, private plt: Platform, private file: File, private fileOpener: FileOpener) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.client;
        console.log(this.data);
      }
    });
    this.loadCompany();
  }

  // life cycle events 
  ngOnInit() {
    this.loadclients();
    //   this.loadCompany();
  }

  ionViewDidEnter() {
    this.loadclients();
    // this.loadCompany();

  }

  // this method save the client variables in a local variables 
  loadclients() {
    this.client_id = this.data.user_id;
    console.log(this.client_id);
    this.client_fullname = this.data.fullname;
    this.email = this.data.u_email;
    this.company = this.data.u_companyname;
    this.address = this.data.u_address;
    this.phone = this.data.u_phone;
    //  this.status = this.data.pro_status;
  }


  // this method create the invoice, add the items into an items array to be displayed, and the maths to calculate the total
  additem(item1, quantity1, price1) {
    console.log(item1);

    console.log(quantity1);
    console.log(price1);


    const item = {
      item: item1,
      quantity: quantity1,
      price: price1
    };
    this.items.push(item);

    console.log(this.items);
    var subtotal = 0;
    var total = 0.00;
    var to = 0;
    this.items.forEach(item => {
      var a = item.price * item.quantity;
      this.subtotal = a;
      console.log(a);
      to += a;
      this.total = '€' + to;
      console.log(this.total);
    });

    console.log(subtotal);
    console.log(total);

  }

  // --------------  PDF funtionality  ----------------------------
  // I learn how to print the pdf following this video https://www.youtube.com/watch?v=7LoWmGMB7e4&t=4s and my code is the code of this video. 
  onExportClick() {
    const options = {
      filename: this.ninvoice + ' invoice.pdf',
      image: { type: 'jpeg' },
      html2canvas: {},
      jspdf: { orientation: 'landscape' }
    };
    const content: Element = document.getElementById('htmlData');

    html2pdf()
      .from(content)
      .set(options)
      .save();
  }
  // ------------------ ----------------------------

  // this method is the request to get the information of the company from the data base 
  loadCompany() {
    return new Promise(resolve => {
      const body = {
        aksi: 'getcompany',
      };

      this.postPvdr.postData(body, 'proses-api.php').subscribe(data => {
        console.log(data);
        for (let company of data.result) {
          this.info.name = company.fullname;
          this.info.name_company = company.company;
          this.info.name_address = company.com_address;
          this.info.name_phone = company.com_phone;

          this.companies.push(company);
          console.log(this.companies);

        }
        resolve(true);

      });
    });

  }



  // ----this method is the connection with the database to update client data in the master_user table --------
  async updateClient() {
    return new Promise(resolve => {
      let body = {
        aksi: 'updateclient',
        user_id: this.client_id,
        fullname: this.client_fullname,
        u_email: this.email,
        u_companyname: this.company,
        u_address: this.address,
        u_phone: this.phone,
      };

      this.postPvdr.postData(body, 'proses-api.php').subscribe(async data => {
        var alertpesan = data.msg;
        console.log('OK');
        if (data.success) {
          //  this.storage.set('session_storage', data.result);
          const toast = await this.toastCtrl.create({
            message: 'data succesful save',
            duration: 3000
          });
          toast.present();
        } else {
          const toast = await this.toastCtrl.create({
            message: alertpesan,
            duration: 3000
          });
          toast.present();
        }

      });
    });

  }

  //-CONNECTION WITH THE DATA BASE TO UPDATE COMPANY INFORMATION IN COMPANY TABLE  --------------------------------------

  async updatedata() {
    // validation done
    return new Promise(resolve => {

      let body = {
        aksi: 'updatecompany',
        fullname: this.info.name,
        company: this.info.name_company,
        com_address: this.info.name_address,
        com_phone: this.info.name_phone
      };
      // name from the table: name of the variable 
      // let body have to be in order with the values in the table 
      this.postPvdr.postData(body, 'proses-api.php').subscribe(async data => {
        var alertpesan = data.msg;

        if (data.success) {
          //  this.storage.set('session_storage', data.result);
          const toast = await this.toastCtrl.create({
            message: 'data succesful save',
            duration: 3000
          });
          toast.present();
        } else {
          const toast = await this.toastCtrl.create({
            message: alertpesan,
            duration: 3000
          });
          toast.present();
        }
      });
    });
  }

  // ---------------------------CODE IN DEVELOPING -------------------

  // --------- set company inforamtion ---------------------
  async prosesdata() {
    // validation done
    return new Promise(resolve => {
      alert('body');
      let body = {
        aksi: 'company',
        fullname: this.info.name,
        company: this.info.name_company,
        com_address: this.info.name_address,
        com_phone: this.namephone
      };
      // name from the table: name of the variable 
      // let body have to be in order with the values in the table 
      this.postPvdr.postData(body, 'proses-api.php').subscribe(async data => {
        var alertpesan = data.msg;
        alert('body1');
        if (data.success) {
          //  this.storage.set('session_storage', data.result);
          const toast = await this.toastCtrl.create({
            message: 'data succesful save',
            duration: 3000
          });
          toast.present();
        } else {
          const toast = await this.toastCtrl.create({
            message: alertpesan,
            duration: 3000
          });
          toast.present();
        }
      });
    });
  }

  // ---------------------------code in process to send the invoice data to the database ---------------------------- 
  async prosesinvoice() {
    // validation done

    return new Promise(resolve => {
      alert('body');
      let body = {
        aksi: 'invoice',
        //  item : this.item,
        item_total: this.itemtotal,
        subtotal: this.subtotal,
        total: this.total,
        in_date: this.today,
      };
      // name from the table: name of the variable 
      // let body have to be in order with the values in the table 
      this.postPvdr.postData(body, 'proses-api.php').subscribe(async data => {
        var alertpesan = data.msg;
        if (data.success) {
          //  this.storage.set('session_storage', data.result);
          const toast = await this.toastCtrl.create({
            message: 'Booking succesful',
            duration: 3000
          });
          toast.present();
        } else {
          const toast = await this.toastCtrl.create({
            message: alertpesan,
            duration: 3000
          });
          toast.present();
        }
      });
    });
  }

}
