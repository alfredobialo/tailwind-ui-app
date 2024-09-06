import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HospityAppComponent } from "../health-app/components/hospity-app.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HospityAppComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tailwind-ui-app';
}
