import { Component, OnInit } from '@angular/core';
import {FacturatorApiCallService} from "../../services/facturator-api-call.service";
import {Article} from "../../shared/models/article";
import {Client} from "../../shared/models/client";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  articles:any[] = [];
  clients:any[] = [];

  constructor(private _dataService: FacturatorApiCallService) { }

  ngOnInit(): void {
    this._dataService.getArticles().then(data=>{
      console.log(data);
      console.log(JSON.stringify(data));
      //data.forEach(article => this.articles.push(new Article(article['id'], article['name'], article['photoUrl'], article['price'])))
      let stringData = JSON.stringify(data);
      for(let item of data){
        // @ts-ignore
        this.articles.push(new Article(item['Id'], item['Name'], item['PhotoUrl'], item['Price'], item['description']));
      }
      //stringData.forEach(article => this.articles.push(new Article(article['id'], article['name'], article['photoUrl'], article['price'])))
      console.log("articles:");
      console.log(this.articles);
    });
    this._dataService.getCLients().then(data=>{
      console.log("clients:");
      this.clients = data;
      console.log(data);
      console.log(this.clients);
    })
  }

  addClient(newClient:Client){
    this._dataService.addClient(newClient.name!, newClient.address!, newClient.email!);
  }

}
