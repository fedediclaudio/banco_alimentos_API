/* tslint:disable */
import {
  Voluntario,
  Bulto
} from '../index';

declare var Object: any;
export interface AsignacionTrasladoBultoInterface {
  "fecha_traslado": Date;
  "estado": Date;
  "id"?: any;
  voluntario?: Voluntario;
  bulto?: Bulto;
}

export class AsignacionTrasladoBulto implements AsignacionTrasladoBultoInterface {
  "fecha_traslado": Date;
  "estado": Date;
  "id": any;
  voluntario: Voluntario;
  bulto: Bulto;
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
          type: 'Date'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
      },
      relations: {
        voluntario: {
          name: 'voluntario',
          type: 'Voluntario',
          model: 'Voluntario',
          relationType: 'hasOne',
                  keyFrom: 'id',
          keyTo: 'asignacionTrasladoBultoId'
        },
        bulto: {
          name: 'bulto',
          type: 'Bulto',
          model: 'Bulto',
          relationType: 'hasOne',
                  keyFrom: 'id',
          keyTo: 'asignacionTrasladoBultoId'
        },
      }
    }
  }
}
