

import { Component, OnInit } from '@angular/core';
import { LoginDerviceService } from '../login-dervice.service';
import { HttpClient } from '@angular/common/http';

interface userData {
  username : string,
  lastName : string,
  firstName : string,
  address : string,
  phoneNumber : string
}


@Component({
  selector: 'app-login-details',
  templateUrl: './login-details.component.html',
  styleUrls: ['./login-details.component.sass']
})
export class LoginDetailsComponent implements OnInit {

  userInfo : userData = {username : '',lastName :'',firstName :'',address :'',phoneNumber :''}
  constructor(
    private LoginService :  LoginDerviceService ,
    private httpClient : HttpClient
  ) { }
  

  ngOnInit(): void {
    this.getData()
  }

  getData(){
    this.getDataService()
    console.log(this.LoginService.userData)


    // while(this.LoginService.userData){
    //   this.LoginService.getData()
    // }
    // if(this.LoginService.userData!= undefined){
    //   this.mapData()
    // }
    
    //this.userInfo.address 
  }
  getDataService(){
    
   this.httpClient.get('assets/loginData.json').subscribe(res=>{
    console.log(res)
    this.mapData(res)
  })
  }
  mapData(res){
    res.forEach(element => {
      this.userInfo.username = element.UserName,
      this.userInfo.phoneNumber = element.PhoneNumber,
      this.userInfo.address = element.Address,
      this.userInfo.firstName = element.FirstName,
      this.userInfo.lastName = element.LastName
    });
  }
}
