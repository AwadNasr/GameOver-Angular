import { Component } from '@angular/core';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent {
  constructor(private _GamesService:GamesService){}
  games:any[]=[]
  ngOnInit(): void {
    this._GamesService.getAllGames().subscribe({
      next:(response)=>{
        this.games=response.slice(0,20)
        console.log(this.games)
      },
      error:(err)=>{
        console.log(err)
      }
    })

  }
  increaseLength(){
    this.games.length +=20
    this._GamesService.getAllGames().subscribe({
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
