import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TareasComponent } from './tareas/tareas.component';

import { PageNotFoundComponentComponent } from './commons/page-not-found-component/page-not-found-component.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { DetalleTareaComponent } from './tareas/detalle-tarea/detalle-tarea.component';
import { DetalleUsuarioComponent } from './usuarios/detalle-usuario/detalle-usuario.component';
import { NewUsuarioComponent } from './usuarios/new-usuario/new-usuario.component';
import { NewTareaComponent } from './tareas/new-tarea/new-tarea.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './usuarios/registro/registro.component';
import { LogoutComponent } from './logout/logout.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'logout', component: LogoutComponent, pathMatch: 'full' },
  { path: 'registro', component: RegistroComponent, pathMatch: 'full' },
  { path: 'tareas', component: TareasComponent, pathMatch: 'full' },
  { path: 'tareas/new', component: NewTareaComponent, pathMatch: 'full' },
  { path: 'tareas/:tid', component: DetalleTareaComponent, pathMatch: 'full' },
  { path: 'usuarios', component: UsuariosComponent, pathMatch: 'full' },
  { path: 'usuarios/new', component: NewUsuarioComponent, pathMatch: 'full' },
  { path: 'usuarios/:uid', component: DetalleUsuarioComponent, pathMatch: 'full' },
  { path: '',redirectTo: '/login',pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponentComponent }
];

export const routingProv: ModuleWithProviders = RouterModule.forRoot(appRoutes);