import { Component, OnInit } from '@angular/core';
import { Tarea } from '../modelos/tarea';
import { TareasService } from '../services/tareas.service';
import { UsuariosService } from '../services/usuarios.service';
import { Usuario } from '../modelos/usuario';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {

  backClass: string = "";
  tareas: Tarea[];
  usuarios: Usuario[];
  unaPropiedad: number = 190;

  constructor(private _tareasService: TareasService, private _usuariosService: UsuariosService, private _authService: AuthService, private _router:Router) { }

  ngOnInit() {
    if (!this._authService.getToken()) {
      this._router.navigate(['/login']);
    } else {
      this._usuariosService.getUsuarioFromApi().subscribe(usuariosPrometidos => {
        this.usuarios = usuariosPrometidos;
      });

      this._tareasService.getTareasFromApi().subscribe(tareasPrometidos => {
        this.tareas = tareasPrometidos;
      });
    }

  }

  evaluarPar(id: number) {
    return id % 2 == 0;
  }

  getUsuarioName(uid: number) {
    let elUsuario = this.usuarios ? this.usuarios.find((unUsu: Usuario) => (unUsu.uid == uid)) : null;

    return elUsuario ? elUsuario.name : '';
  }

  changeBack() {
    //this.backClass="blue";
  }

}
