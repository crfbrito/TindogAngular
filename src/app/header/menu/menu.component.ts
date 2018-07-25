import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger,MatButton } from '@angular/material';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  listaMenu:string[];
  showTitle:boolean=true;
  unClase:string="rojo";

  constructor() {    
   }

  ngOnInit() {
    this.listaMenu=["Tareas","Usuarios","Quienes somos","Blog"];
  }

}
