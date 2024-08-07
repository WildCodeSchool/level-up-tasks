
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TaskPageComponent } from './pages/task-page/task-page.component';
import { SignupComponent} from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { TeamsComponent } from './pages/teams/teams.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { UserProfilComponent } from './pages/user-profil/user-profil.component';
import { AuthGuard } from './service/guard/auth.guard';


export const routes: Routes = [
  {
    path: 'accueil',
    component: HomeComponent,
  },
  {
    path: '',
    redirectTo: '/accueil',
    pathMatch: 'full',
  },
  
  {
    path: 'teams',
    component: TeamsComponent,
  },
  {
    path: 'taches',
    component: TaskPageComponent,
    canActivate : [AuthGuard]
  },

  {
    path: 'inscription',
    component: SignupComponent,
  },
  {
    path: 'connexion',
    component: LoginComponent,
  },
  
  { path: 'mot-de-passe-oublie', 
    component: ForgotPasswordComponent
   },

  {
    path:'profile/:id',
    component: UserProfilComponent,
    canActivate : [AuthGuard]
  }


];
