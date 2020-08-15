import { Component, OnInit } from '@angular/core';
import { PostProvider } from '../../providers/post-provider';
import { Router, ActivatedRoute } from '@angular/router';
import * as name from 'path';
import { ToastController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-showclient',
  templateUrl: './showclient.page.html',
  styleUrls: ['./showclient.page.scss'],
})
export class ShowclientPage implements OnInit {

// client information 
  client_fullname: '';
  client_id: number;
  project_id: number;


  client: '';
  date: null;
  hour: '';
  option: '';
  comment: '';
  status: '';
  employee_id: number;
//---------------------------------
  options: any = [
    'New',
    'In process',
    'In Testing',
    'Finished'
  ];

  // employee information 
  employees: string;

  employee: any;
  employee1: string;
  staff: any = [
    'Gloria Dunfy ',
    'Ovi wan kenobi',
    'Luke sky walker',
    'Jar Jar Binks'
  ];

  employeese: any = [];
//------------------------------

  data: any;

  // how to pass data between pages : https://ionicacademy.com/pass-data-angular-router-ionic-4; https://www.youtube.com/watch?v=XyLcPdv1LKM&t=11s

  constructor(public toastCtrl: ToastController, public alertCtrl: AlertController, private route: ActivatedRoute, private router: Router,
    private postPvdr: PostProvider,
    private actRoute: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.project;
        console.log(this.data);

      }
    });
  }

  // life cycle event to run the methods 
  ngOnInit() {
    this.loadData();
    this.getEmployees();

  }

  ionViewDidEnter() {
    this.loadData();
  }

  // take the employee name and employee:id and save in local variables 
  takemployee(event) {

    console.log(event);
    var emplo = event;
    console.log(emplo);
    this.employee1 = emplo.name;
    this.employee_id = emplo.employee_id;
    console.log(this.employee1);
    console.log(this.employee_id);

    console.log(this.employee1);


    console.log(this.employees);
  }

  // the date got from the administrator page is assign into a data variable. this method take each variable inside of the object and assign each to a local variable 
  loadData() {
    this.client_id = this.data.client_id;
    console.log(this.client_id);
    this.project_id = this.data.project_id;
    this.client_fullname = this.data.client_fullname;
    this.date = this.data.booking_date;
    this.hour = this.data.booking_hour;
    this.option = this.data.booking_option;
    this.comment = this.data.comment;
    this.status = this.data.pro_status;
    this.employee1 = this.data.employee;

  }

  // change the satatus variable to a new variable after it was choose in status options 
  selectStatus(event) {
    console.log(event);
    this.status = event;
  }

  //request to update project inforamtion in the database 
  async updateClient() {
    return new Promise(resolve => {
      let body = {
        aksi: 'update',
        client_id: this.client_id,
        comment: this.comment,
        pro_status: this.status,
        employee: this.employee1
      };
      console.log(this.employee);
      this.postPvdr.postData(body, 'proses-api.php').subscribe(async data => {

        console.log('OK');
        var alertpesan = data.msg;
        if (data.success) {

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

  // the method is a request to get the names of the staff and save in the employeese array 
  getEmployees() {
    return new Promise(resolve => {
      let body = {
        aksi: 'getstaff',
      };
      this.postPvdr.postData(body, 'proses-api.php').subscribe(data => {
        console.log(data);
        for (let employee of data.result) {
          this.employeese.push(employee);
        }
        console.log(this.employeese);
        resolve(true);

      });
    });
  }

  // this method is a request to update the employee inforamtion sending the project id and the appointment date 
  async updateEmployee() {
    return new Promise(resolve => {
      let body = {
        aksi: 'employee',
        employee_id: this.employee_id,
        project_id: this.project_id,
        employee_name: this.employee1,
        appointment_date: this.date

      };
      console.log(this.project_id);

      this.postPvdr.postData(body, 'proses-api.php').subscribe(async data => {
        console.log('OK');
        var alertpesan = data.msg;
        if (data.success) {
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




}
