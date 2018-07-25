import { Component, OnInit } from '@angular/core';
import { Usuario } from '../modelos/usuario';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario = new Usuario();
  errorForm: boolean = false;
  errorServer: boolean = false;

  constructor(private _authService: AuthService, private _router:Router) { }

  ngOnInit() {
  }

  onSubmit(loginForm: NgForm) {
    //console.log(loginForm, this.usuario);
    if (loginForm.valid) {
      this._authService.authenticateUser(this.usuario).subscribe(
        token => { this._router.navigate(['/usuarios']) },
        error => { this.errorServer = true; }
      );
    } else {
      this.errorForm = true;
    }
  }

}
