import { Egreso } from "./egreso.model";

export class EgresoServicio{
  egresos : Egreso[] = [
    new Egreso("Parqueadero", 30000),
    new Egreso("Colegio", 150000)
  ];

  eliminar(egreso:Egreso){
    const indice: number = this.egresos.indexOf(egreso);
    this.egresos.splice(indice,1);
  }

}
