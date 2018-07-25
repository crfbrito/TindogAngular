import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { UsuariosComponent } from "./usuarios/usuarios.component";

import { TareasComponent } from './tareas/tareas.component';
import { HeaderComponent } from './header/header.component';
import { SectionComponent } from './section/section.component';
import { LogoComponente } from './header/logo/logo.componente';
import { MenuComponent } from './header/menu/menu.component';

import {LogoService} from './services/logo.service'
import { TareasService } from './services/tareas.service';
import { UsuariosService } from './services/usuarios.service';
import { AlertService } from "./services/alert.service";
import { FiltradorPipe } from './pipes/filtrador.pipe';
import { PageNotFoundComponentComponent } from './commons/page-not-found-component/page-not-found-component.component';

import {routingProv} from './routing';
import { DetalleTareaComponent } from './tareas/detalle-tarea/detalle-tarea.component';
import { DetalleUsuarioComponent } from "./usuarios/detalle-usuario/detalle-usuario.component";
import { NewUsuarioComponent } from './usuarios/new-usuario/new-usuario.component';
import { NewTareaComponent } from './tareas/new-tarea/new-tarea.component';
import { LoginComponent } from './login/login.component'

import {MatButtonModule,
  MatMenuModule,
  MatFormFieldModule,
  MatInputModule,
  MatToolbarModule,
  MatIconModule,
  MatListModule,
  MatCardModule} from '@angular/material';

  import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistroComponent } from './usuarios/registro/registro.component';
import { LogoutComponent } from './logout/logout.component';


@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    TareasComponent,
    HeaderComponent,
    SectionComponent,
    LogoComponente,
    MenuComponent,
    FiltradorPipe,
    PageNotFoundComponentComponent,
    DetalleTareaComponent,
    DetalleUsuarioComponent,
    NewUsuarioComponent,
    NewTareaComponent,
    LoginComponent,
    RegistroComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routingProv,
    HttpClientModule,

    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  providers: [
    LogoService,
    TareasService,
    UsuariosService,
    AlertService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
