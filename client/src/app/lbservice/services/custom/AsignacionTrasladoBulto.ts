/* tslint:disable */
import { Injectable, Inject, Optional } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { SDKModels } from './SDKModels';
import { BaseLoopBackApi } from '../core/base.service';
import { LoopBackConfig } from '../../lb.config';
import { LoopBackAuth } from '../core/auth.service';
import { LoopBackFilter,  } from '../../models/BaseModels';
import { ErrorHandler } from '../core/error.service';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { AsignacionTrasladoBulto } from '../../models/AsignacionTrasladoBulto';
import { SocketConnection } from '../../sockets/socket.connections';
import { Bulto } from '../../models/Bulto';
import { Voluntario } from '../../models/Voluntario';


/**
 * Api services for the `AsignacionTrasladoBulto` model.
 */
@Injectable()
export class AsignacionTrasladoBultoApi extends BaseLoopBackApi {

  constructor(
    @Inject(HttpClient) protected http: HttpClient,
    @Inject(SocketConnection) protected connection: SocketConnection,
    @Inject(SDKModels) protected models: SDKModels,
    @Inject(LoopBackAuth) protected auth: LoopBackAuth,
    @Optional() @Inject(ErrorHandler) protected errorHandler: ErrorHandler
  ) {
    super(http,  connection,  models, auth, errorHandler);
  }

