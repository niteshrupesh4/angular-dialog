import {Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver} from '@angular/core';
import { Child1Component } from '../child1/child1.component';
import { Child2Component } from '../child2/child2.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
componentRef: any;
  @ViewChild('loadComponent', { read: ViewContainerRef, static: false }) entry: ViewContainerRef;
  isAction: boolean = true;
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

  

  onClick(){
    this.isAction = false;
  }

  handler:any = null;
  ngOnInit() {
  
    this.loadStripe();
  }
  
  pay(amount) {    
  
    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_aeUUjYYcx4XNfKVW60pmHTtI',
      locale: 'auto',
      token: function (token: any) {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
        console.log(token)
        alert('Token Created!!');
      }
    });
  
    handler.open({
      name: 'Angular 8',
      description: 'Demo stripe pay',
      amount: amount * 100
    });
  
  }
  
  loadStripe() {
      
    if(!window.document.getElementById('stripe-script')) {
      var s = window.document.createElement("script");
      s.id = "stripe-script";
      s.type = "text/javascript";
      s.src = "https://checkout.stripe.com/checkout.js";
      s.onload = () => {
        this.handler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_aeUUjYYcx4XNfKVW60pmHTtI',
          locale: 'auto',
          token: function (token: any) {
            // You can access the token ID with `token.id`.
            // Get the token ID to your server-side code for use.
            console.log(token)
            alert('Payment Success!!');
          }
        });
      }
        
      window.document.body.appendChild(s);
    }
  }

}