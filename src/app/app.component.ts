import { Component } from '@angular/core';
import { Usuario } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'clase-05';

  modalVisible = false;

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

  deleteUser(
    index: number,
    arrayName: 'usuariosAprobados' | 'usuariosDesaprobados'
  ): void {
    console.log('Vamos a eliminar el usuario en la posicion: ' + index);

    if (arrayName === 'usuariosAprobados') {
      this.usuariosAprobados = this.usuariosAprobados.filter(
        (el, i) => i !== index
      );
    } else {
      this.usuariosDesaprobados = this.usuariosDesaprobados.filter(
        (el, i) => i !== index
      );
    }
  }
}
