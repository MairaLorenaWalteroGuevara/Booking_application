import { Component,OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { PostProvider } from '../../providers/post-provider';
import { Router } from '@angular/router';
import { Storage } from '@ionic/Storage';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  // login variables 
  adminame:string; 
  password: string; 

  constructor(
    private router: Router,
  	private postPvdr: PostProvider,
  	private storage: Storage,
  	public toastCtrl: ToastController

  ) {}

  ngOnInit() {
  }

  // formRegister(){
  // 	this.router.navigate(['/singin-admin']);
  // }

  // Method to compare the user inputwith the information in the data base 


  // this method takes the inputs and make the request to the database comparing the information and giving or denied the access to the admin page 
  async prosesLogin(){
    if(this.adminame != "" && this.adminame != ""){
      let body = {
        adminame: this.adminame,
        password: this.password,
        aksi: 'loginadmin'
      };

      this.postPvdr.postData(body, 'proses-api.php').subscribe(async data =>{
        var alertpesan = data.msg;
        if(data.success){
          this.storage.set('session_storage1', data.result);
          this.router.navigate(['/adminpage']);
          const toast = await this.toastCtrl.create({
		    message: 'Login Succesfully.',
		  	duration: 2000
		  });
		  toast.present();
		  this.adminame = "";
		  this.password = "";
          console.log(data);
        }else{
          const toast = await this.toastCtrl.create({
		    message: alertpesan,
		    duration: 2000
		  });
    	  toast.present();
        }
      });

    }else{
      const toast = await this.toastCtrl.create({
		message: 'Username or Password Invalid.',
		duration: 2000
	  });
	  toast.present();
    }
  }


}