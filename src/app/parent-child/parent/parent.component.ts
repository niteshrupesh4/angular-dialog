import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { Child1Component } from '../child1/child1.component';
import { Child2Component } from '../child2/child2.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  title = 'app';
  componentRef: any;
  @ViewChild('loadComponent', { read: ViewContainerRef, static: false }) entry: ViewContainerRef;
  constructor(private resolver: ComponentFactoryResolver) { }
  
   data = [
    {
      "Id": 1,
      "Name": "child 1"
    },
    {
      "Id": 2,
      "Name": "child 2"
    }
  ];

  createComponent(Id: number) {
    this.entry.clear();
    if (Id == 1) {
      const factory = this.resolver.resolveComponentFactory(Child1Component);
      this.componentRef = this.entry.createComponent(factory);
      this.componentRef.instance.message = 1;
    } else if (Id == 2) {
      const factory = this.resolver.resolveComponentFactory(Child2Component);
      this.componentRef = this.entry.createComponent(factory);
      this.componentRef.instance.message = 2;
    } 
   
  }

  selectName(id : number) {
    this.createComponent(id);
  }
  destroyComponent() {
    this.componentRef.destroy();
  }

  ngOnInit() {
  }

}