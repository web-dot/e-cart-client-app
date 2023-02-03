import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AdminserviceService } from 'src/app/appservice/adminservice.service';
import { Chart } from 'chart.js';
import { NewcatdialogComponent } from '../newcatdialog/newcatdialog.component';


const xlabels = [];
const ytemps = [];


@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})


export class AdminhomeComponent implements OnInit {

  categoryList: any;
  canvas: any;
  ctx: any;
  sortedYtemps:Array<number>;
  categoryname:string;
  categoryid:string;
  username:string;
  name:string;

  productsInfo:any;

  trendCategory1:string;
  trendSum1:number;
  
  trendCategory2='Plastic Raw Materials';
  trendSum2:number=4483;

  trendCategory3='Telecom Instruments';
  trendSum3=2706;

  trendCategory4='Electronics Components';
  trendSum4:number=2395;


  constructor(
    public dialog: MatDialog,
    private router: Router,
    private _adminService: AdminserviceService,

  ) { }

  ngOnInit(): void {
    this._adminService.getCategories().subscribe((catagories)=>{this.categoryList=catagories});
    this.fetchCategories(); 
  }
  
  ngAfterViewInit() {
    this.canvas = document.getElementById('myChart');
    this.ctx = this.canvas.getContext('2d');
    let myChart = new Chart(this.ctx, {
      type: 'pie',
      data: {
          labels: xlabels,
          datasets: [{
              label: 'Commodity-wise trade',
              data: [0,1182,155,2706,2395,106,345,4483,5884,136],
              borderWidth: 1
          }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          legend: {
            position: 'top',
            display:true,
            
          },
          title: {
            display: true,
            text: ''
          },
        }
        
      }
      
    });
  }
  fetchCategories(){
    this._adminService.ecommerceFetch().subscribe((res)=>{
      this.productsInfo = res['records'];
      console.log(this.productsInfo)
      let max=0;
      this.productsInfo.forEach((commodity)=>{
        xlabels.push(commodity.commodity);
        ytemps.push(parseFloat(commodity.export));
        this.sortedYtemps = ytemps.sort((n1,n2)=>n1-n2);
        if(commodity.export>max){
          max=commodity.export;
          this.trendCategory1=commodity.commodity;
          this.trendSum1=commodity.export;
        }
      })
    })
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
    
  };

  addNewCat(){
    this.dialog.open(NewcatdialogComponent).afterClosed().subscribe((result)=>{
      if(result=='closed'){
        this._adminService.getCategories().subscribe((categories)=>{
          this.categoryList=categories;
          console.log(this.categoryList)
        })
      }
    });
  }

}
  

