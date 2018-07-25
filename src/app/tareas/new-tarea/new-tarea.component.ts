import { Component, OnInit } from '@angular/core';
import { Tarea } from '../../modelos/tarea';
import { Usuario } from '../../modelos/usuario';
import { UsuariosService } from '../../services/usuarios.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TareasService } from '../../services/tareas.service';

@Component({
  selector: 'app-new-tarea',
  templateUrl: './new-tarea.component.html',
  styleUrls: ['./new-tarea.component.css']
})
export class NewTareaComponent implements OnInit {

  newTarea:Tarea=new Tarea(0,'',0,0);
  usuarios:Usuario[];

  constructor(private _usuariosService:UsuariosService,private _tareasService:TareasService,private _router:Router) { }

  ngOnInit() {
    this._usuariosService.getUsuarioFromApi().subscribe(losUsuarios=>
      {this.usuarios=losUsuarios;}
    );
  }

  onSubmit(myForm:NgForm){
    if(myForm.valid){
      let isOk = this._tareasService.addTarea(this.newTarea);
      if(isOk) this._router.navigate(['/tareas']);
    }
  }

}
