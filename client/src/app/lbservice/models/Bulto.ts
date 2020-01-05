/* tslint:disable */
import {
  Voluntario,
  OrganizacionDonante,
  BultoProductoPaquete
} from '../index';

declare var Object: any;
export interface BultoInterface {
  "descripcion"?: string;
  "volumen"?: Array<any>;
  "fecha_disponibilidad": Date;
  "revisado": boolean;
  "fecha_vencimiento": Date;
  "estado": string;
  "id"?: any;
  "voluntariosId"?: any;
  "organizacionDonantesId"?: any;
  "voluntarioId"?: any;
  "organizacionDonanteId"?: any;
  "asignacionTrasladoBultoId"?: any;
  voluntarios?: Voluntario;
  organizacionDonantes?: OrganizacionDonante;
  bultoProductoPaquetes?: BultoProductoPaquete[];
}

export class Bulto implements BultoInterface {
  "descripcion": string;
  "volumen": Array<any>;
  "fecha_disponibilidad": Date;
  "revisado": boolean;
  "fecha_vencimiento": Date;
  "estado": string;
  "id": any;
  "voluntariosId": any;
  "organizacionDonantesId": any;
  "voluntarioId": any;
  "organizacionDonanteId": any;
  "asignacionTrasladoBultoId": any;
  voluntarios: Voluntario;
  organizacionDonantes: OrganizacionDonante;
  bultoProductoPaquetes: BultoProductoPaquete[];
  constructor(data?: BultoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Bulto`.
   */
  public static getModelName() {
    return "Bulto";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Bulto for dynamic purposes.
  **/
  public static factory(data: BultoInterface): Bulto{
    return new Bulto(data);
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
      name: 'Bulto',
      plural: 'Bultos',
      path: 'Bultos',
      idName: 'id',
      properties: {
        "descripcion": {
          name: 'descripcion',
          type: 'string'
        },
        "volumen": {
          name: 'volumen',
          type: 'Array&lt;any&gt;'
        },
        "fecha_disponibilidad": {
          name: 'fecha_disponibilidad',
          type: 'Date'
        },
        "revisado": {
          name: 'revisado',
          type: 'boolean'
        },
        "fecha_vencimiento": {
          name: 'fecha_vencimiento',
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
        "voluntariosId": {
          name: 'voluntariosId',
          type: 'any'
        },
        "organizacionDonantesId": {
          name: 'organizacionDonantesId',
          type: 'any'
        },
        "voluntarioId": {
          name: 'voluntarioId',
          type: 'any'
        },
        "organizacionDonanteId": {
          name: 'organizacionDonanteId',
          type: 'any'
        },
        "asignacionTrasladoBultoId": {
          name: 'asignacionTrasladoBultoId',
          type: 'any'
        },
      },
      relations: {
        voluntarios: {
          name: 'voluntarios',
          type: 'Voluntario',
          model: 'Voluntario',
          relationType: 'belongsTo',
                  keyFrom: 'voluntariosId',
          keyTo: 'id'
        },
        organizacionDonantes: {
          name: 'organizacionDonantes',
          type: 'OrganizacionDonante',
          model: 'OrganizacionDonante',
          relationType: 'belongsTo',
                  keyFrom: 'organizacionDonantesId',
          keyTo: 'id'
        },
        bultoProductoPaquetes: {
          name: 'bultoProductoPaquetes',
          type: 'BultoProductoPaquete[]',
          model: 'BultoProductoPaquete',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'bultoId'
        },
      }
    }
  }
}
