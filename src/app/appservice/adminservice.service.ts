import { Injectable } from '@angular/core';
import{ HttpClient, HttpHeaders } from '@angular/common/http';
import { Admin } from '../admin/admin';
import { throwToolbarMixedModesError } from '@angular/material/toolbar';
import { Category } from '../admin/category';
import { Product } from '../admin/product';


@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {

  constructor(private _httpService: HttpClient) { }

  ROOT_URL: String =  "http://ec2-54-248-148-149.ap-northeast-1.compute.amazonaws.com:8080";

  getAdminCreds(): any{
    return this._httpService.get(this.ROOT_URL + "/api/getAdminLog/admin");
  }

  addCategory(category: Category){
    let options = {
      headers: new HttpHeaders({
          'Content-Type':  'application/json',
          "Access-Control-Allow-Origin": "*",
          
        } ),responseType: 'text' as 'json'
    };
    
    let body=JSON.stringify(category);
    return this._httpService.post(this.ROOT_URL + "/api/addCategory", body, options)
  }


  getCategories(){
    return this._httpService.get(this.ROOT_URL +  "/api/getCategory")
  }

  deleteCategory(id: string){
    console.log("-->", id)
    return this._httpService.delete( this.ROOT_URL + `/api/deleteCategory/${id}`)
  }

  addProduct(product: Product, id: string){

    let options = {
      headers: new HttpHeaders({
          'Content-Type':  'application/json',
          "Access-Control-Allow-Origin": "*",
          
        } ),responseType: 'text' as 'json'
    };

    let body=JSON.stringify(product);
    return this._httpService.post( this.ROOT_URL + "/api/addProduct/"+id, body, options)


  }


  deleteProduct(product: Product, id: string){
    let options = {
      headers: new HttpHeaders({
          'Content-Type':  'application/json',
          "Access-Control-Allow-Origin": "*",
          
        } ),responseType: 'text' as 'json'
    };
    let body = JSON.stringify(product);
    return this._httpService.post(this.ROOT_URL +  "/api/deleteProduct/"+id, body, options)
  }


  ecommerceFetch(){
    return this._httpService.get('https://api.data.gov.in/resource/b0564806-9abd-4bf9-b679-5c8ed7f15f53?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json&offset=0&limit=10');
  }

}
