import { UpdatePageComponent } from './pages/update-page/update-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ShopingPageComponent } from './pages/shoping-page/shoping-page.component';
import { GestionPageComponent } from './pages/gestion-page/gestion-page.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {path:"", component : HomePageComponent },
  {path:"shoping", component : ShopingPageComponent },
  {path:"shoping/:id", component : ShopingPageComponent },
  {path:"gestion", component : GestionPageComponent },
  {path:"gestion/:id", component : GestionPageComponent },
  {path:"update/:id", component : UpdatePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
