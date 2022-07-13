import { Component, OnInit } from '@angular/core';
import { Ingreso } from './ingreso.model';
import { IngresoServicio } from './ingreso.servicio';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {

  ingresos : Ingreso[] = [];

  constructor(private ingresoServicio : IngresoServicio) { }

  ngOnInit(): void {
    this.ingresos = this.ingresoServicio.ingresos;
  }

  eliminarRegistro(ingreso : Ingreso){
    const indice : number  = this.ingresos.indexOf(ingreso);
    this.ingresos.splice(indice,1); //segundo parámetro es cantidad de datos a eliminar
  }

}
