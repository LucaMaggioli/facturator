import { Injectable } from '@angular/core';
import {Article} from "../shared/models/article";

@Injectable({
  providedIn: 'root'
})
export class ArticleDtoService {

  constructor() { }

  public dataToArticle(dtoArticle: any):Article{
    let article = new Article(dtoArticle['id'],dtoArticle['name'],dtoArticle['photoUrl'],dtoArticle['price'], dtoArticle['description']);
    return article;
  }
}
