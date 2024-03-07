import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  link:any = "https://back-tienda-five.vercel.app/products"
  constructor(private http: HttpClient) { }
  
  id!:any
  getArticles(){

    return this.http.get(this.link)
  }
  getArticle(id:number){

    return this.http.get(`${this.link}/${id}`) // aqui ortendremos un get por id
  }
 postProduct(product:any){
  return this.http.post(this.link,product)
 } // aqui haremos un funcion para hacer un post
 
 putProduct(product:any, id:number){
  return this.http.put(`${this.link}/${id}`,product)
 } // aqui haremos un funcion para hacer un post
}
