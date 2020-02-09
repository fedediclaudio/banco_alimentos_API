/* tslint:disable */
import {
  Vehiculo,
  CategoriaVoluntario,
  Bulto,
  Envio,
  InsigniaOtorgadaVoluntario,
  AsignacionEnvio,
  AsignacionTrasladoBulto,
  GeoPoint
} from '../index';

declare var Object: any;
export interface VoluntarioInterface {
  "nombre": string;
  "dni": string;
  "puntaje": number;
  "nro_telefono_celular": string;
  "email": string;
  "direccion": string;
  "direccion_coordenadas"?: GeoPoint;
  "password": string;
  "id"?: any;
  "categoriaVoluntarioId"?: any;
  "envioId"?: any;
  "insigniaOtorgadaVoluntarioId"?: any;
  vehiculos?: Vehiculo[];
  categoriaVoluntarios?: CategoriaVoluntario;
  bultos?: Bulto[];
  envios?: Envio[];
  insigniaOtorgadas?: InsigniaOtorgadaVoluntario[];
  asignacionEnvios?: AsignacionEnvio[];
  asignacionTrasladoBultos?: AsignacionTrasladoBulto[];
}

export class Voluntario implements VoluntarioInterface {
  "nombre": string;
  "dni": string;
  "puntaje": number;
  "nro_telefono_celular": string;
  "email": string;
  "direccion": string;
  "direccion_coordenadas": GeoPoint;
  "password": string;
  "id": any;
  "categoriaVoluntarioId": any;
  "envioId": any;
  "insigniaOtorgadaVoluntarioId": any;
  vehiculos: Vehiculo[];
  categoriaVoluntarios: CategoriaVoluntario;
  bultos: Bulto[];
  envios: Envio[];
  insigniaOtorgadas: InsigniaOtorgadaVoluntario[];
  asignacionEnvios: AsignacionEnvio[];
  asignacionTrasladoBultos: AsignacionTrasladoBulto[];
  constructor(data?: VoluntarioInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Voluntario`.
   */
  public static getModelName() {
    return "Voluntario";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Voluntario for dynamic purposes.
  **/
  public static factory(data: VoluntarioInterface): Voluntario{
    return new Voluntario(data);
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
      name: 'Voluntario',
      plural: 'Voluntarios',
      path: 'Voluntarios',
      idName: 'id',
      properties: {
        "nombre": {
          name: 'nombre',
          type: 'string'
        },
        "dni": {
          name: 'dni',
          type: 'string'
        },
        "puntaje": {
          name: 'puntaje',
          type: 'number'
        },
        "nro_telefono_celular": {
          name: 'nro_telefono_celular',
          type: 'string'
        },
        "email": {
          name: 'email',
          type: 'string'
        },
        "direccion": {
          name: 'direccion',
          type: 'string'
        },
        "direccion_coordenadas": {
          name: 'direccion_coordenadas',
          type: 'GeoPoint'
        },
        "password": {
          name: 'password',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "categoriaVoluntarioId": {
          name: 'categoriaVoluntarioId',
          type: 'any'
        },
        "envioId": {
          name: 'envioId',
          type: 'any'
        },
        "insigniaOtorgadaVoluntarioId": {
          name: 'insigniaOtorgadaVoluntarioId',
          type: 'any'
        },
      },
      relations: {
        vehiculos: {
          name: 'vehiculos',
          type: 'Vehiculo[]',
          model: 'Vehiculo',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'voluntarioId'
        },
        categoriaVoluntarios: {
          name: 'categoriaVoluntarios',
          type: 'CategoriaVoluntario',
          model: 'CategoriaVoluntario',
          relationType: 'hasOne',
                  keyFrom: 'id',
          keyTo: 'voluntarioId'
        },
        bultos: {
          name: 'bultos',
          type: 'Bulto[]',
          model: 'Bulto',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'voluntarioId'
        },
        envios: {
          name: 'envios',
          type: 'Envio[]',
          model: 'Envio',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'voluntarioId'
        },
        insigniaOtorgadas: {
          name: 'insigniaOtorgadas',
          type: 'InsigniaOtorgadaVoluntario[]',
          model: 'InsigniaOtorgadaVoluntario',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'voluntarioId'
        },
        asignacionEnvios: {
          name: 'asignacionEnvios',
          type: 'AsignacionEnvio[]',
          model: 'AsignacionEnvio',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'voluntarioId'
        },
        asignacionTrasladoBultos: {
          name: 'asignacionTrasladoBultos',
          type: 'AsignacionTrasladoBulto[]',
          model: 'AsignacionTrasladoBulto',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'voluntarioId'
        },
      }
    }
  }
}
