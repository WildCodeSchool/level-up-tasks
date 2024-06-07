import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
<<<<<<< HEAD
import { ItemsComponent } from './pages/items/items.component';
=======

import { TaskPageComponent } from './pages/task-page/task-page.component';
import { TeamsComponent } from './pages/teams/teams.component';
>>>>>>> 51e8e4f21f1ab7d3677a6a22771f774e8dfdfbf7

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
<<<<<<< HEAD
  {
    path: 'items',
    component: ItemsComponent,
=======

  {
    path: 'teams',
    component: TeamsComponent,
  },
  {
    path: 'tasks',
    component: TaskPageComponent,
>>>>>>> 51e8e4f21f1ab7d3677a6a22771f774e8dfdfbf7
  },
];
