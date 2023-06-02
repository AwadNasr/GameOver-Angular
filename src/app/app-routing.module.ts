import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { AllComponent } from './components/all/all.component';
import { PlatformsComponent } from './components/platforms/platforms.component';
import { CategoryComponent } from './components/category/category.component';
import { SortByComponent } from './components/sort-by/sort-by.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { GameDetailsComponent } from './components/game-details/game-details.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'home',component:HomeComponent},
  {path:'gameDetails/:id',canActivate:[AuthGuard],component:GameDetailsComponent},
  {path:'all',canActivate:[AuthGuard],component:AllComponent},
  {path:'platforms/:platform',canActivate:[AuthGuard],component:PlatformsComponent},
  {path:'category/:category',canActivate:[AuthGuard],component:CategoryComponent},
  {path:'sortBy/:sort',canActivate:[AuthGuard],component:SortByComponent},
  {path:'**',component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
