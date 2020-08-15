import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { PostProvider } from '../../providers/post-provider';
import {Router} from '@angular/router';
import { Storage } from '@ionic/Storage';
import {Platform} from '@ionic/angular';


@Component({
  selector: 'app-singin-admin',
  templateUrl: './singin-admin.page.html',
  styleUrls: ['./singin-admin.page.scss'],
})
export class SinginAdminPage implements OnInit {



  adminame: string = '';
  password: string = '';
  confirm_password: string = '';



  constructor(
    private router: Router,
    private PostPvdr: PostProvider,
    private storage: Storage,
    public toastCtrl: ToastController,
    private platform:Platform,

    
  ) { 
    
  }

  ngOnInit() {
    
  }
  

  

  async prosesRegister(){
    // validation done
     if(this.adminame== ''){
      const toast = await this.toastCtrl.create({
        message: 'Username is required',
        duration: 3000
      });
      toast.present();
  }else if(this.password==''){
        const toast = await this.toastCtrl.create({
          message: 'Password is required',
          duration: 3000
        });
        toast.present();
    }else if(this.password!=this.confirm_password){
        const toast = await this.toastCtrl.create({
          message: 'Invalid password',
          duration: 3000
        });
        toast.present();
    }else{

      let body = {
        adminame: this.adminame,
        password: this.password,
        aksi: 'registeradmin'
      };
// name from the table: name of the variable 
// let body have to be in order with the values in the table 
      this.PostPvdr.postData(body, 'proses-api.php').subscribe(async data =>{
        var alertpesan = data.msg;
        if(data.success){
          this.router.navigate(['tabs/tab3']);
          const toast = await this.toastCtrl.create({
            message: 'Register succesful',
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
    }
  }


  // navegation to the tab number 3 
  formLogin(){
    this.router.navigate(['tabs/tab3']);
  }
 
}