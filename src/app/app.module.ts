import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AllComponent } from './components/all/all.component';
import { PlatformsComponent } from './components/platforms/platforms.component';
import { CategoryComponent } from './components/category/category.component';
import { SortByComponent } from './components/sort-by/sort-by.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { HttpClientModule} from '@angular/common/http';
import { GameDetailsComponent } from './components/game-details/game-details.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RouterModule } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    AllComponent,
    PlatformsComponent,
    CategoryComponent,
    SortByComponent,
    NotfoundComponent,
    GameDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CarouselModule,
    RouterModule,
    BrowserAnimationsModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
