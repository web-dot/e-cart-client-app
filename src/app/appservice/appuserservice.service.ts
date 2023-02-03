import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppUser } from '../appuser/appuser';
import { UserAuthBody } from '../appuser/userauthbody';

const apiUrl = 'http://localhost:5050/api/login';

@Injectable({
  providedIn: 'root'
})
export class AppuserserviceService {



isLoggedIn = false;
redirectUrl: string;

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
    return this._httpService.post("http://localhost:5050/login", body, options)
  }

  public register(appuser: AppUser){
    let options = {
      headers: new HttpHeaders({
          'Content-Type':  'application/json',
          "Access-Control-Allow-Origin": "*",
          
        } ),responseType: 'text' as 'json'
    };

    let body=JSON.stringify(appuser);
    return this._httpService.post("http://localhost:5050/register", body, options)
  }

}
