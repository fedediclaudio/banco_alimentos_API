/* tslint:disable */
import {
  Envio,
  Voluntario
} from '../index';

declare var Object: any;
export interface AsignacionEnvioInterface {
  "fecha_envio"?: Date;
  "estado": string;
  "id"?: any;
  "envioId"?: any;
  "voluntarioId"?: any;
  envio?: Envio;
  voluntario?: Voluntario;
}

export class AsignacionEnvio implements AsignacionEnvioInterface {
  "fecha_envio": Date;
  "estado": string;
  "id": any;
  "envioId": any;
  "voluntarioId": any;
  envio: Envio;
  voluntario: Voluntario;
  constructor(data?: AsignacionEnvioInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `AsignacionEnvio`.
   */
  public static getModelName() {
    return "AsignacionEnvio";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of AsignacionEnvio for dynamic purposes.
  **/
  public static factory(data: AsignacionEnvioInterface): AsignacionEnvio{
    return new AsignacionEnvio(data);
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
      name: 'AsignacionEnvio',
      plural: 'AsignacionEnvios',
      path: 'AsignacionEnvios',
      idName: 'id',
      properties: {
        "fecha_envio": {
          name: 'fecha_envio',
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
        "envioId": {
          name: 'envioId',
          type: 'any'
        },
        "voluntarioId": {
          name: 'voluntarioId',
          type: 'any'
        },
      },
      relations: {
        envio: {
          name: 'envio',
          type: 'Envio',
          model: 'Envio',
          relationType: 'belongsTo',
                  keyFrom: 'envioId',
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
