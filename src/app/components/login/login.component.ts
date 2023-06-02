import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private _AuthService:AuthService ,private _FormBuilder:FormBuilder ,private _Router:Router){
  }
  apiMsg:string=''
  isLoading:boolean=false
  loginForm:FormGroup=this._FormBuilder.group({
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required]]
  })
  get email():AbstractControl | null{
    return this.loginForm.get('email')
  }
  get password():AbstractControl | null{
    return this.loginForm.get('password')
  }
  hanndlelogin(loginForm:FormGroup){
    this.isLoading=true
    this._AuthService.login(loginForm.value).subscribe({
      next:(response)=>
      {
        console.log(response);
        if(response.message =='success')
        {
          this.isLoading=false
          localStorage.setItem('userToken',response.token)
          this._AuthService.decode()
          this._Router.navigate(['/home'])
        }
      },
      error:(err)=>{
        this.apiMsg=err.error.message
        this.isLoading=false
        console.log(this.apiMsg);

      }
    })
  }


}
