import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  
  constructor(private http: HttpClient) { }
  
  id!:any
  getArticles(){

    return this.http.get('http://localhost:3000/products')
  }
  getArticle(id:number){

    return this.http.get(`${'http://localhost:3000/products'}/${id}`) // aqui ortendremos un get por id
  }
 postProduct(product:any){
  return this.http.post('http://localhost:3000/products',product)
 } // aqui haremos un funcion para hacer un post
 
 putProduct(product:any, id:number){
  return this.http.put(`http://localhost:3000/products/${id}`,product)
 } // aqui haremos un funcion para hacer un post
}
