import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserService } from '../../service/User/user.service';

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
  private userService:UserService = inject(UserService);
  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  togglePasswordVisibility() {
    this.isPasswordHidden = !this.isPasswordHidden;
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.userService.login(email, password).pipe().subscribe({
        next: (data) => {
          if (data) {
            this.router.navigate([`/profil/${data.id}`]);
          } else {
            this.errorMsg = 'Email ou mot de passe incorrect.';
            this.loginError = true;
          }
        },
        error: (error) => {
          this.errorMsg = 'Une erreur est survenue. Veuillez réessayer.' + error.message;
          this.loginError = true;
        }
       
      });
    } else {
      this.errorMsg = 'Veuillez remplir correctement tous les champs du formulaire.';
      this.loginError = true;
    }
  }
  
}
