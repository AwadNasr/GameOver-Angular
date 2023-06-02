import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private _AuthService:AuthService ,private _FormBuilder:FormBuilder ,private _Router:Router){
  }
  apiMsg:string=''
  isLoading:boolean=false
  registerForm:FormGroup=this._FormBuilder.group({
      name:['',[Validators.required,Validators.maxLength(10)]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required]],
      rePassword:['',[Validators.required]],
      phone:['',[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)]],
  })

  get name():AbstractControl | null{
    return this.registerForm.get('name')
  }
  get phone():AbstractControl | null{
    return this.registerForm.get('phone')
  }
  get email():AbstractControl | null{
    return this.registerForm.get('email')
  }
  get password():AbstractControl | null{
    return this.registerForm.get('password')
  }
  get rePassword():AbstractControl | null{
    return this.registerForm.get('rePassword')
  }

  hanndleRegister(registerForm:FormGroup){
    this.isLoading=true
    this._AuthService.register(registerForm.value).subscribe({
      next:(response)=>
      {
        if(response.message =='success')
        {
          this.isLoading=false
          console.log(response);
          this._Router.navigate(['login'])
        }
      },
      error:(err)=>{
        this.isLoading=false
          this.apiMsg=err.error?.errors?.msg || err.error?.message;
          console.log(this.apiMsg);
      }
    })
  }

}
