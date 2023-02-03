
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';
import { MatInputModule} from '@angular/material/input';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { AdminserviceService } from '../appservice/adminservice.service';
import { AdminhomeComponent } from './adminhome/adminhome.component'; 
import { AdmintoolbarComponent } from './admintoolbar/admintoolbar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { NewcatdialogComponent } from './newcatdialog/newcatdialog.component';
import { CategorytemplateComponent } from './categorytemplate/categorytemplate.component';
import { MatTableModule } from '@angular/material/table';
import { DeletecatdialogComponent } from './deletecatdialog/deletecatdialog.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CartdialogComponent } from './cartdialog/cartdialog.component';

@NgModule({
  declarations: [
    AdminhomeComponent,
    AdmintoolbarComponent,
    NewcatdialogComponent,
    CategorytemplateComponent,
    DeletecatdialogComponent,
    AddproductComponent,
    CartdialogComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    RouterModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatChipsModule
  ],
  exports:[
    AdminhomeComponent,
    AdmintoolbarComponent
  ],
  providers: [AdminserviceService]
})
export class AdminModule { }
