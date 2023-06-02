import { Component } from '@angular/core';
import { GamesService } from 'src/app/services/games.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private _GamesService:GamesService){}
  games:any[]=[]
  
  ngOnInit(): void {
    this._GamesService.getSortedGames('popularity').subscribe({
      next:(response)=>{
        this.games=response.slice(0,6)
        console.log(this.games)
      },
      error:(err)=>console.log(err)
    })
  }

}
