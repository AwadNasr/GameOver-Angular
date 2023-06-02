import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private _HttpClient:HttpClient ) { }

  headers :any= {'X-RapidAPI-Key':
'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68',
 'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'}

 getAllGames():Observable <any>
 {
  return this._HttpClient.get(`https://free-to-play-games-database.p.rapidapi.com/api/games`,{
    headers:this.headers
  })
 }
 getGamesByCategory(category:any):Observable <any>
 {
  return this._HttpClient.get(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`,{
    headers:this.headers
  })
 }
 getSortedGames(sortby:any):Observable <any>
 {
  return this._HttpClient.get(`https://free-to-play-games-database.p.rapidapi.com/api/games?sort=${sortby}`,{
    headers:this.headers
  })
 }
 getGameDetails(id:any):Observable <any>
 {
  return this._HttpClient.get(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,{
    headers:this.headers
  })
 }
 getGamesByPlatform(platform:any):Observable <any>
 {
  return this._HttpClient.get(`https://free-to-play-games-database.p.rapidapi.com/api/games?platform=${platform}`,{
    headers:this.headers
  })
 }








}
