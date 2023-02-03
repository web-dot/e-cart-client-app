import { Component, Input, OnInit } from '@angular/core';
import { AdminserviceService } from 'src/app/appservice/adminservice.service';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from '../product';
import { MatDialog } from '@angular/material/dialog';
import { DeletecatdialogComponent } from '../deletecatdialog/deletecatdialog.component';
import { Router } from '@angular/router';
import { AddproductComponent } from '../addproduct/addproduct.component';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { CartService } from 'src/app/appservice/cart.service';
import { Category } from '../category';
import { CartdialogComponent } from '../cartdialog/cartdialog.component';




@Component({
  selector: 'app-categorytemplate',
  templateUrl: './categorytemplate.component.html',
  styleUrls: ['./categorytemplate.component.css']
})
export class CategorytemplateComponent implements OnInit, AfterViewInit {

  //@Input() categorytype:string;

  
  

  category: any;
  categoryList: any;
  
  categoryName: any;
  categoryId: any;
  
  displayedColumns: string[]
  
  username: string;
  role: string;
  showUser: boolean = false;
  showAdmin: boolean = false;

  productInStock: number


  
  
  dataSource = new MatTableDataSource<Product[]>();
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  constructor(
    private _adminService: AdminserviceService,
    public dialog: MatDialog,
    private router: Router,
    private cartService: CartService
    ) { }
    
    ngOnInit(): void {
      this._adminService.getCategories().subscribe((categories) => {
        this.categoryList = categories;
        console.log(this.categoryList)
        this.category = JSON.parse(localStorage.getItem('category'));

      this.categoryName = JSON.parse(localStorage.getItem('category'));
      this.categoryId = JSON.parse(localStorage.getItem('categoryid'))

      
      this.categoryList.forEach((category) => {
        if (category.name == this.categoryName && category.id == this.categoryId) {
          this.dataSource = category.products;
        }
      })
      
    })
    this.username = JSON.parse(localStorage.getItem('username'));
    this.role = JSON.parse(localStorage.getItem('role'));
    if (this.role == 'USER') {
      this.showUser = true;
    }
    else {
      this.showAdmin = true;
    }

    if (this.showAdmin) {

      this.displayedColumns = ['name', 'price', 'instock', 'edit', 'delete'];
      
    }
    if(this.showUser) {
      this.displayedColumns = ['name', 'price', 'instock', "addtocart", "buy-now"];
    }
    
    
  }

  deleteCategory() {
    this.dialog.open(DeletecatdialogComponent).afterClosed().subscribe((result) => {
      console.log(result);
      if (result == 'closed') {
        this._adminService.deleteCategory(this.categoryId).subscribe((response) => {
          console.log(response);

          this.router.navigateByUrl('/admin/home')
        })
      }
    });
  }

  addProduct() {
    this.dialog.open(AddproductComponent).afterClosed()
      .subscribe((result) => {
        if (result == 'closed') {
          location.reload();
        }
      })
  }

  deleteProduct(product: Product, id:string){
    this._adminService.deleteProduct(product, id)
    .subscribe((response)=>{
      console.log(response);
    })
  }

  //Generated id
  getNewID(): string {
    let myDate = new Date();
    var varID = myDate.getHours() + "" + myDate.getMinutes() + "" + myDate.getSeconds() + "" + myDate.getMilliseconds();
    console.log(varID);
    return varID;
  }

  addToCart(addedProduct: Product){
    this.cartService.addToCart(addedProduct);
  }

  openCart(){
    this.dialog.open(CartdialogComponent);
  }

}


