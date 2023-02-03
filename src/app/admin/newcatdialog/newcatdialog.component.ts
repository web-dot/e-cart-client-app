import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AdminserviceService } from 'src/app/appservice/adminservice.service';
import { Category } from '../category';
import { Product } from '../product';

@Component({
  selector: 'app-newcatdialog',
  templateUrl: './newcatdialog.component.html',
  styleUrls: ['./newcatdialog.component.css']
})
export class NewcatdialogComponent implements OnInit {


  titleAlert: string = 'This is a required field';
  confirmMessage: string;

  productArr:Product[]=[];

  categoryList: any;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<NewcatdialogComponent>,
    private _adminService: AdminserviceService
  ) { }

  ngOnInit(): void {
  }

  onClose(){
    this.dialogRef.close('closed');
  }

  newcatform = this.fb.group({
    name: [null, [Validators.required]],
    description: [null, [Validators.required]],
    products:this.productArr
  });

  addCategory(): void{

    // //get from LoSto if null set as empty arr
    // this.categoryList = JSON.parse(localStorage.getItem('categoryAndProductList')) || []; 

    // //put added category in caegoryList
    // this.categoryList.push(this.newcatform.value);
    
    // //put back category in LoSto
    // localStorage.setItem('categoryAndProductList', JSON.stringify(this.categoryList));

    this._adminService.addCategory(this.newcatform.value)
    .subscribe((response) => {console.log(response)
    
      if(response){
        this.confirmMessage = "category added successfully";
        this.reset();
      }
    })

  }
  
  clearMessage(){
    this.confirmMessage='';
    this.reset()
  }

  reset(){
    this.newcatform.reset();
  }

  // getCategories(){
  //   this._adminService.getCategories()
  //   .subscribe((categoriesFromDB) => {
  //     this.categoryList=categoriesFromDB;

  //     console.log(this.categoryList);
  //   })
  // }


}