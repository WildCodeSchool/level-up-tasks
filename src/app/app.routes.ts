import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

import { TaskPageComponent } from './pages/task-page/task-page.component';

import { InscriptionComponent } from './pages/inscription/inscription.component';
import { ConnexionComponent } from './pages/connexion/connexion.component';

import { TeamsComponent } from './pages/teams/teams.component';


export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },

  {
    path: 'teams',
    component: TeamsComponent,
  },
  {
    path: 'tasks',
    component: TaskPageComponent,
  },
  {
    path: 'inscription',
    component: InscriptionComponent,
  },
  {
    path: 'connexion',
    component: ConnexionComponent,
  }
];
