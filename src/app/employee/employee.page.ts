import { Component, OnInit } from '@angular/core';
import { PostProvider } from 'src/providers/post-provider';
import * as html2pdf from 'html2pdf.js';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.page.html',
  styleUrls: ['./employee.page.scss'],
})
export class EmployeePage implements OnInit {

// this is the array to cointain the employees 
  employeese:any=[];



  constructor(private postPvdr: PostProvider) { }

  ngOnInit() {
    this.getEmployees();
  }

  // this method is a request to get the employees from the database and put these into a employeese array 
  getEmployees() {
  return new Promise(resolve => {
    let body = {
      aksi: 'getemployee',
    };
    
    this.postPvdr.postData(body, 'proses-api.php').subscribe(data => {
      console.log(data);
      for (let employee of data.result){

        this.employeese.push(employee);
        

        }
        console.log(this.employeese);
      resolve(true);

    });
     });
}
// I learn how to print the pdf following this video https://www.youtube.com/watch?v=7LoWmGMB7e4&t=4s and my code is the code of this video. 
// Pdf method to print the pdf 
onExportFile(){
  const options= {
    filename: 'forcast.pdf',
    image:{type:'jpeg'},
    html2canvas:{},
    jspdf:{orientation:'landscape'}
  };
  const content:Element=document.getElementById('htmlData');

  html2pdf()
  .from(content)
  .set(options)
  .save();
}
}