  /**
   * Capta la relación belongsTo bulto.
   *
   * @param {any} id AsignacionTrasladoBulto id
   *
   * @param {boolean} refresh 
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `AsignacionTrasladoBulto` object.)
   * </em>
   */
  public getBulto(id: any, refresh: any = {}, customHeaders?: Function): Observable<any> {
    let _method: string = "GET";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/AsignacionTrasladoBultos/:id/bulto";
    let _routeParams: any = {
      id: id
    };
    let _postBody: any = {};
    let _urlParams: any = {};
    if (typeof refresh !== 'undefined' && refresh !== null) _urlParams.refresh = refresh;
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Capta la relación belongsTo voluntario.
   *
   * @param {any} id AsignacionTrasladoBulto id
   *
   * @param {boolean} refresh 
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `AsignacionTrasladoBulto` object.)
   * </em>
   */
  public getVoluntario(id: any, refresh: any = {}, customHeaders?: Function): Observable<any> {
    let _method: string = "GET";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/AsignacionTrasladoBultos/:id/voluntario";
    let _routeParams: any = {
      id: id
    };
    let _postBody: any = {};
    let _urlParams: any = {};
    if (typeof refresh !== 'undefined' && refresh !== null) _urlParams.refresh = refresh;
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Patch an existing model instance or insert a new one into the data source.
   *
   * @param {object} data Request data.
   *
   *  - `data` – `{object}` - Model instance data
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `AsignacionTrasladoBulto` object.)
   * </em>
   */
  public patchOrCreate(data: any = {}, customHeaders?: Function): Observable<any> {
    let _method: string = "PATCH";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/AsignacionTrasladoBultos";
    let _routeParams: any = {};
    let _postBody: any = {
      data: data
    };
    let _urlParams: any = {};
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Patch attributes for a model instance and persist it into the data source.
   *
   * @param {any} id AsignacionTrasladoBulto id
   *
   * @param {object} data Request data.
   *
   *  - `data` – `{object}` - An object of model property name/value pairs
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `AsignacionTrasladoBulto` object.)
   * </em>
   */
  public patchAttributes(id: any, data: any = {}, customHeaders?: Function): Observable<any> {
    let _method: string = "PATCH";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/AsignacionTrasladoBultos/:id";
    let _routeParams: any = {
      id: id
    };
    let _postBody: any = {
      data: data
    };
    let _urlParams: any = {};
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Buscar un elemento relacionado por id para vehiculos.
   *
   * @param {any} id AsignacionTrasladoBulto id
   *
   * @param {any} fk Clave foránea para vehiculos
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `AsignacionTrasladoBulto` object.)
   * </em>
   */
  public findByIdVoluntarioVehiculos(id: any, fk: any, customHeaders?: Function): Observable<any> {
    let _method: string = "GET";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/AsignacionTrasladoBultos/:id/voluntario/vehiculos/:fk";
    let _routeParams: any = {
      id: id,
      fk: fk
    };
    let _postBody: any = {};
    let _urlParams: any = {};
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Suprimir un elemento relacionado por id para vehiculos.
   *
   * @param {any} id AsignacionTrasladoBulto id
   *
   * @param {any} fk Clave foránea para vehiculos
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * This method returns no data.
   */
  public destroyByIdVoluntarioVehiculos(id: any, fk: any, customHeaders?: Function): Observable<any> {
    let _method: string = "DELETE";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/AsignacionTrasladoBultos/:id/voluntario/vehiculos/:fk";
    let _routeParams: any = {
      id: id,
      fk: fk
    };
    let _postBody: any = {};
    let _urlParams: any = {};
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Actualizar un elemento relacionado por id para vehiculos.
   *
   * @param {any} id AsignacionTrasladoBulto id
   *
   * @param {any} fk Clave foránea para vehiculos
   *
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `AsignacionTrasladoBulto` object.)
   * </em>
   */
  public updateByIdVoluntarioVehiculos(id: any, fk: any, data: any = {}, customHeaders?: Function): Observable<any> {
    let _method: string = "PUT";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/AsignacionTrasladoBultos/:id/voluntario/vehiculos/:fk";
    let _routeParams: any = {
      id: id,
      fk: fk
    };
    let _postBody: any = {
      data: data
    };
    let _urlParams: any = {};
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Capta la relación hasOne categoriaVoluntarios.
   *
   * @param {any} id AsignacionTrasladoBulto id
   *
   * @param {boolean} refresh 
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `AsignacionTrasladoBulto` object.)
   * </em>
   */
  public getVoluntarioCategoriaVoluntarios(id: any, refresh: any = {}, customHeaders?: Function): Observable<any> {
    let _method: string = "GET";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/AsignacionTrasladoBultos/:id/voluntario/categoriaVoluntarios";
    let _routeParams: any = {
      id: id
    };
    let _postBody: any = {};
    let _urlParams: any = {};
    if (typeof refresh !== 'undefined' && refresh !== null) _urlParams.refresh = refresh;
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Crea una nueva instancia en categoriaVoluntarios de este modelo.
   *
   * @param {any} id AsignacionTrasladoBulto id
   *
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `AsignacionTrasladoBulto` object.)
   * </em>
   */
  public createVoluntarioCategoriaVoluntarios(id: any, data: any = {}, customHeaders?: Function): Observable<any> {
    let _method: string = "POST";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/AsignacionTrasladoBultos/:id/voluntario/categoriaVoluntarios";
    let _routeParams: any = {
      id: id
    };
    let _postBody: any = {
      data: data
    };
    let _urlParams: any = {};
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Actualizar categoriaVoluntarios de este modelo.
   *
   * @param {any} id AsignacionTrasladoBulto id
   *
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `AsignacionTrasladoBulto` object.)
   * </em>
   */
  public updateVoluntarioCategoriaVoluntarios(id: any, data: any = {}, customHeaders?: Function): Observable<any> {
    let _method: string = "PUT";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/AsignacionTrasladoBultos/:id/voluntario/categoriaVoluntarios";
    let _routeParams: any = {
      id: id
    };
    let _postBody: any = {
      data: data
    };
    let _urlParams: any = {};
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Suprime categoriaVoluntarios de este modelo.
   *
   * @param {any} id AsignacionTrasladoBulto id
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * This method returns no data.
   */
  public destroyVoluntarioCategoriaVoluntarios(id: any, customHeaders?: Function): Observable<any> {
    let _method: string = "DELETE";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/AsignacionTrasladoBultos/:id/voluntario/categoriaVoluntarios";
    let _routeParams: any = {
      id: id
    };
    let _postBody: any = {};
    let _urlParams: any = {};
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Buscar un elemento relacionado por id para bultos.
   *
   * @param {any} id AsignacionTrasladoBulto id
   *
   * @param {any} fk Clave foránea para bultos
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `AsignacionTrasladoBulto` object.)
   * </em>
   */
  public findByIdVoluntarioBultos(id: any, fk: any, customHeaders?: Function): Observable<any> {
    let _method: string = "GET";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/AsignacionTrasladoBultos/:id/voluntario/bultos/:fk";
    let _routeParams: any = {
      id: id,
      fk: fk
    };
    let _postBody: any = {};
    let _urlParams: any = {};
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Suprimir un elemento relacionado por id para bultos.
   *
   * @param {any} id AsignacionTrasladoBulto id
   *
   * @param {any} fk Clave foránea para bultos
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * This method returns no data.
   */
  public destroyByIdVoluntarioBultos(id: any, fk: any, customHeaders?: Function): Observable<any> {
    let _method: string = "DELETE";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/AsignacionTrasladoBultos/:id/voluntario/bultos/:fk";
    let _routeParams: any = {
      id: id,
      fk: fk
    };
    let _postBody: any = {};
    let _urlParams: any = {};
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Actualizar un elemento relacionado por id para bultos.
   *
   * @param {any} id AsignacionTrasladoBulto id
   *
   * @param {any} fk Clave foránea para bultos
   *
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `AsignacionTrasladoBulto` object.)
   * </em>
   */
  public updateByIdVoluntarioBultos(id: any, fk: any, data: any = {}, customHeaders?: Function): Observable<any> {
    let _method: string = "PUT";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/AsignacionTrasladoBultos/:id/voluntario/bultos/:fk";
    let _routeParams: any = {
      id: id,
      fk: fk
    };
    let _postBody: any = {
      data: data
    };
    let _urlParams: any = {};
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Buscar un elemento relacionado por id para envios.
   *
   * @param {any} id AsignacionTrasladoBulto id
   *
   * @param {any} fk Clave foránea para envios
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `AsignacionTrasladoBulto` object.)
   * </em>
   */
  public findByIdVoluntarioEnvios(id: any, fk: any, customHeaders?: Function): Observable<any> {
    let _method: string = "GET";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/AsignacionTrasladoBultos/:id/voluntario/envios/:fk";
    let _routeParams: any = {
      id: id,
      fk: fk
    };
    let _postBody: any = {};
    let _urlParams: any = {};
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Suprimir un elemento relacionado por id para envios.
   *
   * @param {any} id AsignacionTrasladoBulto id
   *
   * @param {any} fk Clave foránea para envios
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * This method returns no data.
   */
  public destroyByIdVoluntarioEnvios(id: any, fk: any, customHeaders?: Function): Observable<any> {
    let _method: string = "DELETE";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/AsignacionTrasladoBultos/:id/voluntario/envios/:fk";
    let _routeParams: any = {
      id: id,
      fk: fk
    };
    let _postBody: any = {};
    let _urlParams: any = {};
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Actualizar un elemento relacionado por id para envios.
   *
   * @param {any} id AsignacionTrasladoBulto id
   *
   * @param {any} fk Clave foránea para envios
   *
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `AsignacionTrasladoBulto` object.)
   * </em>
   */
  public updateByIdVoluntarioEnvios(id: any, fk: any, data: any = {}, customHeaders?: Function): Observable<any> {
    let _method: string = "PUT";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/AsignacionTrasladoBultos/:id/voluntario/envios/:fk";
    let _routeParams: any = {
      id: id,
      fk: fk
    };
    let _postBody: any = {
      data: data
    };
    let _urlParams: any = {};
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Buscar un elemento relacionado por id para insigniaOtorgadas.
   *
   * @param {any} id AsignacionTrasladoBulto id
   *
   * @param {any} fk Clave foránea para insigniaOtorgadas
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `AsignacionTrasladoBulto` object.)
   * </em>
   */
  public findByIdVoluntarioInsigniaOtorgadas(id: any, fk: any, customHeaders?: Function): Observable<any> {
    let _method: string = "GET";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/AsignacionTrasladoBultos/:id/voluntario/insigniaOtorgadas/:fk";
    let _routeParams: any = {
      id: id,
      fk: fk
    };
    let _postBody: any = {};
    let _urlParams: any = {};
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Suprimir un elemento relacionado por id para insigniaOtorgadas.
   *
   * @param {any} id AsignacionTrasladoBulto id
   *
   * @param {any} fk Clave foránea para insigniaOtorgadas
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * This method returns no data.
   */
  public destroyByIdVoluntarioInsigniaOtorgadas(id: any, fk: any, customHeaders?: Function): Observable<any> {
    let _method: string = "DELETE";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/AsignacionTrasladoBultos/:id/voluntario/insigniaOtorgadas/:fk";
    let _routeParams: any = {
      id: id,
      fk: fk
    };
    let _postBody: any = {};
    let _urlParams: any = {};
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Actualizar un elemento relacionado por id para insigniaOtorgadas.
   *
   * @param {any} id AsignacionTrasladoBulto id
   *
   * @param {any} fk Clave foránea para insigniaOtorgadas
   *
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `AsignacionTrasladoBulto` object.)
   * </em>
   */
  public updateByIdVoluntarioInsigniaOtorgadas(id: any, fk: any, data: any = {}, customHeaders?: Function): Observable<any> {
    let _method: string = "PUT";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/AsignacionTrasladoBultos/:id/voluntario/insigniaOtorgadas/:fk";
    let _routeParams: any = {
      id: id,
      fk: fk
    };
    let _postBody: any = {
      data: data
    };
    let _urlParams: any = {};
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Buscar un elemento relacionado por id para asignacionEnvios.
   *
   * @param {any} id AsignacionTrasladoBulto id
   *
   * @param {any} fk Clave foránea para asignacionEnvios
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `AsignacionTrasladoBulto` object.)
   * </em>
   */
  public findByIdVoluntarioAsignacionEnvios(id: any, fk: any, customHeaders?: Function): Observable<any> {
    let _method: string = "GET";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/AsignacionTrasladoBultos/:id/voluntario/asignacionEnvios/:fk";
    let _routeParams: any = {
      id: id,
      fk: fk
    };
    let _postBody: any = {};
    let _urlParams: any = {};
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Suprimir un elemento relacionado por id para asignacionEnvios.
   *
   * @param {any} id AsignacionTrasladoBulto id
   *
   * @param {any} fk Clave foránea para asignacionEnvios
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * This method returns no data.
   */
  public destroyByIdVoluntarioAsignacionEnvios(id: any, fk: any, customHeaders?: Function): Observable<any> {
    let _method: string = "DELETE";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/AsignacionTrasladoBultos/:id/voluntario/asignacionEnvios/:fk";
    let _routeParams: any = {
      id: id,
      fk: fk
    };
    let _postBody: any = {};
    let _urlParams: any = {};
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Actualizar un elemento relacionado por id para asignacionEnvios.
   *
   * @param {any} id AsignacionTrasladoBulto id
   *
   * @param {any} fk Clave foránea para asignacionEnvios
   *
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `AsignacionTrasladoBulto` object.)
   * </em>
   */
  public updateByIdVoluntarioAsignacionEnvios(id: any, fk: any, data: any = {}, customHeaders?: Function): Observable<any> {
    let _method: string = "PUT";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/AsignacionTrasladoBultos/:id/voluntario/asignacionEnvios/:fk";
    let _routeParams: any = {
      id: id,
      fk: fk
    };
    let _postBody: any = {
      data: data
    };
    let _urlParams: any = {};
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Buscar un elemento relacionado por id para asignacionTrasladoBultos.
   *
   * @param {any} id AsignacionTrasladoBulto id
   *
   * @param {any} fk Clave foránea para asignacionTrasladoBultos
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `AsignacionTrasladoBulto` object.)
   * </em>
   */
  public findByIdVoluntarioAsignacionTrasladoBultos(id: any, fk: any, customHeaders?: Function): Observable<any> {
    let _method: string = "GET";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/AsignacionTrasladoBultos/:id/voluntario/asignacionTrasladoBultos/:fk";
    let _routeParams: any = {
      id: id,
      fk: fk
    };
    let _postBody: any = {};
    let _urlParams: any = {};
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Suprimir un elemento relacionado por id para asignacionTrasladoBultos.
   *
   * @param {any} id AsignacionTrasladoBulto id
   *
   * @param {any} fk Clave foránea para asignacionTrasladoBultos
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * This method returns no data.
   */
  public destroyByIdVoluntarioAsignacionTrasladoBultos(id: any, fk: any, customHeaders?: Function): Observable<any> {
    let _method: string = "DELETE";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/AsignacionTrasladoBultos/:id/voluntario/asignacionTrasladoBultos/:fk";
    let _routeParams: any = {
      id: id,
      fk: fk
    };
    let _postBody: any = {};
    let _urlParams: any = {};
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Actualizar un elemento relacionado por id para asignacionTrasladoBultos.
   *
   * @param {any} id AsignacionTrasladoBulto id
   *
   * @param {any} fk Clave foránea para asignacionTrasladoBultos
   *
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `AsignacionTrasladoBulto` object.)
   * </em>
   */
  public updateByIdVoluntarioAsignacionTrasladoBultos(id: any, fk: any, data: any = {}, customHeaders?: Function): Observable<any> {
    let _method: string = "PUT";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/AsignacionTrasladoBultos/:id/voluntario/asignacionTrasladoBultos/:fk";
    let _routeParams: any = {
      id: id,
      fk: fk
    };
    let _postBody: any = {
      data: data
    };
    let _urlParams: any = {};
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * vehiculos consultas de Voluntario.
   *
   * @param {any} id AsignacionTrasladoBulto id
   *
   * @param {object} filter 
   *
   * @returns {object[]} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `AsignacionTrasladoBulto` object.)
   * </em>
   */
  public getVoluntarioVehiculos(id: any, filter: LoopBackFilter = {}, customHeaders?: Function): Observable<any> {
    let _method: string = "GET";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/AsignacionTrasladoBultos/:id/voluntario/vehiculos";
    let _routeParams: any = {
      id: id
    };
    let _postBody: any = {};
    let _urlParams: any = {};
    if (typeof filter !== 'undefined' && filter !== null) _urlParams.filter = filter;
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Crea una nueva instancia en vehiculos de este modelo.
   *
   * @param {any} id AsignacionTrasladoBulto id
   *
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `AsignacionTrasladoBulto` object.)
   * </em>
   */
  public createVoluntarioVehiculos(id: any, data: any = {}, customHeaders?: Function): Observable<any> {
    let _method: string = "POST";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/AsignacionTrasladoBultos/:id/voluntario/vehiculos";
    let _routeParams: any = {
      id: id
    };
    let _postBody: any = {
      data: data
    };
    let _urlParams: any = {};
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Suprime todos los vehiculos de este modelo.
   *
   * @param {any} id AsignacionTrasladoBulto id
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * This method returns no data.
   */
  public deleteVoluntarioVehiculos(id: any, customHeaders?: Function): Observable<any> {
    let _method: string = "DELETE";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/AsignacionTrasladoBultos/:id/voluntario/vehiculos";
    let _routeParams: any = {
      id: id
    };
    let _postBody: any = {};
    let _urlParams: any = {};
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Recuentos vehiculos de Voluntario.
   *
   * @param {any} id AsignacionTrasladoBulto id
   *
   * @param {object} where Criteria to match model instances
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * Data properties:
   *
   *  - `count` – `{number}` - 
   */
  public countVoluntarioVehiculos(id: any, where: any = {}, customHeaders?: Function): Observable<any> {
    let _method: string = "GET";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/AsignacionTrasladoBultos/:id/voluntario/vehiculos/count";
    let _routeParams: any = {
      id: id
    };
    let _postBody: any = {};
    let _urlParams: any = {};
    if (typeof where !== 'undefined' && where !== null) _urlParams.where = where;
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * bultos consultas de Voluntario.
   *
   * @param {any} id AsignacionTrasladoBulto id
   *
   * @param {object} filter 
   *
   * @returns {object[]} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `AsignacionTrasladoBulto` object.)
   * </em>
   */
  public getVoluntarioBultos(id: any, filter: LoopBackFilter = {}, customHeaders?: Function): Observable<any> {
    let _method: string = "GET";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/AsignacionTrasladoBultos/:id/voluntario/bultos";
    let _routeParams: any = {
      id: id
    };
    let _postBody: any = {};
    let _urlParams: any = {};
    if (typeof filter !== 'undefined' && filter !== null) _urlParams.filter = filter;
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Crea una nueva instancia en bultos de este modelo.
   *
   * @param {any} id AsignacionTrasladoBulto id
   *
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `AsignacionTrasladoBulto` object.)
   * </em>
   */
  public createVoluntarioBultos(id: any, data: any = {}, customHeaders?: Function): Observable<any> {
    let _method: string = "POST";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/AsignacionTrasladoBultos/:id/voluntario/bultos";
    let _routeParams: any = {
      id: id
    };
    let _postBody: any = {
      data: data
    };
    let _urlParams: any = {};
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Suprime todos los bultos de este modelo.
   *
   * @param {any} id AsignacionTrasladoBulto id
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * This method returns no data.
   */
  public deleteVoluntarioBultos(id: any, customHeaders?: Function): Observable<any> {
    let _method: string = "DELETE";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/AsignacionTrasladoBultos/:id/voluntario/bultos";
    let _routeParams: any = {
      id: id
    };
    let _postBody: any = {};
    let _urlParams: any = {};
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Recuentos bultos de Voluntario.
   *
   * @param {any} id AsignacionTrasladoBulto id
   *
   * @param {object} where Criteria to match model instances
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * Data properties:
   *
   *  - `count` – `{number}` - 
   */
  public countVoluntarioBultos(id: any, where: any = {}, customHeaders?: Function): Observable<any> {
    let _method: string = "GET";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/AsignacionTrasladoBultos/:id/voluntario/bultos/count";
    let _routeParams: any = {
      id: id
    };
    let _postBody: any = {};
    let _urlParams: any = {};
    if (typeof where !== 'undefined' && where !== null) _urlParams.where = where;
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * envios consultas de Voluntario.
   *
   * @param {any} id AsignacionTrasladoBulto id
   *
   * @param {object} filter 
   *
   * @returns {object[]} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `AsignacionTrasladoBulto` object.)
   * </em>
   */
  public getVoluntarioEnvios(id: any, filter: LoopBackFilter = {}, customHeaders?: Function): Observable<any> {
    let _method: string = "GET";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/AsignacionTrasladoBultos/:id/voluntario/envios";
    let _routeParams: any = {
      id: id
    };
    let _postBody: any = {};
    let _urlParams: any = {};
    if (typeof filter !== 'undefined' && filter !== null) _urlParams.filter = filter;
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Crea una nueva instancia en envios de este modelo.
   *
   * @param {any} id AsignacionTrasladoBulto id
   *
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `AsignacionTrasladoBulto` object.)
   * </em>
   */
  public createVoluntarioEnvios(id: any, data: any = {}, customHeaders?: Function): Observable<any> {
    let _method: string = "POST";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/AsignacionTrasladoBultos/:id/voluntario/envios";
    let _routeParams: any = {
      id: id
    };
    let _postBody: any = {
      data: data
    };
    let _urlParams: any = {};
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Suprime todos los envios de este modelo.
   *
   * @param {any} id AsignacionTrasladoBulto id
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * This method returns no data.
   */
  public deleteVoluntarioEnvios(id: any, customHeaders?: Function): Observable<any> {
    let _method: string = "DELETE";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/AsignacionTrasladoBultos/:id/voluntario/envios";
    let _routeParams: any = {
      id: id
    };
    let _postBody: any = {};
    let _urlParams: any = {};
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Recuentos envios de Voluntario.
   *
   * @param {any} id AsignacionTrasladoBulto id
   *
   * @param {object} where Criteria to match model instances
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * Data properties:
   *
   *  - `count` – `{number}` - 
   */
  public countVoluntarioEnvios(id: any, where: any = {}, customHeaders?: Function): Observable<any> {
    let _method: string = "GET";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/AsignacionTrasladoBultos/:id/voluntario/envios/count";
    let _routeParams: any = {
      id: id
    };
    let _postBody: any = {};
    let _urlParams: any = {};
    if (typeof where !== 'undefined' && where !== null) _urlParams.where = where;
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * insigniaOtorgadas consultas de Voluntario.
   *
   * @param {any} id AsignacionTrasladoBulto id
   *
   * @param {object} filter 
   *
   * @returns {object[]} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `AsignacionTrasladoBulto` object.)
   * </em>
   */
  public getVoluntarioInsigniaOtorgadas(id: any, filter: LoopBackFilter = {}, customHeaders?: Function): Observable<any> {
    let _method: string = "GET";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/AsignacionTrasladoBultos/:id/voluntario/insigniaOtorgadas";
    let _routeParams: any = {
      id: id
    };
    let _postBody: any = {};
    let _urlParams: any = {};
    if (typeof filter !== 'undefined' && filter !== null) _urlParams.filter = filter;
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Crea una nueva instancia en insigniaOtorgadas de este modelo.
   *
   * @param {any} id AsignacionTrasladoBulto id
   *
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `AsignacionTrasladoBulto` object.)
   * </em>
   */
  public createVoluntarioInsigniaOtorgadas(id: any, data: any = {}, customHeaders?: Function): Observable<any> {
    let _method: string = "POST";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/AsignacionTrasladoBultos/:id/voluntario/insigniaOtorgadas";
    let _routeParams: any = {
      id: id
    };
    let _postBody: any = {
      data: data
    };
    let _urlParams: any = {};
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Suprime todos los insigniaOtorgadas de este modelo.
   *
   * @param {any} id AsignacionTrasladoBulto id
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * This method returns no data.
   */
  public deleteVoluntarioInsigniaOtorgadas(id: any, customHeaders?: Function): Observable<any> {
    let _method: string = "DELETE";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/AsignacionTrasladoBultos/:id/voluntario/insigniaOtorgadas";
    let _routeParams: any = {
      id: id
    };
    let _postBody: any = {};
    let _urlParams: any = {};
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Recuentos insigniaOtorgadas de Voluntario.
   *
   * @param {any} id AsignacionTrasladoBulto id
   *
   * @param {object} where Criteria to match model instances
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * Data properties:
   *
   *  - `count` – `{number}` - 
   */
  public countVoluntarioInsigniaOtorgadas(id: any, where: any = {}, customHeaders?: Function): Observable<any> {
    let _method: string = "GET";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/AsignacionTrasladoBultos/:id/voluntario/insigniaOtorgadas/count";
    let _routeParams: any = {
      id: id
    };
    let _postBody: any = {};
    let _urlParams: any = {};
    if (typeof where !== 'undefined' && where !== null) _urlParams.where = where;
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * asignacionEnvios consultas de Voluntario.
   *
   * @param {any} id AsignacionTrasladoBulto id
   *
   * @param {object} filter 
   *
   * @returns {object[]} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `AsignacionTrasladoBulto` object.)
   * </em>
   */
  public getVoluntarioAsignacionEnvios(id: any, filter: LoopBackFilter = {}, customHeaders?: Function): Observable<any> {
    let _method: string = "GET";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/AsignacionTrasladoBultos/:id/voluntario/asignacionEnvios";
    let _routeParams: any = {
      id: id
    };
    let _postBody: any = {};
    let _urlParams: any = {};
    if (typeof filter !== 'undefined' && filter !== null) _urlParams.filter = filter;
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Crea una nueva instancia en asignacionEnvios de este modelo.
   *
   * @param {any} id AsignacionTrasladoBulto id
   *
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `AsignacionTrasladoBulto` object.)
   * </em>
   */
  public createVoluntarioAsignacionEnvios(id: any, data: any = {}, customHeaders?: Function): Observable<any> {
    let _method: string = "POST";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/AsignacionTrasladoBultos/:id/voluntario/asignacionEnvios";
    let _routeParams: any = {
      id: id
    };
    let _postBody: any = {
      data: data
    };
    let _urlParams: any = {};
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Suprime todos los asignacionEnvios de este modelo.
   *
   * @param {any} id AsignacionTrasladoBulto id
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * This method returns no data.
   */
  public deleteVoluntarioAsignacionEnvios(id: any, customHeaders?: Function): Observable<any> {
    let _method: string = "DELETE";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/AsignacionTrasladoBultos/:id/voluntario/asignacionEnvios";
    let _routeParams: any = {
      id: id
    };
    let _postBody: any = {};
    let _urlParams: any = {};
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Recuentos asignacionEnvios de Voluntario.
   *
   * @param {any} id AsignacionTrasladoBulto id
   *
   * @param {object} where Criteria to match model instances
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * Data properties:
   *
   *  - `count` – `{number}` - 
   */
  public countVoluntarioAsignacionEnvios(id: any, where: any = {}, customHeaders?: Function): Observable<any> {
    let _method: string = "GET";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/AsignacionTrasladoBultos/:id/voluntario/asignacionEnvios/count";
    let _routeParams: any = {
      id: id
    };
    let _postBody: any = {};
    let _urlParams: any = {};
    if (typeof where !== 'undefined' && where !== null) _urlParams.where = where;
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * asignacionTrasladoBultos consultas de Voluntario.
   *
   * @param {any} id AsignacionTrasladoBulto id
   *
   * @param {object} filter 
   *
   * @returns {object[]} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `AsignacionTrasladoBulto` object.)
   * </em>
   */
  public getVoluntarioAsignacionTrasladoBultos(id: any, filter: LoopBackFilter = {}, customHeaders?: Function): Observable<any> {
    let _method: string = "GET";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/AsignacionTrasladoBultos/:id/voluntario/asignacionTrasladoBultos";
    let _routeParams: any = {
      id: id
    };
    let _postBody: any = {};
    let _urlParams: any = {};
    if (typeof filter !== 'undefined' && filter !== null) _urlParams.filter = filter;
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Crea una nueva instancia en asignacionTrasladoBultos de este modelo.
   *
   * @param {any} id AsignacionTrasladoBulto id
   *
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `AsignacionTrasladoBulto` object.)
   * </em>
   */
  public createVoluntarioAsignacionTrasladoBultos(id: any, data: any = {}, customHeaders?: Function): Observable<any> {
    let _method: string = "POST";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/AsignacionTrasladoBultos/:id/voluntario/asignacionTrasladoBultos";
    let _routeParams: any = {
      id: id
    };
    let _postBody: any = {
      data: data
    };
    let _urlParams: any = {};
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Suprime todos los asignacionTrasladoBultos de este modelo.
   *
   * @param {any} id AsignacionTrasladoBulto id
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * This method returns no data.
   */
  public deleteVoluntarioAsignacionTrasladoBultos(id: any, customHeaders?: Function): Observable<any> {
    let _method: string = "DELETE";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/AsignacionTrasladoBultos/:id/voluntario/asignacionTrasladoBultos";
    let _routeParams: any = {
      id: id
    };
    let _postBody: any = {};
    let _urlParams: any = {};
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Recuentos asignacionTrasladoBultos de Voluntario.
   *
   * @param {any} id AsignacionTrasladoBulto id
   *
   * @param {object} where Criteria to match model instances
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * Data properties:
   *
   *  - `count` – `{number}` - 
   */
  public countVoluntarioAsignacionTrasladoBultos(id: any, where: any = {}, customHeaders?: Function): Observable<any> {
    let _method: string = "GET";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/AsignacionTrasladoBultos/:id/voluntario/asignacionTrasladoBultos/count";
    let _routeParams: any = {
      id: id
    };
    let _postBody: any = {};
    let _urlParams: any = {};
    if (typeof where !== 'undefined' && where !== null) _urlParams.where = where;
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Capta la relación belongsTo voluntarios.
   *
   * @param {any} id AsignacionTrasladoBulto id
   *
   * @param {boolean} refresh 
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `AsignacionTrasladoBulto` object.)
   * </em>
   */
  public getBultoVoluntarios(id: any, refresh: any = {}, customHeaders?: Function): Observable<any> {
    let _method: string = "GET";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/AsignacionTrasladoBultos/:id/bulto/voluntarios";
    let _routeParams: any = {
      id: id
    };
    let _postBody: any = {};
    let _urlParams: any = {};
    if (typeof refresh !== 'undefined' && refresh !== null) _urlParams.refresh = refresh;
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Capta la relación belongsTo organizacionDonantes.
   *
   * @param {any} id AsignacionTrasladoBulto id
   *
   * @param {boolean} refresh 
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `AsignacionTrasladoBulto` object.)
   * </em>
   */
  public getBultoOrganizacionDonantes(id: any, refresh: any = {}, customHeaders?: Function): Observable<any> {
    let _method: string = "GET";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/AsignacionTrasladoBultos/:id/bulto/organizacionDonantes";
    let _routeParams: any = {
      id: id
    };
    let _postBody: any = {};
    let _urlParams: any = {};
    if (typeof refresh !== 'undefined' && refresh !== null) _urlParams.refresh = refresh;
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Buscar un elemento relacionado por id para bultoProductoPaquetes.
   *
   * @param {any} id AsignacionTrasladoBulto id
   *
   * @param {any} fk Clave foránea para bultoProductoPaquetes
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `AsignacionTrasladoBulto` object.)
   * </em>
   */
  public findByIdBultoBultoProductoPaquetes(id: any, fk: any, customHeaders?: Function): Observable<any> {
    let _method: string = "GET";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/AsignacionTrasladoBultos/:id/bulto/bultoProductoPaquetes/:fk";
    let _routeParams: any = {
      id: id,
      fk: fk
    };
    let _postBody: any = {};
    let _urlParams: any = {};
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Suprimir un elemento relacionado por id para bultoProductoPaquetes.
   *
   * @param {any} id AsignacionTrasladoBulto id
   *
   * @param {any} fk Clave foránea para bultoProductoPaquetes
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * This method returns no data.
   */
  public destroyByIdBultoBultoProductoPaquetes(id: any, fk: any, customHeaders?: Function): Observable<any> {
    let _method: string = "DELETE";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/AsignacionTrasladoBultos/:id/bulto/bultoProductoPaquetes/:fk";
    let _routeParams: any = {
      id: id,
      fk: fk
    };
    let _postBody: any = {};
    let _urlParams: any = {};
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Actualizar un elemento relacionado por id para bultoProductoPaquetes.
   *
   * @param {any} id AsignacionTrasladoBulto id
   *
   * @param {any} fk Clave foránea para bultoProductoPaquetes
   *
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `AsignacionTrasladoBulto` object.)
   * </em>
   */
  public updateByIdBultoBultoProductoPaquetes(id: any, fk: any, data: any = {}, customHeaders?: Function): Observable<any> {
    let _method: string = "PUT";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/AsignacionTrasladoBultos/:id/bulto/bultoProductoPaquetes/:fk";
    let _routeParams: any = {
      id: id,
      fk: fk
    };
    let _postBody: any = {
      data: data
    };
    let _urlParams: any = {};
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Buscar un elemento relacionado por id para asignacionTrasladoBultos.
   *
   * @param {any} id AsignacionTrasladoBulto id
   *
   * @param {any} fk Clave foránea para asignacionTrasladoBultos
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `AsignacionTrasladoBulto` object.)
   * </em>
   */
  public findByIdBultoAsignacionTrasladoBultos(id: any, fk: any, customHeaders?: Function): Observable<any> {
    let _method: string = "GET";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/AsignacionTrasladoBultos/:id/bulto/asignacionTrasladoBultos/:fk";
    let _routeParams: any = {
      id: id,
      fk: fk
    };
    let _postBody: any = {};
    let _urlParams: any = {};
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Suprimir un elemento relacionado por id para asignacionTrasladoBultos.
   *
   * @param {any} id AsignacionTrasladoBulto id
   *
   * @param {any} fk Clave foránea para asignacionTrasladoBultos
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * This method returns no data.
   */
  public destroyByIdBultoAsignacionTrasladoBultos(id: any, fk: any, customHeaders?: Function): Observable<any> {
    let _method: string = "DELETE";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/AsignacionTrasladoBultos/:id/bulto/asignacionTrasladoBultos/:fk";
    let _routeParams: any = {
      id: id,
      fk: fk
    };
    let _postBody: any = {};
    let _urlParams: any = {};
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Actualizar un elemento relacionado por id para asignacionTrasladoBultos.
   *
   * @param {any} id AsignacionTrasladoBulto id
   *
   * @param {any} fk Clave foránea para asignacionTrasladoBultos
   *
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `AsignacionTrasladoBulto` object.)
   * </em>
   */
  public updateByIdBultoAsignacionTrasladoBultos(id: any, fk: any, data: any = {}, customHeaders?: Function): Observable<any> {
    let _method: string = "PUT";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/AsignacionTrasladoBultos/:id/bulto/asignacionTrasladoBultos/:fk";
    let _routeParams: any = {
      id: id,
      fk: fk
    };
    let _postBody: any = {
      data: data
    };
    let _urlParams: any = {};
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * bultoProductoPaquetes consultas de Bulto.
   *
   * @param {any} id AsignacionTrasladoBulto id
   *
   * @param {object} filter 
   *
   * @returns {object[]} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `AsignacionTrasladoBulto` object.)
   * </em>
   */
  public getBultoBultoProductoPaquetes(id: any, filter: LoopBackFilter = {}, customHeaders?: Function): Observable<any> {
    let _method: string = "GET";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/AsignacionTrasladoBultos/:id/bulto/bultoProductoPaquetes";
    let _routeParams: any = {
      id: id
    };
    let _postBody: any = {};
    let _urlParams: any = {};
    if (typeof filter !== 'undefined' && filter !== null) _urlParams.filter = filter;
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Crea una nueva instancia en bultoProductoPaquetes de este modelo.
   *
   * @param {any} id AsignacionTrasladoBulto id
   *
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `AsignacionTrasladoBulto` object.)
   * </em>
   */
  public createBultoBultoProductoPaquetes(id: any, data: any = {}, customHeaders?: Function): Observable<any> {
    let _method: string = "POST";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/AsignacionTrasladoBultos/:id/bulto/bultoProductoPaquetes";
    let _routeParams: any = {
      id: id
    };
    let _postBody: any = {
      data: data
    };
    let _urlParams: any = {};
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Suprime todos los bultoProductoPaquetes de este modelo.
   *
   * @param {any} id AsignacionTrasladoBulto id
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * This method returns no data.
   */
  public deleteBultoBultoProductoPaquetes(id: any, customHeaders?: Function): Observable<any> {
    let _method: string = "DELETE";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/AsignacionTrasladoBultos/:id/bulto/bultoProductoPaquetes";
    let _routeParams: any = {
      id: id
    };
    let _postBody: any = {};
    let _urlParams: any = {};
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Recuentos bultoProductoPaquetes de Bulto.
   *
   * @param {any} id AsignacionTrasladoBulto id
   *
   * @param {object} where Criteria to match model instances
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * Data properties:
   *
   *  - `count` – `{number}` - 
   */
  public countBultoBultoProductoPaquetes(id: any, where: any = {}, customHeaders?: Function): Observable<any> {
    let _method: string = "GET";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/AsignacionTrasladoBultos/:id/bulto/bultoProductoPaquetes/count";
    let _routeParams: any = {
      id: id
    };
    let _postBody: any = {};
    let _urlParams: any = {};
    if (typeof where !== 'undefined' && where !== null) _urlParams.where = where;
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * asignacionTrasladoBultos consultas de Bulto.
   *
   * @param {any} id AsignacionTrasladoBulto id
   *
   * @param {object} filter 
   *
   * @returns {object[]} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `AsignacionTrasladoBulto` object.)
   * </em>
   */
  public getBultoAsignacionTrasladoBultos(id: any, filter: LoopBackFilter = {}, customHeaders?: Function): Observable<any> {
    let _method: string = "GET";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/AsignacionTrasladoBultos/:id/bulto/asignacionTrasladoBultos";
    let _routeParams: any = {
      id: id
    };
    let _postBody: any = {};
    let _urlParams: any = {};
    if (typeof filter !== 'undefined' && filter !== null) _urlParams.filter = filter;
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Crea una nueva instancia en asignacionTrasladoBultos de este modelo.
   *
   * @param {any} id AsignacionTrasladoBulto id
   *
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `AsignacionTrasladoBulto` object.)
   * </em>
   */
  public createBultoAsignacionTrasladoBultos(id: any, data: any = {}, customHeaders?: Function): Observable<any> {
    let _method: string = "POST";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/AsignacionTrasladoBultos/:id/bulto/asignacionTrasladoBultos";
    let _routeParams: any = {
      id: id
    };
    let _postBody: any = {
      data: data
    };
    let _urlParams: any = {};
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Suprime todos los asignacionTrasladoBultos de este modelo.
   *
   * @param {any} id AsignacionTrasladoBulto id
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * This method returns no data.
   */
  public deleteBultoAsignacionTrasladoBultos(id: any, customHeaders?: Function): Observable<any> {
    let _method: string = "DELETE";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/AsignacionTrasladoBultos/:id/bulto/asignacionTrasladoBultos";
    let _routeParams: any = {
      id: id
    };
    let _postBody: any = {};
    let _urlParams: any = {};
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Recuentos asignacionTrasladoBultos de Bulto.
   *
   * @param {any} id AsignacionTrasladoBulto id
   *
   * @param {object} where Criteria to match model instances
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * Data properties:
   *
   *  - `count` – `{number}` - 
   */
  public countBultoAsignacionTrasladoBultos(id: any, where: any = {}, customHeaders?: Function): Observable<any> {
    let _method: string = "GET";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/AsignacionTrasladoBultos/:id/bulto/asignacionTrasladoBultos/count";
    let _routeParams: any = {
      id: id
    };
    let _postBody: any = {};
    let _urlParams: any = {};
    if (typeof where !== 'undefined' && where !== null) _urlParams.where = where;
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Crea una nueva instancia en categoriaVoluntarios de este modelo.
   *
   * @param {any} id AsignacionTrasladoBulto id
   *
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   *
   * @returns {object[]} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `AsignacionTrasladoBulto` object.)
   * </em>
   */
  public createManyVoluntarioCategoriaVoluntarios(id: any, data: any[] = [], customHeaders?: Function): Observable<any> {
    let _method: string = "POST";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/AsignacionTrasladoBultos/:id/voluntario/categoriaVoluntarios";
    let _routeParams: any = {
      id: id
    };
    let _postBody: any = {
      data: data
    };
    let _urlParams: any = {};
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Crea una nueva instancia en vehiculos de este modelo.
   *
   * @param {any} id AsignacionTrasladoBulto id
   *
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   *
   * @returns {object[]} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `AsignacionTrasladoBulto` object.)
   * </em>
   */
  public createManyVoluntarioVehiculos(id: any, data: any[] = [], customHeaders?: Function): Observable<any> {
    let _method: string = "POST";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/AsignacionTrasladoBultos/:id/voluntario/vehiculos";
    let _routeParams: any = {
      id: id
    };
    let _postBody: any = {
      data: data
    };
    let _urlParams: any = {};
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Crea una nueva instancia en bultos de este modelo.
   *
   * @param {any} id AsignacionTrasladoBulto id
   *
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   *
   * @returns {object[]} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `AsignacionTrasladoBulto` object.)
   * </em>
   */
  public createManyVoluntarioBultos(id: any, data: any[] = [], customHeaders?: Function): Observable<any> {
    let _method: string = "POST";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/AsignacionTrasladoBultos/:id/voluntario/bultos";
    let _routeParams: any = {
      id: id
    };
    let _postBody: any = {
      data: data
    };
    let _urlParams: any = {};
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Crea una nueva instancia en envios de este modelo.
   *
   * @param {any} id AsignacionTrasladoBulto id
   *
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   *
   * @returns {object[]} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `AsignacionTrasladoBulto` object.)
   * </em>
   */
  public createManyVoluntarioEnvios(id: any, data: any[] = [], customHeaders?: Function): Observable<any> {
    let _method: string = "POST";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/AsignacionTrasladoBultos/:id/voluntario/envios";
    let _routeParams: any = {
      id: id
    };
    let _postBody: any = {
      data: data
    };
    let _urlParams: any = {};
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Crea una nueva instancia en insigniaOtorgadas de este modelo.
   *
   * @param {any} id AsignacionTrasladoBulto id
   *
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   *
   * @returns {object[]} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `AsignacionTrasladoBulto` object.)
   * </em>
   */
  public createManyVoluntarioInsigniaOtorgadas(id: any, data: any[] = [], customHeaders?: Function): Observable<any> {
    let _method: string = "POST";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/AsignacionTrasladoBultos/:id/voluntario/insigniaOtorgadas";
    let _routeParams: any = {
      id: id
    };
    let _postBody: any = {
      data: data
    };
    let _urlParams: any = {};
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Crea una nueva instancia en asignacionEnvios de este modelo.
   *
   * @param {any} id AsignacionTrasladoBulto id
   *
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   *
   * @returns {object[]} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `AsignacionTrasladoBulto` object.)
   * </em>
   */
  public createManyVoluntarioAsignacionEnvios(id: any, data: any[] = [], customHeaders?: Function): Observable<any> {
    let _method: string = "POST";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/AsignacionTrasladoBultos/:id/voluntario/asignacionEnvios";
    let _routeParams: any = {
      id: id
    };
    let _postBody: any = {
      data: data
    };
    let _urlParams: any = {};
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Crea una nueva instancia en asignacionTrasladoBultos de este modelo.
   *
   * @param {any} id AsignacionTrasladoBulto id
   *
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   *
   * @returns {object[]} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `AsignacionTrasladoBulto` object.)
   * </em>
   */
  public createManyVoluntarioAsignacionTrasladoBultos(id: any, data: any[] = [], customHeaders?: Function): Observable<any> {
    let _method: string = "POST";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/AsignacionTrasladoBultos/:id/voluntario/asignacionTrasladoBultos";
    let _routeParams: any = {
      id: id
    };
    let _postBody: any = {
      data: data
    };
    let _urlParams: any = {};
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Crea una nueva instancia en bultoProductoPaquetes de este modelo.
   *
   * @param {any} id AsignacionTrasladoBulto id
   *
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   *
   * @returns {object[]} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `AsignacionTrasladoBulto` object.)
   * </em>
   */
  public createManyBultoBultoProductoPaquetes(id: any, data: any[] = [], customHeaders?: Function): Observable<any> {
    let _method: string = "POST";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/AsignacionTrasladoBultos/:id/bulto/bultoProductoPaquetes";
    let _routeParams: any = {
      id: id
    };
    let _postBody: any = {
      data: data
    };
    let _urlParams: any = {};
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Crea una nueva instancia en asignacionTrasladoBultos de este modelo.
   *
   * @param {any} id AsignacionTrasladoBulto id
   *
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   *
   * @returns {object[]} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `AsignacionTrasladoBulto` object.)
   * </em>
   */
  public createManyBultoAsignacionTrasladoBultos(id: any, data: any[] = [], customHeaders?: Function): Observable<any> {
    let _method: string = "POST";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/AsignacionTrasladoBultos/:id/bulto/asignacionTrasladoBultos";
    let _routeParams: any = {
      id: id
    };
    let _postBody: any = {
      data: data
    };
    let _urlParams: any = {};
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * The name of the model represented by this $resource,
   * i.e. `AsignacionTrasladoBulto`.
   */
  public getModelName() {
    return "AsignacionTrasladoBulto";
  }
}
