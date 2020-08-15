import { Component,OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { PostProvider } from '../../providers/post-provider';
import { Router } from '@angular/router';
import { Storage } from '@ionic/Storage';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page implements OnInit {

  // login variables 
  username:string; 
  password: string; 
  fullname:string;

  constructor(
    private router: Router,
  	private postPvdr: PostProvider,
  	private storage: Storage,
  	public toastCtrl: ToastController

  ) {}

  ngOnInit() {
  }

  // this method is the routing navigation to the registration page 
  formRegister(){
  	this.router.navigate(['/signup']);
  }

  // this method takes the inputs and make the request to the database and compare the information giving access or denied the access to client page 
  async prosesLogin(){
    if(this.username != "" && this.username != ""){
      let body = {
        username: this.username,
        password: this.password,
        fullname: this.fullname,
        aksi: 'login'
      };

      this.postPvdr.postData(body, 'proses-api.php').subscribe(async data =>{
        var alertpesan = data.msg;
        if(data.success){
          this.storage.set('session_storage', data.result);
          this.router.navigate(['/clientpage']);
          const toast = await this.toastCtrl.create({
		    message: 'Login Succesfully.',
		  	duration: 2000
		  });
		  toast.present();
		  this.username = "";
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
