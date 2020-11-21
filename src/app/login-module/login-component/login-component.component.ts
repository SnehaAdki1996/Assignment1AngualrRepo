
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginDerviceService } from '../login-dervice.service';
import { validate } from 'json-schema';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.sass']
})
export class LoginComponentComponent implements OnInit {

  loginSuccess : boolean = false

  username : string
  password : string
  constructor(
    private router : Router,
    private loginService : LoginDerviceService,
    private httpClient : HttpClient
  ) { }
  ngOnInit(): void {
    this.loginSuccess = true
  }

  login(username,pass){
    this.loginSuccess = false
    console.log(username.value,pass.value)
    this.username = username.value
    this.password = pass.value
    
    // this.loginService.getData()
    // console.log(this.loginService.userData)
    
    this.getServiceData()
    
    
    

  }

  getServiceData(){
    
    this.httpClient.get('assets/loginData.json').subscribe(res=>{
     console.log(res)
     this.loginService.userData = res
     this.validate(this.username , this.password)

     if(this.loginSuccess){
      localStorage.setItem("username" , this.username)
      localStorage.setItem("password" , this.password)
        this.router.navigate(['login_details'])
      }
   })
   }

  validate(username , pass){
    if(this.loginService.userData.length){
      for(let i=0; i< this.loginService.userData.length ; i++){
        if(this.loginService.userData[i].UserName === username && this.loginService.userData[i].Password === pass){
          this.loginSuccess = true
          break
        }
      }
    }
  }
}
