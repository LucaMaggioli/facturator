import { Injectable } from '@angular/core';
import {Article} from "../shared/models/article";

@Injectable({
  providedIn: 'root'
})
export class ArticlesServiceService {

  backendURL: string = "https://localhost:44335/api";

  constructor() { }

  getArticles(){
    let articles:any[] = [];
    fetch(this.backendURL + "/article/", {method: 'GET'}).then(response => response.json()).then((data)=>{
      for (let article of data){
        articles.push(new Article(article["Name"], article["Price"], article["Photo"], article["Description"], article["Id"]));
      }
      //      return data;
    });
    return articles;
    //return articles;
  }
}
