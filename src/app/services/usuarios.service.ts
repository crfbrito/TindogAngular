import { Injectable } from '@angular/core';
import { Usuario } from '../modelos/usuario';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

import { HttpClient, HttpResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class UsuariosService {
  private _usuariosStore: Usuario[];
  private _apiUsuarios: string = 'http://10.100.17.95/TindogREST/api/users/';
  private _usuariosObs: Observable<Usuario[]>;

  constructor(private _httpClient: HttpClient, private _authService:AuthService, private _router:Router) {
  }

  getUsuario(): Usuario[] {
    return this._usuariosStore;
  }

  getUsuarioById(uid: number): Usuario {
    return this._usuariosStore.find((aP: Usuario) => (aP.uid == uid));
  }

  getUsuarioFromApi(): Observable<Usuario[]> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'token': this._authService.getToken()
      })
    };
    
    if (this._usuariosStore) {
      this._usuariosObs = of(this._usuariosStore);
    } else if (this._usuariosObs) {
      //observable ya está en curso
    } else {
      this._usuariosObs = this._httpClient.get<Usuario[]>(this._apiUsuarios)
        .pipe(
          tap(
            data => {
              this._usuariosStore = data;
              localStorage.setItem('usuarios', JSON.stringify(this._usuariosStore));
            },
            error => console.log('error:', error)
          )
        );
    }

    return this._usuariosObs;
  }

  addUsuario(nuevoUsu: Usuario): boolean {
    nuevoUsu.uid = (new Date()).getTime();
    this._usuariosStore.push(nuevoUsu);
    return true;
  }

  addUsuarioToApi(nuevoUsu: Usuario): Observable<number> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this._httpClient.post<number>(this._apiUsuarios, nuevoUsu, httpOptions)
      .pipe(
        tap(
          data => {
            nuevoUsu.uid = data;
            this._usuariosStore.push(nuevoUsu);
          },
          error => console.log('error:', error)
        )
      );
  }

  getUsuariosWithResponse(): Observable<HttpResponse<Object>> {

    return this._httpClient.get<HttpResponse<Object>>(this._apiUsuarios, { observe: 'response' }).pipe(
      tap(resp => {
        console.log('headers', resp.headers,resp.body);
        
      })
    );
  }

}
