import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Article} from "../../shared/models/article";
import {articles} from "../../hcData/data";
import {Client} from "../../shared/models/client";

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css']
})
export class ArticlesListComponent implements OnInit {

  @Input() articles: Article[] = [];
  @Input() selectionMode:boolean = false;
  @Output() selUnselectArticle = new EventEmitter<Article>();

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges():void{
  }

  selUnselArticle(article:Article){
    this.selUnselectArticle.emit(article);
  }

}
