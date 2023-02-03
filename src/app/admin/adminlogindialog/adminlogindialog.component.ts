import { Component, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { Validators } from '@angular/forms';
import { Admin } from '../admin';
import { AdminserviceService } from 'src/app/appservice/adminservice.service';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-admindialoglogin',
  templateUrl: './adminlogindialog.component.html',
  styleUrls: ['./adminlogindialog.component.css']
})
export class AdminloginDialogComponent implements OnInit {


titleAlert: string = 'This is a required field';
signInError: string;

username:string;


  constructor(
    private fb: FormBuilder, 
    private _adminService: AdminserviceService,
    private dialogRef: MatDialogRef<AdminloginDialogComponent>) { }

  ngOnInit(): void {
    this.username = JSON.parse(localStorage.getItem('username'));
    console.log(this.username);
  }

  onCancel(){
    this.dialogRef.close();
  }

  admin = new Admin();

  loginForm = this.fb.group({
    userid:[null, [Validators.required]],
    password:[null, [Validators.required]]
  })

  getErrorMessage() {
    return this.loginForm.controls['userid'].hasError('required') ? 'This is a required field' :
        this.loginForm.controls['userid'] ? 'Not a valid userid' :
            '';
  }
  
  adminLogs(){
    this._adminService.getAdminCreds()
    .subscribe((adminData) => { this.admin=adminData

      if(this.loginForm.value['userid']!=this.admin['userid'] || this.loginForm.value['password']!=this.admin['password']){
        this.signInError = 'invalid login credentials'
      }
      else{
        console.log("passed");
        this.dialogRef.close('closed');
      }
    });
  }

 
  
}
