import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {  ReactiveFormsModule } from '@angular/forms' 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserService } from './user/user.service';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ToolbarmoduleModule } from './toolbarmodule/toolbarmodule.module';
import { MatToolbarModule} from '@angular/material/toolbar'; 
import { MatIconModule} from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AdminloginDialogComponent } from './admin/adminlogindialog/adminlogindialog.component';
import { RouterModule } from '@angular/router';
import { AdminModule } from './admin/admin.module';
import { MatTableModule } from '@angular/material/table'  
import { AppuserModule } from './appuser/appuser.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './interceptors/token.interceptor';

import { NgChartsModule } from 'ng2-charts';
import { LogoutComponent } from './logout/logout.component';
import { ConfirmsignupComponent } from './confirmsignup/confirmsignup.component';
import { UserlandingComponent } from './appuser/userlanding/userlanding.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatChipsModule } from '@angular/material/chips';




@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HomeComponent,
    AdminloginDialogComponent,
    LogoutComponent,
    ConfirmsignupComponent,
    UserlandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    ToolbarmoduleModule,
    MatToolbarModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    RouterModule,
    AdminModule,
    MatTableModule,
    AppuserModule,
    BrowserModule,
  AppRoutingModule,
  HttpClientModule,
  NgChartsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
