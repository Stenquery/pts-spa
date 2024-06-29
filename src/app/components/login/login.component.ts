import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private formBuilder: FormBuilder = inject(FormBuilder);
  private authService:AuthService = inject(AuthService);
  private toastrService:ToastrService=inject(ToastrService);
  private router=inject(Router);
  loginForm: FormGroup;
  constructor() {
    this.createLoginForm();
  }
  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    });
  }
  login() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe((response)=>{
        if (response.success) {
          localStorage.setItem("token",response.data.token);
          this.toastrService.info(response.message);
          this.router.navigateByUrl('works');
        }
      },(responseError)=>{
        console.log(responseError);
      });
    }
  }
}
