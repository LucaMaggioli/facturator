import {Component, Input, OnInit} from '@angular/core';
import {Client} from "../../shared/models/client";
import {Bill} from "../../shared/models/bill";
import {Article} from "../../shared/models/article";
import {auditTime} from "rxjs/operators";
import {ArticlesServiceService} from "../../services/articles-service.service";
import {ClientService} from "../../services/client.service";

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

  articlesSelected:boolean = false;
  clientSelected:boolean = false;

  constructor(
    private _ArticleService: ArticlesServiceService,
    private _ClientService: ClientService,
  ) { }

  ngOnInit() {
    console.log("getting client and articles from billCreation")
    this.clients = this._ClientService.getClients();
    this.articles = this._ArticleService.getArticles();
    console.log("Articles")

    console.log(this.articles);
    console.log("Clients")
    console.log(this.clients);
  }

  setBillClient(client:Client){
    this.bill.client = client;
    this.clientSelected = true;
    this.nextStep();
  }

  addRemoveArticleToBill(article:Article){
    let index = this.bill.articles.indexOf(article);
    if (index > -1){
      this.bill.articles.splice(index, 1);
    }
    else {
      this.bill.articles.push(article);
    }
    this.articlesSelected = this.bill.articles.length > 0;
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
