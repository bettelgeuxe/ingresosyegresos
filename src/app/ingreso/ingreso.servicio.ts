import { Ingreso } from "./ingreso.model";

export class IngresoServicio{
  ingresos: Ingreso[] = [
    new Ingreso("Servicio Marketing", 600000),
    new Ingreso("Venta plantas", 200000)
  ];

  eliminar(ingreso:Ingreso){
    const indice: number = this.ingresos.indexOf(ingreso);
    this.ingresos.splice(indice,1);
  }

}
