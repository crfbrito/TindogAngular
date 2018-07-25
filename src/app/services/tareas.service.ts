import { Injectable } from '@angular/core';
import { Tarea } from '../modelos/tarea';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable()
export class TareasService {

  private _tareasStore: Tarea[];
  private _apiTareas: string = 'http://localhost:8080/TindogREST/api/users';
  private _tareasObs: Observable<Tarea[]>;

  constructor(private _httpClient: HttpClient, private _authService:AuthService, private _router:Router) {

  }

  getTareas(): Tarea[] {
    return this._tareasStore;
  }

  getTareaById(tid: number): Tarea {
    return this._tareasStore.find((aT: Tarea) => (aT.tid == tid));
  }

  getTareasFromApi(): Observable<Tarea[]> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'token': this._authService.getToken()
      })
    };

    if (this._tareasStore) {
      this._tareasObs = of(this._tareasStore);
    } else if (this._tareasObs) {
      //observable ya está en curso
    } else {
      this._tareasObs = this._httpClient.get<Tarea[]>(this._apiTareas,httpOptions)
        .pipe(
          tap(
            data => this._tareasStore = data,
            error => {console.log('error:', error); this._router.navigate(['/login']);}
          )
        );
    }

    return this._tareasObs;
  }

  addTarea(nuevaTarea: Tarea): boolean {
    nuevaTarea.tid = (new Date()).getTime();
    console.log(nuevaTarea);
    this._tareasStore.push(nuevaTarea);
    return true;
  }
}
