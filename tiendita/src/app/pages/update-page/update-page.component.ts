import { ActivatedRoute } from '@angular/router';
import { ArticlesService } from './../../shared/services/articles.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-update-page',
  templateUrl: './update-page.component.html',
  styleUrls: ['./update-page.component.scss']
})
export class UpdatePageComponent {
  id!:number

  article?:any 
  
  productForm!: FormGroup;//a la hora de crear un formulario hay q crear 1º un formgrup
  

  constructor(private articlesService : ArticlesService,private activatedRoute:ActivatedRoute,
    private formBuilder: FormBuilder){} //private activatedRoute:ActibateRoute
 //2º crear un formBuilder
 
   ngOnInit(): void {
     this.activatedRoute.paramMap.subscribe(params =>{
       this.id = Number(params.get('id'))
     }) // esto hace que uno pueda optener un dato por su id
     this.articlesService.getArticle(this.id).subscribe((res:any)=>{
       console.log(res);
       this.article= res 
       this.productForm = this.formBuilder.group({ //aqui se dice q cosas tendra nuestro builder
         name:[this.article.name,[Validators.required]], //se le pueden poner validadores como ejemplo de q sea requerido llenar el input solicitado
         price:[this.article.price,[Validators.required]],
         description:[this.article.description,[Validators.required]],
         image:[this.article.image,[Validators.required]],
         stars:[this.article.stars,[ Validators.max(5)]]
             });
             this.productForm.valueChanges.subscribe(valores=>{
              this.article = valores
             })
       //con esto llamo a la funcion que me devolvera el producto con su id ya con un valor de la anterior operacion
     });
 //2º crear un formBuilder
  // estre formgrup que hemos declarado es un formbuilder gruo()   que tiene sto datos 

   
    // estos datos se asocian al imput con formCOntrolname='nombre que se le da en el form builder por ejemplo name'
 
    //si queremos que los datos se vayan imprimiendo en pantalla mientras los escribimos hacemos lo siguientee
    this.productForm.valueChanges.subscribe(valores=>{
     this.article = valores
    })
   }
 
   onSubmit(){//nos creamos una funcion onsumit que recojera los valores para usarlos

//  this.productForm.reset()// esto es para resetear el formulario
 this.articlesService.putProduct(this.article, this.id).subscribe(up=>{
   alert('datos actualizados')
 })
 // this.productForm.reset()// esto es para resetear el formulario
 // this.articlesService.putProduct(this.article, this.id).subscribe(up=>{
 //   alert('datos actualizados')
 // })
   } 
  
}

