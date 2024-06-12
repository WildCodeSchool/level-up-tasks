import { Routes , RouterModule} from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TaskPageComponent } from './pages/task-page/task-page.component';
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
    path: 'task-page',
    component: TaskPageComponent,
  },
 
  

];
