import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewcatdialogComponent } from '../newcatdialog/newcatdialog.component';
import { Router } from '@angular/router';
import { AdminserviceService } from 'src/app/appservice/adminservice.service';
import { LogoutComponent } from 'src/app/logout/logout.component';

@Component({
  selector: 'app-admintoolbar',
  templateUrl: './admintoolbar.component.html',
  styleUrls: ['./admintoolbar.component.css']
})
export class AdmintoolbarComponent implements OnInit {

  categoryList: any;
  categoryname:string;
  categoryid:string;
  username:string;
  name:string;
  role:string;
  showUser:boolean=false;
  showAdmin:boolean=false;

  constructor(
    public dialog: MatDialog,
    private router: Router,
    private _adminService: AdminserviceService 
  ) { }

  ngOnInit(): void {
    this._adminService.getCategories().subscribe((catagories)=>{
      this.categoryList=catagories;
      console.log(this.categoryList);
    })
    this.username = JSON.parse(localStorage.getItem('username'));
    this.role=JSON.parse(localStorage.getItem('role'));
    if(this.role=='USER'){
      this.showUser=true;
    }
    else{
      this.showAdmin=true;
    }

    let split = this.username.split('@');
    this.name=split[0];
  }

  addNewCat(){
    this.dialog.open(NewcatdialogComponent).afterClosed().subscribe((result)=>{
      if(result=='closed'){
        this._adminService.getCategories().subscribe((categories)=>{
          this.categoryList=categories;
          console.log(this.categoryList)
        })
      }
    });
  }

  onClickRoute(item){

    this.categoryname=item.name;
    this.categoryid=item.id;
    
    console.log(this.categoryname);
    console.log(this.categoryid);

    localStorage.setItem('category', JSON.stringify(this.categoryname));
    localStorage.setItem('categoryid', JSON.stringify(this.categoryid));

    
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigateByUrl('/admin/template');
    
  };



  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('category');
    localStorage.removeItem('role');
    localStorage.removeItem('categoryid');
    this.dialog.open(LogoutComponent).afterClosed()
    .subscribe(()=>{
      this.router.navigateByUrl('');
    })
    //this.router.navigateByUrl('/');
  }

  // getNewID():any {
  //       let myDate = new Date();
  //       var varID = myDate.getHours() + "" + myDate.getMinutes() + "" + myDate.getSeconds() + "" + myDate.getMilliseconds();
  //       if (varID.length > 15) {
  //           varID = varID.substr(0, 15);
  //           console.log(varID)
  //       return varID;
  //   }
  // }
  // randString(x){
  //   var s = this.getNewID();
  //   return s;
  // }
}
