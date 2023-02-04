import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppUser } from '../appuser/appuser';
import { UserAuthBody } from '../appuser/userauthbody';

//const apiUrl = 'http://localhost:8080/api/login';

@Injectable({
  providedIn: 'root'
})
export class AppuserserviceService {



isLoggedIn = false;
redirectUrl: string;

ROOT_URL: String =  "http://ec2-54-248-148-149.ap-northeast-1.compute.amazonaws.com:8080";
                    

  constructor(private _httpService: HttpClient) { }


  public login(userauthbody: UserAuthBody){
    console.log(userauthbody)

    // return this._httpService.post("http://localhost:5050/login", userauthbody, {headers:{skip:'true'}}).pipe(map(result=>{
    //   console.log(result);
    // }))

    let options={
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),responseType: 'text' as 'json'
    };
    let body = JSON.stringify(userauthbody)
    return this._httpService.post(this.ROOT_URL +  "/login", body, options)
  }

  public register(appuser: AppUser){
    let options = {
      headers: new HttpHeaders({
          'Content-Type':  'application/json',
          "Access-Control-Allow-Origin": "*",
          
        } ),responseType: 'text' as 'json'
    };

    let body=JSON.stringify(appuser);
    return this._httpService.post(this.ROOT_URL + "/register", body, options)
  }

}
