import { Component, OnInit, ViewChild } from '@angular/core';
import { Validators,FormBuilder, FormControl, FormGroup  } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AppuserserviceService } from 'src/app/appservice/appuserservice.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmsignupComponent } from 'src/app/confirmsignup/confirmsignup.component';


@Component({
  selector: 'app-signupdialog',
  templateUrl: './signupdialog.component.html',
  styleUrls: ['./signupdialog.component.css']
})
export class SignupdialogComponent implements OnInit {


  titleAlert: string = 'This field is required';
  userExistsError: string;

  errorState = false;
  @ViewChild('form') form;

  constructor(
    private fb: FormBuilder, 
    private router: Router,
    private dialogRef: MatDialogRef<SignupdialogComponent>,
    private _appuserService: AppuserserviceService,
    private dialog: MatDialog
    ) { }

  ngOnInit(): void {
    this.dialogRef.updateSize('40%', '80%');
  }


  emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  mobileregex: RegExp= /^(\+\d{1,3}[- ]?)?\d{10}$/;

  regForm =this.fb.group({
    name: [null, Validators.required],
    email: [null, [Validators.required, Validators.pattern(this.emailregex)]],
    password: [null, Validators.required],
    mobile: [null, [Validators.required, Validators.pattern(this.mobileregex)]],
    billingaddress: [null, [Validators.required]]
  })


  submit(){
    let user = this.regForm.value;
    console.log(user)
    this._appuserService.register(user)
    .subscribe((response)=>{console.log(response), this.dialog.open(ConfirmsignupComponent).afterClosed()
    .subscribe((result)=>{
      if(result='closed'){
        this.dialogRef.close('closed');
      }
    })}, (error)=>{console.log(error), this.userExistsError='Email is already registered, kindly Login to continue.'});
    
  }

  onClose(){
    this.dialogRef.close('closed');
  }

  reset(){
    this.regForm.reset();
  }

  resetForm() {
    if (!this.errorState) {
      this.form.resetForm();
    } else {
      this.form.reset();
    }
    
    // this.checkForm.markAsPristine();
    this.form.markAsUntouched();      
  }

  getErrorEmail(){
    return this.regForm.get('email')?.hasError('required') ? 'Field is required' : this.regForm.get('email')?.hasError('alreadyInUse') ?
    'this email address is already in use' : '';
  }


  getErrorPassword() {
    return this.regForm.get('password')?.hasError('required') ? 'Field is required (at least eight characters, one uppercase letter and one number)' :
      this.regForm.get('password')?.hasError('requirements') ? 'Password needs to be at least eight characters, one uppercase letter and one number' : '';
  }



}
