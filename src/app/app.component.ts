import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
<<<<<<< HEAD
=======
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
>>>>>>> 51e8e4f21f1ab7d3677a6a22771f774e8dfdfbf7

@Component({
  selector: 'app-root',
  standalone: true,
<<<<<<< HEAD
  imports: [RouterOutlet],
=======
  imports: [RouterOutlet,NavBarComponent,FooterComponent],
>>>>>>> 51e8e4f21f1ab7d3677a6a22771f774e8dfdfbf7
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-17-project-template';
}
