import { ArticlesService } from './../../shared/services/articles.service';
import { Component } from '@angular/core';
import {  OnInit } from '@angular/core';

@Component({
  selector: 'app-shoping-page',
  templateUrl: './shoping-page.component.html',
  styleUrls: ['./shoping-page.component.scss']
})
export class ShopingPageComponent implements OnInit  {
 
  constructor (private articlesService: ArticlesService ){
  }
  articles:any
ngOnInit(){
console.log('hola');
this.articlesService.getArticles().subscribe((res:any) =>{
  console.log(res);
  this.articles= res
  console.log(this.articles);
  
  
})

}

}
