import { Egreso } from "./egreso.model";

export class EgresoServicio{
  egresos : Egreso[] = [
    new Egreso("Arriendo", 900),
    new Egreso("Ropa", 200)
  ];

  eliminar(egreso:Egreso){
    const indice: number = this.egresos.indexOf(egreso);
    this.egresos.splice(indice,1);
  }

}
