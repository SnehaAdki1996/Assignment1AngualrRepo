


import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
// import { userData } from './../../assets/loginData'


// import {loginData} from './../../assets' 


@Injectable({
  providedIn: 'root'
})
export class LoginDerviceService {
  userData 
  constructor(private httpClient : HttpClient) { }


  //loginData
 // userInfo = 

 getData(){
   this.httpClient.get('assets/loginData.json').subscribe(res=>{
     console.log(res)
     this.userData = res
   })
 }
}
