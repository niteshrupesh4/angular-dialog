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
  tableArray = [
    {
      id: "5dff230c7686b09454cd18d3",
      company: "COFINE",
      contect: "(944) 570-3058",
      country: "Oklahoma"
    },
    {
      id: "5dff230c8f930c84ede6b151",
      company: "YURTURE",
      contect: "(996) 510-3833",
      country: "Palau"
    },
    {
      id: "5dff230c1c93b88f1efa2a0d",
      company: "CORPORANA",
      contect: "(890) 565-3712",
      country: "West Virginia"
    },
    {
      id: "5dff230cb369d2f5f0b7e2ae",
      company: "GENMY",
      contect: "(921) 414-3978",
      country: "Kentucky"
    },
    {
      id: "5dff230c8e3ca72305bf952d",
      company: "SCENTY",
      contect: "(955) 435-2759",
      country: "New York"
    },
    {
      id: "5dff230cd5d9fd295669d378",
      company: "EXODOC",
      contect: "(927) 563-3927",
      country: "Maine"
    }
  ];

  ngOnInit() {
    this.dropdownList = [
      { id: 1, name: "Paerdegat Avenue" },
      { id: 2, name: "Butler Street" },
      { id: 3, name: "Thomas Street" },
      { id: 4, name: "Powell Street" },
      { id: 5, name: "Knight Court" },
      { id: 6, name: "Java Street" },
      { id: 7, name: "Manor Court" },
      { id: 8, name: "Pacific Street" },
      { id: 9, name: "Tehama Street" },
      { id: 10, name: "Covert Street" },
      { id: 11, name: "Plymouth Street" },
      { id: 12, name: "Mill Road" },
      { id: 13, name: "Himrod Street" },
      { id: 14, name: "India Street" },
      { id: 15, name: "Applegate Court" },
      { id: 16, name: "Montauk Court" },
      { id: 17, name: "Bowery Street" }
    ];
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
    console.log("Form value : ", this.myForm.value);
  }
  onSelectAll(items: any) {
    console.log(items);
    console.log("Form value : ", this.myForm.value);
  }

  onSubmit() {
    console.log("Form value : ", this.myForm.value);
  }

  onView(id) {
    alert("View details: " + id);
  }
  onEdit(id) {
    alert("Edit details: " + id);
  }
  onSetting(id) {
    alert("User List: " + id);
  }
  onBlock(id) {
    alert("Block details: " + id);
  }
}
