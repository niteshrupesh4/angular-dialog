import { Component, OnInit } from "@angular/core";
import { IDropdownSettings } from "ng-multiselect-dropdown";
import { FormBuilder, FormGroup } from "@angular/forms";
@Component({
  selector: "app-multiselect-dropdown",
  templateUrl: "./multiselect-dropdown.component.html",
  styleUrls: ["./multiselect-dropdown.component.css"]
})
export class MultiselectDropdownComponent implements OnInit {
  myForm: FormGroup;
  dropdownList = [];
  selectedItems = [];
  dropdownSettings: IDropdownSettings;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.dropdownList = [{id:1,name:"Paerdegat Avenue"},{id:2,name:"Butler Street"},{id:3,name:"Thomas Street"},{id:4,name:"Powell Street"},{id:5,name:"Knight Court"},{id:6,name:"Java Street"},{id:7,name:"Manor Court"},{id:8,name:"Pacific Street"},{id:9,name:"Tehama Street"},{id:10,name:"Covert Street"},{id:11,name:"Plymouth Street"},{id:12,name:"Mill Road"},{id:13,name:"Himrod Street"},{id:14,name:"India Street"},{id:15,name:"Applegate Court"},{id:16,name:"Montauk Court"},{id:17,name:"Bowery Street"}];
    this.selectedItems = [
      { id: 3, name: "Thomas Street" },
      { id: 10, name: "Covert Street" }
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: "id",
      textField: "name",
      selectAllText: "Select All",
      unSelectAllText: "UnSelect All",
      // itemsShowLimit: 3,
      allowSearchFilter: false
    };
    this.myForm = this.fb.group({
      types: []
    });
  }

  onItemSelect(item: any) {
    console.log(item);
    console.log("Form value : ",this.myForm.value);
  }
  onSelectAll(items: any) {
    console.log(items);
    console.log("Form value : ",this.myForm.value);
  }

  onSubmit(){
   console.log("Form value : ",this.myForm.value);
  }
}
