import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from '../../services/usuarios.service';
import { AlertService } from '../../services/alert.service';
import { Usuario } from '../../modelos/usuario';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-registro',
    templateUrl: './registro.component.html',
    styleUrls: ['./registro.component.css']
})

export class RegistroComponent implements OnInit{

    newUser: Usuario = new Usuario(0, '', '', '', 0, 0, '', '', '', '', 0, '', '', '', '', '', '');
    model: any = {};
    loading = false;
    usuarios:Usuario[];
    constructor(
        private _router: Router,
        private _usuariosService: UsuariosService,
        private alertService: AlertService) { }

    ngOnInit() {
        this._usuariosService.getUsuarioFromApi().subscribe(losUsuarios=>
            {this.usuarios=losUsuarios;}
          );
        
    }

    onSubmit(myForm: NgForm) {
        if (myForm.valid) {
            let isOk = this._usuariosService.addUsuario(this.newUser);
            if (isOk) this._router.navigate(['/usuarios']);
        }
    }

}
    /*register() {
        this.loading = true;
        this.userService.addUsuarioToApi(this.model)
            .subscribe(
                data => {
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/login']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}*/