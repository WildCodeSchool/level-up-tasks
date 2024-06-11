import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

import { TaskPageComponent } from './pages/task-page/task-page.component';

import { SignupComponent} from './pages/signup/signup.component';
import {LoginComponent } from './pages/login/login.component';

import { TeamsComponent } from './pages/teams/teams.component';


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
  },
  {
    path: 'inscription',
    component: SignupComponent,
  },
  {
    path: 'connexion',
    component: LoginComponent,
  }
];
