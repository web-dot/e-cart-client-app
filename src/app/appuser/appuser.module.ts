import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppuserRoutingModule } from './appuser-routing.module';
import { UserhomeComponent } from './userhome/userhome.component';
import { UsertoolbarComponent } from './usertoolbar/usertoolbar.component';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { SignupdialogComponent } from './signupdialog/signupdialog.component';
import { LogindialogComponent } from './logindialog/logindialog.component';
import { UserlandingComponent } from './userlanding/userlanding.component';

@NgModule({
  declarations: [
    UserhomeComponent,
    UsertoolbarComponent,
    SignupdialogComponent,
    LogindialogComponent
  ],
  imports: [
    CommonModule,
    AppuserRoutingModule,
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
    MatTableModule
  ]
})
export class AppuserModule { }
