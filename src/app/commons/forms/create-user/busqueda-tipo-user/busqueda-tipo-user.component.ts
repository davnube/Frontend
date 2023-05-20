import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-busqueda-tipo-user',
  templateUrl: './busqueda-tipo-user.component.html'
})
export class BusquedaTipoUserComponent implements OnInit{
  title!: string;

  ngOnInit(): void {
    this.title = 'Ingresa como datos de entrada: La CURP, Nombre, Apellido Paterno ó Apellido Materno';

  }

}
