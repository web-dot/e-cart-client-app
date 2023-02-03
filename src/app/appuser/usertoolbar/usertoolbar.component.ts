import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LogindialogComponent } from '../logindialog/logindialog.component';
import { SignupdialogComponent } from '../signupdialog/signupdialog.component';



@Component({
  selector: 'app-usertoolbar',
  templateUrl: './usertoolbar.component.html',
  styleUrls: ['./usertoolbar.component.css']
})
export class UsertoolbarComponent implements OnInit {


  username:string;

  constructor(
    public dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit(): void {
  }


  signup(){
    this.dialog.open(SignupdialogComponent).afterClosed()
    .subscribe((result)=>{
      if(result='closed'){
        this.router.navigateByUrl('/')
      }
    });
  }

  login(){
    this.dialog.open(LogindialogComponent).afterClosed().subscribe((result)=> {
      if(result=='closed'){

        this.username = JSON.parse(localStorage.getItem('username'));
        if(this.username=='sudipto@gmail.com'){
          this.router.navigateByUrl('/admin/home');
        }
        else{
          
          this.router.navigateByUrl('/user/landing');
        }
        
        
      }
    })
  }

}
