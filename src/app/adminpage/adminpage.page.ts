import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { PostProvider } from '../../providers/post-provider';
import { Router, NavigationExtras  } from '@angular/router';
import { Storage } from '@ionic/Storage';


@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.page.html',
  styleUrls: ['./adminpage.page.scss'],
})
export class AdminpagePage implements OnInit {


  // variable array to save the porject objects
  projects: any = [];
 

  // anggota: any;
  // adminame:'';
  

  // client array to save the client objects
  clients: any = [];
  
  
  constructor(
    private router: Router,
  	private postPvdr: PostProvider,
    private storage: Storage,
    public toastCtrl: ToastController
  ) { }

  ngOnInit() {
    this.loadProjects();
    this.loadClients();
    // this.displayphone();
  }

  //life cycle event to run the methods and display before the animation of the page finish 
  ionViewWillEnter(){
   
    this.projects = [];
     this.loadProjects();
     this.clients = [];
     this.loadClients();
    //  this.displayphone();

  }

// log out routing navigation
  async prosesLogout(){
    this.storage.clear();
    this.router.navigate(['tabs/tab3']);
    const toast = await this.toastCtrl.create({
        message: 'logout succesful',
        duration: 3000
      });
    toast.present();
  }

  // routing navigation to the calendar page 
  calendarpage(){
  	this.router.navigate(['/calendar']);
  }

  // request to get projects information from the projects table in the database 
 loadProjects(){
  return new Promise(resolve => {
    const body = {
      aksi : 'getprojects',
    };

    this.postPvdr.postData(body, 'proses-api.php').subscribe(data => {
      console.log(data);
      for (let project of data.result){
        this.projects.push(project);

        }
      resolve(true);

    });
    
    console.log(this.projects);
     });

}



//  this method is the routing to go to the invoce show client page and sending the specific information of the project 
showClient(project){
  console.log(project);
  let navigationExtras: NavigationExtras = {
    state: {
      project: project
    }
  };
  this.router.navigate(['showclient'], navigationExtras);

}

// this method is the routing to go to the invoce page and sending the nformation of the specific client 
updateClient(event){
  console.log(event);

    for(let i = 0; i<this.clients.length; i++){
      if(this.clients[i].user_id === event){
        let navigationExtras: NavigationExtras = {
          state: {
            client: this.clients[i]
          }
        };
        this.router.navigate(['invoice'], navigationExtras);
      }
    }


  
}

// delete request to delete client and project in the database
delClient(id){

  let body = {
      aksi : 'delete',
      client_id : id
    };

    this.postPvdr.postData(body, 'proses-api.php').subscribe(data => {
      this.ionViewWillEnter();
    });

}

segmentChanged(ev: any) {
  console.log('Segment changed', ev);
}

// request to get clients information from the master_user table in the data base
loadClients(){
  return new Promise(resolve => {
    const body = {
      aksi : 'getclients',
    };

    this.postPvdr.postData(body, 'proses-api.php').subscribe(data => {
      console.log(data);
      for (let client of data.result){
        this.clients.push(client);
        console.log(this.clients);

        }
      resolve(true);

    });
     });

}


//  Routhing navigation go to employee page 
staff(){
  this.router.navigate(['employee']);
}



}
