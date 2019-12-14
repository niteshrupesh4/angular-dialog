import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ChildDialogComponent } from '../child-dialog/child-dialog.component';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-parent-dialog',
  templateUrl: './parent-dialog.component.html',
  styleUrls: ['./parent-dialog.component.css']
})
export class ParentDialogComponent implements OnInit {
  localUrl = "https://jsonplaceholder.typicode.com/posts/";
dataList: any;
  animal: string;
  name: string;
  constructor(
    public dialog: MatDialog,
    private http: HttpClient
    ) {}
 getData(data: number) {
    return this.http.get(this.localUrl + data);
  }

  getList(){
    return this.http.get("https://api.myjson.com/bins/lgzfc");
  }

  ngOnInit() {
    this.getList().subscribe(
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
    });
  }

}