import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthenticationService } from '../../service/User/authentication.service';
import { TokenService } from '../../service/User/token.service';
import { UserInfo } from '../../model/user/token';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent {
  loginForm: FormGroup;
  isPasswordHidden = true;
  errorMsg='';
  loginError = false;
  userInfo:UserInfo | null = null;
  private authService:AuthenticationService = inject(AuthenticationService);
  private tokenService = inject(TokenService);
  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  togglePasswordVisibility() {
    this.isPasswordHidden = !this.isPasswordHidden;
  }
  ngOnInit():void{
    if(this.tokenService.getUserInfo() != null){
    this.userInfo= this.tokenService.getUserInfo();
    }
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.authService.login( email, password).subscribe({
        next: () => {
            this.router.navigate([`/profile/${this.userInfo!.id}`]);
        },
        error: err => this.errorMsg = 'Email ou mot de passse incorret'
      });
    } else {
      this.errorMsg = 'Veuillez remplir correctement tous les champs du formulaire.';
      this.loginError = true;
    }
  }
  
}
