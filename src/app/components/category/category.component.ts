import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from 'src/app/services/games.service';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  constructor(private _GamesService:GamesService ,private _ActivatedRoute:ActivatedRoute){
  }
  param:any
  games:any[]=[]
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next:(params)=>{
        this.param=params.get('category')
        console.log(this.param)
        this.getgames()
      }
    })
  }
  getgames(){
    this._GamesService.getGamesByCategory(this.param).subscribe({
      next:(response)=>{
        this.games=response.splice(0,20)
        console.log(this.games);
      }
    })
  }
  increaseLength(){
    this.games.length +=20
    this._GamesService.getGamesByCategory(this.param).subscribe({
      next:(response)=>{
        this.games=response.slice(0,this.games.length)
        console.log(this.games)
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }

}
