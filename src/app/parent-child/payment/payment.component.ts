import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-payment",
  templateUrl: "./payment.component.html",
  styleUrls: ["./payment.component.css"]
})
export class PaymentComponent implements OnInit {
  constructor(private http: HttpClient) {}

  // I have all below fields values
  paytm = {
    MID: "xxxxx", // paytm provide
    WEBSITE: "WEBSTAGING", // paytm provide
    INDUSTRY_TYPE_ID: "Retail", // paytm provide
    CHANNEL_ID: "WEB", // paytm provide
    ORDER_ID: "xxxxx", // unique id
    CUST_ID: "xxxxx", // customer id
    MOBILE_NO: "xxxx", // customer mobile number
    EMAIL: "xxxx", // customer email
    TXN_AMOUNT: "10.00", // transaction amount
    CALLBACK_URL: "http://localhost:8080/paymentverity" // Call back URL that i want to redirect after payment fail or success
  };

  submitForm() {
    // I will do API call and will get CHECKSUMHASH.
    this.http.get("http://localhost:8080/payment").subscribe((res: any) => {
      debugger;
      // As per my backend i will get checksumhash under res.data
      this.paytm["CHECKSUMHASH"] = res.data;
      // than i will create form
      //  this.createPaytmForm();
    });
  }

  createPaytmForm() {
    const my_form: any = document.createElement("form");
    my_form.name = "paytm_form";
    my_form.method = "post";
    my_form.action = "https://securegw-stage.paytm.in/order/process";

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
