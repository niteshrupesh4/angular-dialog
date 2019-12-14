import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/_service/data.service";

@Component({
  selector: "app-child2",
  templateUrl: "./child2.component.html",
  styleUrls: ["./child2.component.scss"]
})
export class Child2Component implements OnInit {
  message: number;
  constructor(private _dataService: DataService) {}
  showData: any[] = [];
  ngOnInit() {
    this.getCallMethod();
  }

  private getCallMethod() {
    this._dataService.getData(this.message).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }
}
