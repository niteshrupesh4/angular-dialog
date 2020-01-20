import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";
@Component({
  selector: "app-child1",
  templateUrl: "./child1.component.html",
  styleUrls: ["./child1.component.css"]
})
export class Child1Component implements OnInit {
  constructor(private location: Location) {}
  count = 0;
  ngOnInit() {}

  onClick() {
    this.location.replaceState("/some/newstate/" + this.count++);
  }
}
