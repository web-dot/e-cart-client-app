import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AdminserviceService } from 'src/app/appservice/adminservice.service';

@Component({
  selector: 'app-userlanding',
  templateUrl: './userlanding.component.html',
  styleUrls: ['./userlanding.component.css']
})
export class UserlandingComponent implements OnInit {


  categoryList: any;
  categoryname:string;
  categoryid:string;
  username:string;
  name:string;
  role:string;

  constructor(
    public dialog: MatDialog,
    private router: Router,
    private _adminService: AdminserviceService 
  ) { }

  ngOnInit(): void {

    this._adminService.getCategories().subscribe((catagories)=>{
      this.categoryList=catagories;
      console.log(this.categoryList);
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
    
  }

}
