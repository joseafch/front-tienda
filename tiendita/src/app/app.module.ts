import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { GalleryComponent } from './shared/components/gallery/gallery.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { ShopingPageComponent } from './pages/shoping-page/shoping-page.component';
import { GestionPageComponent } from './pages/gestion-page/gestion-page.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdatePageComponent } from './pages/update-page/update-page.component';
import {RatingModule} from 'primeng/rating';// importamos esto para poder usar las estrelas como valoracion
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    GalleryComponent,
    HeaderComponent,
    ShopingPageComponent,
    GestionPageComponent,
    FooterComponent,
    UpdatePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule, // formularios reactivos que puedes ponerles datos previos y van actualixzando objectos automaticamente y le van pasando los datos dekl formulario al objecto al enviar el formulario 
  RatingModule // esto es el modulo para importar el ratin por estrellas
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
