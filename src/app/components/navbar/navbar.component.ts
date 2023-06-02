import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private _AuthService:AuthService){}
  isLogin:boolean=false
  ngOnInit(): void {
    this._AuthService.currentUser.subscribe({
      next:()=>{
        if(this._AuthService.currentUser.getValue() !==null){
          this.isLogin=true
        }else{
          this.isLogin=false
        }
      }
    })

  }
  logout(){
    this._AuthService.logout()
  }


}
