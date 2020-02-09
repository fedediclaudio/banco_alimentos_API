/* tslint:disable */
import {
  Bulto,
  Producto,
  Paquete
} from '../index';

declare var Object: any;
export interface BultoProductoPaqueteInterface {
  "cantidad": number;
  "fecha_vencimiento_minima"?: Date;
  "id"?: any;
  "bultosId"?: any;
  "productosId"?: any;
  "paquetesId"?: any;
  "productoId"?: any;
  "paqueteId"?: any;
  "bultoId"?: any;
  bultos?: Bulto;
  productos?: Producto;
  paquetes?: Paquete;
}

export class BultoProductoPaquete implements BultoProductoPaqueteInterface {
  "cantidad": number;
  "fecha_vencimiento_minima": Date;
  "id": any;
  "bultosId": any;
  "productosId": any;
  "paquetesId": any;
  "productoId": any;
  "paqueteId": any;
  "bultoId": any;
  bultos: Bulto;
  productos: Producto;
  paquetes: Paquete;
  constructor(data?: BultoProductoPaqueteInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `BultoProductoPaquete`.
   */
  public static getModelName() {
    return "BultoProductoPaquete";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of BultoProductoPaquete for dynamic purposes.
  **/
  public static factory(data: BultoProductoPaqueteInterface): BultoProductoPaquete{
    return new BultoProductoPaquete(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'BultoProductoPaquete',
      plural: 'BultoProductoPaquetes',
      path: 'BultoProductoPaquetes',
      idName: 'id',
      properties: {
        "cantidad": {
          name: 'cantidad',
          type: 'number'
        },
        "fecha_vencimiento_minima": {
          name: 'fecha_vencimiento_minima',
          type: 'Date'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "bultosId": {
          name: 'bultosId',
          type: 'any'
        },
        "productosId": {
          name: 'productosId',
          type: 'any'
        },
        "paquetesId": {
          name: 'paquetesId',
          type: 'any'
        },
        "productoId": {
          name: 'productoId',
          type: 'any'
        },
        "paqueteId": {
          name: 'paqueteId',
          type: 'any'
        },
        "bultoId": {
          name: 'bultoId',
          type: 'any'
        },
      },
      relations: {
        bultos: {
          name: 'bultos',
          type: 'Bulto',
          model: 'Bulto',
          relationType: 'belongsTo',
                  keyFrom: 'bultosId',
          keyTo: 'id'
        },
        productos: {
          name: 'productos',
          type: 'Producto',
          model: 'Producto',
          relationType: 'belongsTo',
                  keyFrom: 'productosId',
          keyTo: 'id'
        },
        paquetes: {
          name: 'paquetes',
          type: 'Paquete',
          model: 'Paquete',
          relationType: 'belongsTo',
                  keyFrom: 'paquetesId',
          keyTo: 'id'
        },
      }
    }
  }
}
