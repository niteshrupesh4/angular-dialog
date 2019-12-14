import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/_service/data.service";
import { MatDialog } from '@angular/material';
import { ChildDialogComponent } from '../child-dialog/child-dialog.component';

@Component({
  selector: "app-parent-dialog",
  templateUrl: "./parent-dialog.component.html",
  styleUrls: ["./parent-dialog.component.scss"]
})
export class ParentDialogComponent implements OnInit {

  dataList: any;
  animal: string;
  name: string;
  constructor(
    private _dataService: DataService,
    public dialog: MatDialog
    ) {}


  ngOnInit() {
    this._dataService.getList().subscribe(
      res => {
        this.dataList = res;
      },
      error => console.log(error)
    );
  }

  openDialog(data: any): void {
    const dialogRef = this.dialog.open(ChildDialogComponent, {
      width: '35%',
      data: {data}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = "call back";
    });
  }
}
