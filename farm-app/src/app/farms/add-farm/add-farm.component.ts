import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-farm',
  templateUrl: './add-farm.component.html',
  styleUrls: ['./add-farm.component.css']
})
export class AddFarmComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<AddFarmComponent>) { }

  ngOnInit(): void {
  }

  onCancel() {
    this.dialogRef.close();
  }
}
