import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { User } from '../../model/user/user';
import { UserService } from '../../service/User/user.service';
import { UserInfo } from '../../model/user/token';
import { TokenService } from '../../service/User/token.service';
import { AuthenticationService } from '../../service/User/authentication.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  userService:UserService = inject(UserService);
  users:User[] = [];
  signupForm: FormGroup;
  singUpError = false;
  errorMsg = '';
  userInfo:UserInfo | null = null;
  tokenService = inject(TokenService);
  authService = inject(AuthenticationService);

  constructor(private fb: FormBuilder, private router: Router) {
    this.signupForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, { validator: this.passwordMatchValidator });
  }
  ngOnInit():void{
    this.userInfo= this.tokenService.getUserInfo();
    if(this.userInfo && this.authService.isLoggedIn()){
        this.router.navigate([`/profile/${this.userInfo.id}`]); 
    }
  
    this.userService.getAll().subscribe((data) => {
      this.users = data;
    });
  }
  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }
 
  onSubmit() {
    if (this.signupForm.valid) {
      const { firstName, lastName, email, password } = this.signupForm.value;
      const user = new User(0,firstName, lastName, email, password,[],'https://t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg',0,0);
      this.userService.save(user).pipe().subscribe({
        next: (data) =>{
          this.router.navigate(['/connexion']);

        }
      });
      this.signupForm.reset();
    } else {
      (error: any) => {
       this.errorMsg = "Veuillez remplir correctement tous les champs du formulaire." + error.message;
        this.singUpError = true;
      }
    }
  }
}

