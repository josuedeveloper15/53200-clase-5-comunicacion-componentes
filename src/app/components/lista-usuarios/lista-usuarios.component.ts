import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Usuario, Producto } from '../../models';
// import { Producto } from '../../models/producto.model';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrl: './lista-usuarios.component.scss',
})
export class ListaUsuariosComponent implements AfterViewInit, OnInit {
  @ViewChild('myList')
  myList?: ElementRef;

  constructor() {
    console.log('Contructor', this.myList);
  }

  ngOnInit(): void {
    console.log('OnInit', this.myList);
  }

  // AFTER VIEW INIT // DESPUES DE QUE LA VISTA SE INICIE
  ngAfterViewInit(): void {
    console.log('After view init', this.myList);
    // throw new Error('Method not implemented.');
  }

  @Input() // Definimos que el valor de esta propiedad vendra de fuera de este componente
  usuarios: Usuario[] = [];

  @Output()
  deleteUser = new EventEmitter();
}
