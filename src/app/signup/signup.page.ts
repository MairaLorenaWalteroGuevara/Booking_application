import { ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { PostProvider } from '../../providers/post-provider';
import {Router} from '@angular/router';
import { Storage } from '@ionic/Storage';
import {Platform} from '@ionic/angular';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

//  Company information 
  fullname: string = '' ;
  email: string = '';
  phone: string = '';
  address: string = ''; 
  companyname: string = ''; 


  
  // LOGIN information 
  username: string = '';
  password: string = '';
  confirm_password: string = '';


  // quantity=0;  

  
  // modifiedtext:string='';




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
  


//  Navegation to the LOGIN 
  formLogin(){
    this.router.navigate(['tabs/tab2']);
  }

  
  
// This method takes the input of the registration form and send the information to the database 
  async prosesRegister(){
    // validation done
    if(this.fullname==''){
      const toast = await this.toastCtrl.create({
        message: 'Full name is required',
        duration: 3000
      });
      toast.present();
    }else if(this.email==''){
      const toast = await this.toastCtrl.create({
        message: 'Email is required',
        duration: 3000
      });
      toast.present();
  }else if(this.companyname==''){
    const toast = await this.toastCtrl.create({
      message: 'companymane is required',
      duration: 3000
    });
    toast.present();
  }else if(this.phone==''){
  const toast = await this.toastCtrl.create({
    message: 'Phone number is required',
    duration: 3000
  });
  toast.present();

      }else if(this.username==''){
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
        fullname: this.fullname,
        u_email: this.email,
        u_companyname:this.companyname,
        u_phone:this.phone,
        u_address:this.address,
        username: this.username,
        password: this.password,
        aksi: 'register'
      };

// name from the table: name of the variable 
// let body have to be in order with the values in the table 
      this.PostPvdr.postData(body, 'proses-api.php').subscribe(async data =>{
        var alertpesan = data.msg;
        if(data.success){
          this.router.navigate(['tabs/tab2']);
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
 

  
}