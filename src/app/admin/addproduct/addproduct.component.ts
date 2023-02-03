import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'; 
import { MatDialogRef } from '@angular/material/dialog';
import { AdminserviceService } from 'src/app/appservice/adminservice.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  categoryName = JSON.parse(localStorage.getItem('category'));
  categoryid = JSON.parse(localStorage.getItem('categoryid'));

  confirmMessage: string;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddproductComponent>,
    private _adminService: AdminserviceService,
    private router: Router
  ) { }

  ngOnInit(): void {

  }


  productForm = this.fb.group({
    id: this.getNewID(),
    name:[null, [Validators.required]],
    description:[null, [Validators.required]],
    price:[null, [Validators.required, Validators.pattern(/^[0-9]/)]],
    instock:[null, [Validators.required]]
  })



  addProduct(){
    console.log(this.productForm.value);
    this._adminService.addProduct(this.productForm.value, this.categoryid)
    .subscribe((response)=>{
      console.log(response);

      if(response){
        this.confirmMessage="product added successfully";
        this.reset();
      }
    })
   
  }


  clearMessage(){
    this.reset()
  }

  reset(){
    this.productForm.reset();
  }


  onClose(){
    this.dialogRef.close('closed');
  }


    //Generated id
    getNewID():string {
      let myDate = new Date();
      var varID = myDate.getHours() + "" + myDate.getMinutes() + "" + myDate.getSeconds() + "" + myDate.getMilliseconds();
      console.log(varID);
      return varID;
  }

}
