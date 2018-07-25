import { Component, OnInit } from '@angular/core';
import { Usuario } from '../modelos/usuario';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuarios: Usuario[];

  constructor(private _usuariosService: UsuariosService) { }

  ngOnInit() {
    this._usuariosService.getUsuarioFromApi().subscribe(
      usuariosPrometidos => {
        this.usuarios = usuariosPrometidos;
      },
      error =>{
        console.log("Error en usuariosPrometidos:", error);
      }
    );
  }

}
