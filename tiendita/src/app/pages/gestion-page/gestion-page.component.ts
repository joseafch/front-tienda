import { ArticlesService } from './../../shared/services/articles.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-gestion-page',
  templateUrl: './gestion-page.component.html',
  styleUrls: ['./gestion-page.component.scss']
})
export class GestionPageComponent implements OnInit {

  id!:number

  article?:any 
  
  productForm!: FormGroup;//a la hora de crear un formulario hay q crear 1º un formgrup
  
  newProduct:any = {
    name:'', 
  price:'',
  description:'',
  image:'',
  stars:0,
  }



  constructor(private articlesService : ArticlesService,
    private activatedRoute:ActivatedRoute,
    private formBuilder: FormBuilder){} //private activatedRoute:ActibateRoute
//2º crear un formBuilder

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params =>{
      this.id = Number(params.get('id'))
    }) // esto hace que uno pueda optener un dato por su id
    this.articlesService.getArticle(this.id).subscribe((res:any)=>{
      console.log(res);
      this.article= res 
      //con esto llamo a la funcion que me devolvera el producto con su id ya con un valor de la anterior operacion
    });
//2º crear un formBuilder
 // estre formgrup que hemos declarado es un formbuilder gruo()   que tiene sto datos 
    this.productForm = this.formBuilder.group({ //aqui se dice q cosas tendra nuestro builder
name:['',[Validators.required]], //se le pueden poner validadores como ejemplo de q sea requerido llenar el input solicitado
price:['',[Validators.required]],
description:['',[Validators.required]],
image:['',[Validators.required]],
stars:[0,[ Validators.max(5)]]
    });
  
   // estos datos se asocian al imput con formCOntrolname='nombre que se le da en el form builder por ejemplo name'

   //si queremos que los datos se vayan imprimiendo en pantalla mientras los escribimos hacemos lo siguientee
   this.productForm.valueChanges.subscribe(valores=>{
    this.newProduct = valores
   })
  }

  onSubmit(){//nos creamos una funcion onsumit que recojera los valores para usarlos
console.log(this.productForm.value);
console.log(this.newProduct);
this.articlesService.postProduct(this.newProduct).subscribe((data)=>{ // con esto haremos un post
  console.log('datos subidos');
  alert('articulo subido')
 
})
// this.productForm.reset()// esto es para resetear el formulario
// this.articlesService.putProduct(this.article, this.id).subscribe(up=>{
//   alert('datos actualizados')
// })
  } 
  onUpdate(){
    this.productForm.reset()// esto es para resetear el formulario
    this.articlesService.putProduct(this.article, this.id).subscribe(up=>{
      alert('datos')
    })
  }
}
