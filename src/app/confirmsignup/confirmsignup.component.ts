import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmsignup',
  templateUrl: './confirmsignup.component.html',
  styleUrls: ['./confirmsignup.component.css']
})
export class ConfirmsignupComponent implements OnInit {

  constructor(private matDialogRef: MatDialogRef<ConfirmsignupComponent>) { }

  ngOnInit(): void {
  }

  onClose(){
    this.matDialogRef.close('closed');
  }

}
