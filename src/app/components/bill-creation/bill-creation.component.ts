import {Component, Input, OnInit} from '@angular/core';
import {Client} from "../../shared/models/client";
import {Bill} from "../../shared/models/bill";
import {Article} from "../../shared/models/article";
import {auditTime} from "rxjs/operators";

@Component({
  selector: 'app-bill-creation',
  templateUrl: './bill-creation.component.html',
  styleUrls: ['./bill-creation.component.css']
})
export class BillCreationComponent implements OnInit {
  @Input() clients:any;
  @Input() articles:any;

  bill:Bill = new Bill();

  step = 0;

  constructor() { }

  ngOnInit(): void {
  }

  setBillClient(client:Client){
    this.bill.client = client;
    this.nextStep();
  }

  addRemoveArticleToBill(article:Article){
    let index = this.bill.articles.indexOf(article);
    if (index > -1){
      this.bill.articles.splice(index, 1);
    }
    else {
      this.bill.articles.push(article)
    }
  }


  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

}
