import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Usuario, Producto } from '../../models';
// import { Producto } from '../../models/producto.model';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrl: './lista-usuarios.component.scss',
})
export class ListaUsuariosComponent {
  @Input() // Definimos que el valor de esta propiedad vendra de fuera de este componente
  usuarios: Usuario[] = [];

  @Output()
  deleteUser = new EventEmitter();
}
