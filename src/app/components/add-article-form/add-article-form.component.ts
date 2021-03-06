import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {Client} from "../../shared/models/client";
import {Article} from "../../shared/models/article";

@Component({
  selector: 'app-add-article-form',
  templateUrl: './add-article-form.component.html',
  styleUrls: ['./add-article-form.component.css']
})
export class AddArticleFormComponent implements OnInit {


  name = new FormControl('', [Validators.required]);
  price = new FormControl('', [Validators.required]);
  photoLink = new FormControl('');
  description = new FormControl('');
  tempoMessage:any = null;
  newArticle:any;

  formOpened:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }

  openForm(){
    this.formOpened = true;
  }

  isValidForm():boolean{
    return this.photoLink.valid && this.name.valid && this.price.valid && this.description.valid;
  }

  sendNewArticleEvent() {
    let newArticle = new Article(this.name.value, this.price.value, this.photoLink.value, this.description.value)
    this.newArticle.emit(newArticle);
    this.setTemporaryMessage('Client added successfully !', true);
    this.resetForm();
  }

  resetForm():void{
    this.name.reset();
    this.price.reset();
    this.photoLink.reset();
    this.description.reset();
  }

  setTemporaryMessage(tempoMessage:string, succes:boolean){
    this.tempoMessage = tempoMessage;
    this.sleep(3000).then(()=>{this.tempoMessage = null});
  }

  sleep(ms:number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
