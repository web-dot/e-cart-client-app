 import{ HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { User } from './User';

@Injectable()
export class UserService{

    constructor(private _httpService: HttpClient){}

    ROOT_URL: String =  "http://ec2-54-248-148-149.ap-northeast-1.compute.amazonaws.com:8080";

    addUser(user : User){
        let options = {
            headers: new HttpHeaders({
                'Content-Type':  'application/json',
                "Access-Control-Allow-Origin": "*",
                
              } ),responseType: 'text' as 'json'
        };

        let body=JSON.stringify(user);
        let headers = new Headers({'Content-Type': 'application/json'});
        return this._httpService.post(this.ROOT_URL + "/api/setNewUser", body, options);
    }

}