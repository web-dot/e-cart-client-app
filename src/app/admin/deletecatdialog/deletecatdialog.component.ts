import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-deletecatdialog',
  templateUrl: './deletecatdialog.component.html',
  styleUrls: ['./deletecatdialog.component.css']
})
export class DeletecatdialogComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<DeletecatdialogComponent>
  ) { }

  ngOnInit(): void {
  }


  onClose(){
    this.dialogRef.close('closed');
  }

}
