/* tslint:disable */
import {
  Bulto,
  Voluntario
} from '../index';

declare var Object: any;
export interface AsignacionTrasladoBultoInterface {
  "fecha_traslado": Date;
  "estado": string;
  "id"?: any;
  "bultoId"?: any;
  "voluntarioId"?: any;
  bulto?: Bulto;
  voluntario?: Voluntario;
}

export class AsignacionTrasladoBulto implements AsignacionTrasladoBultoInterface {
  "fecha_traslado": Date;
  "estado": string;
  "id": any;
  "bultoId": any;
  "voluntarioId": any;
  bulto: Bulto;
  voluntario: Voluntario;
  constructor(data?: AsignacionTrasladoBultoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `AsignacionTrasladoBulto`.
   */
  public static getModelName() {
    return "AsignacionTrasladoBulto";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of AsignacionTrasladoBulto for dynamic purposes.
  **/
  public static factory(data: AsignacionTrasladoBultoInterface): AsignacionTrasladoBulto{
    return new AsignacionTrasladoBulto(data);
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
      name: 'AsignacionTrasladoBulto',
      plural: 'AsignacionTrasladoBultos',
      path: 'AsignacionTrasladoBultos',
      idName: 'id',
      properties: {
        "fecha_traslado": {
          name: 'fecha_traslado',
          type: 'Date'
        },
        "estado": {
          name: 'estado',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "bultoId": {
          name: 'bultoId',
          type: 'any'
        },
        "voluntarioId": {
          name: 'voluntarioId',
          type: 'any'
        },
      },
      relations: {
        bulto: {
          name: 'bulto',
          type: 'Bulto',
          model: 'Bulto',
          relationType: 'belongsTo',
                  keyFrom: 'bultoId',
          keyTo: 'id'
        },
        voluntario: {
          name: 'voluntario',
          type: 'Voluntario',
          model: 'Voluntario',
          relationType: 'belongsTo',
                  keyFrom: 'voluntarioId',
          keyTo: 'id'
        },
      }
    }
  }
}
