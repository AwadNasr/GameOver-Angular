import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from 'src/app/services/games.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']
})
export class GameDetailsComponent {
  constructor(private _GamesService:GamesService,private _ActivatedRoute:ActivatedRoute){}
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    autoplay:true,
    autoplaySpeed:2000,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
    },
    nav: true
  }
  gameId:any
  gameDetails:any
  images:any[]=[]
  ngOnInit(): void {

    this._ActivatedRoute.paramMap.subscribe({
      next:(id)=>{
        this.gameId=id.get('id')
      console.log(this.gameId)
      }
    })
    this._GamesService.getGameDetails(this.gameId).subscribe({
    next:(response)=>{
      this.gameDetails=response
      this.images=response.screenshots
      console.log(response)}
    })
  }

}
