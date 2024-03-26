import { Component } from '@angular/core';
import { Usuario } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'clase-05';
  usuariosAprobados: Usuario[] = [
    {
      firstName: 'Anna',
      lastName: 'Gonzales',
    },
    {
      firstName: 'Jacke',
      lastName: 'Williams',
    },
  ];
  usuariosDesaprobados: Usuario[] = [
    {
      firstName: 'Cynthia',
      lastName: 'Gonzales',
    },
    {
      firstName: 'Michael',
      lastName: 'Williams',
    },
    {
      firstName: 'Matias',
      lastName: 'Simpson',
    },
  ];

  deleteUser(): void {
    console.log('Recibimos el evento deleteUser');
  }
}
