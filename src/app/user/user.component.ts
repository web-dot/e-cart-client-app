import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from './User';
import { UserService } from './user.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user = new User();

  signupForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  })
  
  constructor(private _userService: UserService) { }

  ngOnInit(): void {
  }

  addUser(): void{
    this._userService.addUser(this.signupForm.value)
    .subscribe((response) => {console.log(response)}, (error)=>{
      console.log(error);
    });
  }

  loginUser(){
    console.log(this.signupForm.value);
  }

}
