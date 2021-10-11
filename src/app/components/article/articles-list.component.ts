import {Component, Input, OnInit} from '@angular/core';
import {Article} from "../../shared/models/article";
import {articles} from "../../hcData/data";

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css']
})
export class ArticlesListComponent implements OnInit {

  @Input() articles: Article[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges():void{
    console.log("articles in articleComponent");
    console.log(this.articles);
  }

}
