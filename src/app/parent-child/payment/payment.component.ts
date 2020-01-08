import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-payment",
  templateUrl: "./payment.component.html",
  styleUrls: ["./payment.component.css"]
})
export class PaymentComponent implements OnInit {
  constructor(private http: HttpClient) {
    this.http
      .get("http://localhost:3000/paywithpaytm?amount=50")
      .subscribe((res: any) => {
        this.paytm = res.result;
        // than i will create form
        this.createPaytmForm();
      });
  }

  // I have all below fields values
  paytm = [];


  createPaytmForm() {
    const my_form: any = document.createElement("form");
    my_form.name = "paytm_form";
    my_form.method = "post";
    my_form.action = "https://securegw-stage.paytm.in/theia/processTransaction";

    const myParams = Object.keys(this.paytm);
    for (let i = 0; i < myParams.length; i++) {
      const key = myParams[i];
      let my_tb: any = document.createElement("input");
      my_tb.type = "hidden";
      my_tb.name = key;
      my_tb.value = this.paytm[key];
      my_form.appendChild(my_tb);
    }

    document.body.appendChild(my_form);
    my_form.submit();
    // after click will fire you will redirect to paytm payment page.
    // after complete or fail transaction you will redirect to your CALLBACK URL
  }
}
