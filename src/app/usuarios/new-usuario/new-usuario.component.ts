import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../modelos/usuario';
import { NgForm } from '@angular/forms';
import { UsuariosService } from '../../services/usuarios.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-new-usuario',
  templateUrl: './new-usuario.component.html',
  styleUrls: ['./new-usuario.component.css']
})
export class NewUsuarioComponent implements OnInit {

  newUser:Usuario=new Usuario(0,'','','',0,0,'','','','',0,'','','','','','');
  usuarios:Usuario[];
  constructor(private _usuariosService:UsuariosService, private _router:Router) { }

  ngOnInit() {
    this._usuariosService.getUsuarioFromApi().subscribe(losUsuarios=>
      {this.usuarios=losUsuarios;}
    );
  }
  
  onSubmit(myForm:NgForm){
    console.log(myForm,this.newUser);
    if(myForm.valid){
      let isOk = this._usuariosService.addUsuario(this.newUser);
      if(isOk) this._router.navigate(['/usuarios']);
      }
    }
  }


