import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../modelos/usuario';
import { UsuariosService } from '../../services/usuarios.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-usuario',
  templateUrl: './detalle-usuario.component.html',
  styleUrls: ['./detalle-usuario.component.css']
})
export class DetalleUsuarioComponent implements OnInit {

  elusuario:Usuario;
  idUsuario:number;
  constructor(private _usuariosService:UsuariosService,private _route:ActivatedRoute) { }

  ngOnInit() {    
    this._route.params.subscribe(receivedParams=>{
      this.idUsuario=receivedParams['uid'];
      this.elusuario=this._usuariosService.getUsuarioById(this.idUsuario);
    })
  }

}
