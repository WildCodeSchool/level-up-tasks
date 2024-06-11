import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

import { TaskPageComponent } from './pages/task-page/task-page.component';
import { TeamsComponent } from './pages/teams/teams.component';
import { UserProfilComponent } from './pages/user-profil/user-profil.component';

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
    path:'profil',
    component: UserProfilComponent
  }
];
