import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NotasComponent} from './notas/notas.component';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NotasComponent, MatButton],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EntregaUT4';
}
