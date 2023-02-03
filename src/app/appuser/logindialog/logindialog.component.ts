import { tokenize } from '@angular/compiler/src/ml_parser/lexer';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Validator, FormBuilder, Validators, FormControl, NgForm, FormGroup, FormGroupDirective } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AppuserserviceService } from 'src/app/appservice/appuserservice.service';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-logindialog',
  templateUrl: './logindialog.component.html',
  styleUrls: ['./logindialog.component.css']
})

export class LogindialogComponent implements OnInit {

//loginForm: FormGroup;
username = '';
password = '';
matcher = new MyErrorStateMatcher();
isLoadingResults = false;

loginError:string;


errorState = false;

@ViewChild('form') form;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<LogindialogComponent>,
    private _appUserService: AppuserserviceService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  loginForm=this.fb.group({
    username:[null, [Validators.required, Validators.pattern(this.emailregex)]],
    password:[null, Validators.required]
  })


  errorMessageEmail(){
    if(this.loginForm.get('username').hasError('required')){
      return 'username is required'
    }
    return this.loginForm.get('username').hasError('username') ? 'username is required' : '';
  }

  errorMessagePassword(){
    if(this.loginForm.get('password').hasError('required')){
      return 'password is required'
    }
    return this.loginForm.get('password').hasError('password') ? 'password is required' : '';
  }

  resetForm() {
    if (!this.errorState) {
      this.form.resetForm();
    } else {
      this.form.reset();
    }
    
    this.form.markAsUntouched();
    this.loginError="";      
  }

  onClose(){
    this.dialogRef.close('closeOnly');
  }


  submit(){
  
    this._appUserService.login(this.loginForm.value)
    .subscribe((response:any)=>{
      console.log(response);
      console.log(JSON.parse(response))
      let body = JSON.parse(response);
      let jwt = body.jwt;
      console.log(jwt);
      if(jwt){
        this.username=this.loginForm.value.username
        localStorage.setItem('token', JSON.stringify(jwt));
        localStorage.setItem('username', JSON.stringify(this.loginForm.value.username));
        if(this.username=='sudipto@gmail.com'){
          localStorage.setItem('role', JSON.stringify('ADMIN'))
        }
        else{
          localStorage.setItem('role', JSON.stringify('USER'));
        }
        this.dialogRef.close('closed');
      }
    }, (err)=>{console.log(err), this.loginError='Incorrect username or password'})
    
  }
  
  register() {
    this.router.navigate(['register']);
  }



}
