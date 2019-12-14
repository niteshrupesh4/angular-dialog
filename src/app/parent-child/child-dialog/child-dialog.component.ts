import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-child-dialog',
  templateUrl: './child-dialog.component.html',
  styleUrls: ['./child-dialog.component.css']
})
export class ChildDialogComponent implements OnInit {
 editForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<ChildDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.createForm();
    console.log(this.data);
    this.setEditValue();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  

  createForm(){
    this.editForm = this._formBuilder.group({
      name: ['',[Validators.required]],
      gender: ['',[Validators.required]],
      email: ['',[Validators.required, Validators.email]],
      phone: ['',[Validators.required]],
      picture: ['',[Validators.required]],
    });
  }

  setEditValue(){
    this.editForm.patchValue({
      name: this.data.data.name,
      gender: this.data.data.gender,
      email: this.data.data.email,
      phone: this.data.data.phone,
      picture: this.data.data.picture,
    })
  }


}