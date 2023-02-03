import { Component, OnInit } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { AdminloginDialogComponent } from '../admin/adminlogindialog/adminlogindialog.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    private router: Router) { }

  ngOnInit(): void {
  }

  adminLogin(){
    this.dialog.open(AdminloginDialogComponent).afterClosed().subscribe((result) => {
      if(result == 'closed'){
        this.router.navigateByUrl('admin/home')
      }
    })
  }

  



}
